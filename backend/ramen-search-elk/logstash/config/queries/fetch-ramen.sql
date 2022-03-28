SELECT r.ramen_id, r.name, r.english_name, r.brand, r.english_brand, r.noodle, a.crawling_cnt
FROM dbmaster.ramen r
join dbmaster.analysis a
on r.ramen_id = a.analysis_id




