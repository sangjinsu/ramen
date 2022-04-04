package query

import (
	"bytes"
	"encoding/json"
	"log"
)

type SearchQueries struct {
}

func (sq *SearchQueries) encodeQuery(query map[string]interface{}) bytes.Buffer {
	var buf bytes.Buffer

	if err := json.NewEncoder(&buf).Encode(query); err != nil {
		log.Fatalf("Error encoding query: %s", err)
	}
	return buf
}

func (sq *SearchQueries) RamenName(name string) bytes.Buffer {
	query := map[string]interface{}{
		"size":    10000,
		"_source": []string{"ramen_id", "noodle", "crawling_cnt", "brand", "english_brand", "name", "english_name"},
		"query": map[string]interface{}{
			"bool": map[string]interface{}{
				"should": []map[string]interface{}{
					{"match_phrase_prefix": map[string]interface{}{"name": name}},
					{"match_phrase_prefix": map[string]interface{}{"english_name": name}},
				},
			},
		},
	}

	buf := sq.encodeQuery(query)

	return buf
}

func (sq *SearchQueries) RamenBrand(brand string) bytes.Buffer {
	query := map[string]interface{}{
		"size":    10000,
		"_source": []string{"ramen_id", "noodle", "crawling_cnt", "brand", "english_brand", "name", "english_name"},
		"query": map[string]interface{}{
			"bool": map[string]interface{}{
				"should": []map[string]interface{}{
					{"match_phrase_prefix": map[string]interface{}{"brand": brand}},
					{"match_phrase_prefix": map[string]interface{}{"english_brand": brand}},
				},
			},
		},
	}

	buf := sq.encodeQuery(query)

	return buf
}
