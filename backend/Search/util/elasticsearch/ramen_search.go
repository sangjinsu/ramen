package elasticsearch

import (
	"bytes"
	"context"
	"encoding/json"
	"github.com/elastic/go-elasticsearch"
	"github.com/elastic/go-elasticsearch/esapi"
	"github.com/google/uuid"
	"log"
	"strings"
)

type Search interface {
	Query(buf bytes.Buffer, index string) map[string]interface{}
	Send(query string, index string)
}

type search struct {
	es        *elasticsearch.Client
	addresses []string
}

func (st *search) Query(buf bytes.Buffer, index string) map[string]interface{} {
	var r map[string]interface{}

	res, err := st.es.Search(
		st.es.Search.WithContext(context.Background()),
		st.es.Search.WithIndex(index),
		st.es.Search.WithBody(&buf),
		st.es.Search.WithTrackTotalHits(true),
		st.es.Search.WithPretty(),
	)
	if err != nil {
		log.Fatalf("Error getting response: %s", err)
	}
	defer res.Body.Close()

	if res.IsError() {
		var e map[string]interface{}
		if err := json.NewDecoder(res.Body).Decode(&e); err != nil {
			log.Fatalf("Error parsing the response body: %s", err)
		} else {
			// Print the response status and error information.
			log.Fatalf("[%s] %s: %s",
				res.Status(),
				e["error"].(map[string]interface{})["type"],
				e["error"].(map[string]interface{})["reason"],
			)
		}
	}

	if err := json.NewDecoder(res.Body).Decode(&r); err != nil {
		log.Fatalf("Error parsing the response body: %s", err)
	}

	return r
}

func (st *search) Send(query string, index string) {
	u, _ := uuid.NewRandom()
	documentId := u.String()
	go func(query string, index string) {
		// Build the request body.
		var b strings.Builder
		b.WriteString(`{"query" : "`)
		b.WriteString(query)
		b.WriteString(`"}`)

		// Set up the request object.
		req := esapi.IndexRequest{
			Index:      index,
			DocumentID: documentId,
			Body:       strings.NewReader(b.String()),
			Refresh:    "true",
		}

		// Perform the request with the client.
		res, err := req.Do(context.Background(), st.es)
		if err != nil {
			log.Fatalf("Error getting response: %s", err)
		}
		defer res.Body.Close()

		if res.IsError() {
			log.Printf("[%s] Error indexing document ID=%s", res.Status(), documentId)
		}
	}(query, index)
}

type SearchBuilder interface {
	Addresses(...string) SearchBuilder
	Build() Search
}

type searchBuilder struct {
	addresses []string
}

func (sb *searchBuilder) Addresses(addresses ...string) SearchBuilder {
	sb.addresses = addresses
	return sb
}

func (sb *searchBuilder) Build() Search {

	cfg := elasticsearch.Config{
		Addresses: sb.addresses,
	}

	es, err := elasticsearch.NewClient(cfg)
	if err != nil {
		log.Fatalf("Error creating the searchtag: %s", err)
	}

	return &search{
		addresses: sb.addresses,
		es:        es,
	}
}

func New() SearchBuilder {
	return &searchBuilder{}
}
