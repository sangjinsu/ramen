SELECT *
FROM dbmaster.ramen r
JOIN dbmaster.nutrient n ON n.nutrient_id = r.ramen_id
JOIN dbmaster.composition p ON p.composition_id = r.ramen_id
JOIN dbmaster.analysis a ON a.analysis_id = r.ramen_id

