package controller

import (
	"Search/query"
	"Search/util/elasticsearch"
	"Search/util/loaddotenv"
	"bytes"
	"github.com/gofiber/fiber/v2"
	"sync"
)

var wg sync.WaitGroup
var elasticSearch = elasticsearch.New().Addresses(loaddotenv.LoadDotEnv("ELASTICSEARCH_SERVER")).Build()
var searchQueries = query.SearchQueries{}

type RamenResponse struct {
	ramenId      float64
	name         string
	englishName  string
	brand        string
	englishBrand string
	noodle       string
	crawlingCnt  float64
}

func SearchName(c *fiber.Ctx) error {
	name := c.Query("query")
	responses := queryElasticSearch(name, searchQueries.RamenName)
	return c.JSON(responses)
}

func SearchBrand(c *fiber.Ctx) error {
	brand := c.Query("query")
	responses := queryElasticSearch(brand, searchQueries.RamenBrand)
	return c.JSON(responses)
}

func queryElasticSearch(name string, query func(name string) bytes.Buffer) []*RamenResponse {
	var r map[string]interface{}
	r = elasticSearch.Query(query(name), "ramen")
	hits := r["hits"].(map[string]interface{})["hits"].([]interface{})

	responses := []*RamenResponse{}

	for _, hit := range hits {
		source := hit.(map[string]interface{})["_source"].(map[string]interface{})
		ramenId := source["ramen_id"].(float64)
		ramenName := source["name"].(string)
		englishName := source["english_name"].(string)
		brand := source["brand"].(string)
		englishBrand := source["english_brand"].(string)
		noodle := source["noodle"].(string)
		crawlingCnt := source["crawling_cnt"].(float64)
		response := &RamenResponse{
			ramenId:      ramenId,
			name:         ramenName,
			englishName:  englishName,
			brand:        brand,
			englishBrand: englishBrand,
			noodle:       noodle,
			crawlingCnt:  crawlingCnt,
		}
		responses = append(responses, response)
	}
	return responses
}
