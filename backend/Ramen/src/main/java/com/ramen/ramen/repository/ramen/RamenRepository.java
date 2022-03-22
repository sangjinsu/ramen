package com.ramen.ramen.repository.ramen;

import com.ramen.ramen.domain.Member;
import com.ramen.ramen.domain.Ramen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


// Query dsl 추후 적용
public interface RamenRepository extends JpaRepository<Ramen, Long> {

    // Composition 선택 // 최대 3개까지 받은 후 중복 제거 및 crawl cnt 순으로 정렬
    @Query("select r from Ramen r join fetch Composition c where c.liquid = 1")
    List<Ramen> findRamensByCompositionLiquid();

    @Query("select r from Ramen r join fetch Composition c where c.powder = 1")
    List<Ramen> findRamensByCompositionPowder();

    @Query("select r from Ramen r join fetch Composition c where c.seasoning = 1")
    List<Ramen> findRamensByCompositionSeasoning();

    @Query("select r from Ramen r join fetch Composition c where c.soup = 1")
    List<Ramen> findRamensByCompositionSoup();

    @Query("select r from Ramen r join fetch Composition c where c.cup = 1")
    List<Ramen> findRamensByCompositionCup();

    @Query("select r from Ramen r join fetch Composition c where c.cold = 1")
    List<Ramen> findRamensByCompositionCold();

    @Query("select r from Ramen r join fetch Composition c where c.jjajang = 1")
    List<Ramen> findRamensByCompositionJjajang();

    // noodle
    @Query("select r from Ramen r where r.noodle = :noodle")
    List<Ramen> findRamensByNoodle(@Param("noodle") String noodle);

//    taste_dict = {
//        'kko_deul'
//        'taeng_geul'
//        'jjol_git'
//        'green Onion'
//        'egg'
//        'beef'
//        'pork'
//        'chicken_breast'
//        'milk'
//        'rice_cake'
//        'dumpling'
//        'soft_tofu'
//        'kimchi'
//        'mayonnaise'
//        'cheese'
//        'garlic'
//        'pepper'
//        'chili_powder'
//        'bean sprouts'
//        'red pepper'
//        'soya sprouts'
//        'seefood'
//        'seaweed'
//        'sausage'
//        'tuna'
//        'ketchup'
//        'vegan'
//        'diet'
//        'spicy'
//        'lightness'
//        'Haejang'
//    }

//    // Analysis 선택
//    @Query("select r from Ramen r join fetch Analysis a where a.:analysis > 0 ") // order by a.crawlingCnt
//    List<Ramen> findRamensByAnalysis(@Param("analysis") String analysis);

    // Analysis 선택
    @Query("select r from Ramen r join fetch Analysis a where a.kko_deul > 0 ")
    List<Ramen> findRamensByAnalysisKko_deul();

    @Query("select r from Ramen r join fetch Analysis a where a.beef > 0 ")
    List<Ramen> findRamensByAnalysisBeef();

    @Query("select r from Ramen r join fetch Analysis a where a.needtochange > 0 ")
    List<Ramen> findRamensByAnalysis();

    @Query("select r from Ramen r join fetch Analysis a where a.needtochange > 0 ")
    List<Ramen> findRamensByAnalysis();

    @Query("select r from Ramen r join fetch Analysis a where a.needtochange > 0 ")
    List<Ramen> findRamensByAnalysis();

    @Query("select r from Ramen r join fetch Analysis a where a.needtochange > 0 ")
    List<Ramen> findRamensByAnalysis();

    @Query("select r from Ramen r join fetch Analysis a where a.needtochange > 0 ")
    List<Ramen> findRamensByAnalysis();

    @Query("select r from Ramen r join fetch Analysis a where a.needtochange > 0 ")
    List<Ramen> findRamensByAnalysis();

    @Query("select r from Ramen r join fetch Analysis a where a.needtochange > 0 ")
    List<Ramen> findRamensByAnalysis();

    @Query("select r from Ramen r join fetch Analysis a where a.needtochange > 0 ")
    List<Ramen> findRamensByAnalysis();

    @Query("select r from Ramen r join fetch Analysis a where a.needtochange > 0 ")
    List<Ramen> findRamensByAnalysis();

    @Query("select r from Ramen r join fetch Analysis a where a.needtochange > 0 ")
    List<Ramen> findRamensByAnalysis();

    @Query("select r from Ramen r join fetch Analysis a where a.needtochange > 0 ")
    List<Ramen> findRamensByAnalysis();

    @Query("select r from Ramen r join fetch Analysis a where a.needtochange > 0 ")
    List<Ramen> findRamensByAnalysis();

    @Query("select r from Ramen r join fetch Analysis a where a.needtochange > 0 ")
    List<Ramen> findRamensByAnalysis();

    @Query("select r from Ramen r join fetch Analysis a where a.needtochange > 0 ")
    List<Ramen> findRamensByAnalysis();

    @Query("select r from Ramen r join fetch Analysis a where a.needtochange > 0 ")
    List<Ramen> findRamensByAnalysis();

    @Query("select r from Ramen r join fetch Analysis a where a.needtochange > 0 ")
    List<Ramen> findRamensByAnalysis();

    @Query("select r from Ramen r join fetch Analysis a where a.needtochange > 0 ")
    List<Ramen> findRamensByAnalysis();

    @Query("select r from Ramen r join fetch Analysis a where a.needtochange > 0 ")
    List<Ramen> findRamensByAnalysis();

    @Query("select r from Ramen r join fetch Analysis a where a.needtochange > 0 ")
    List<Ramen> findRamensByAnalysis();

    @Query("select r from Ramen r join fetch Analysis a where a.needtochange > 0 ")
    List<Ramen> findRamensByAnalysis();

    @Query("select r from Ramen r join fetch Analysis a where a.needtochange > 0 ")
    List<Ramen> findRamensByAnalysis();

    @Query("select r from Ramen r join fetch Analysis a where a.needtochange > 0 ")
    List<Ramen> findRamensByAnalysis();

    @Query("select r from Ramen r join fetch Analysis a where a.needtochange > 0 ")
    List<Ramen> findRamensByAnalysis();

    @Query("select r from Ramen r join fetch Analysis a where a.needtochange > 0 ")
    List<Ramen> findRamensByAnalysis();

    @Query("select r from Ramen r join fetch Analysis a where a.needtochange > 0 ")
    List<Ramen> findRamensByAnalysis();

    @Query("select r from Ramen r join fetch Analysis a where a.needtochange > 0 ")
    List<Ramen> findRamensByAnalysis();

    @Query("select r from Ramen r join fetch Analysis a where a.needtochange > 0 ")
    List<Ramen> findRamensByAnalysis();

    @Query("select r from Ramen r join fetch Analysis a where a.needtochange > 0 ")
    List<Ramen> findRamensByAnalysis();

    @Query("select r from Ramen r join fetch Analysis a where a.needtochange > 0 ")
    List<Ramen> findRamensByAnalysis();

}