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
    @Query("select r, a.crawlingCnt from Ramen r join fetch Composition c, Analysis a where c.liquid = 1")
    List<Object[]> findRamensByCompositionLiquid();

    @Query("select r, a.crawlingCnt from Ramen r join fetch Composition c, Analysis a where c.powder = 1")
    List<Object[]> findRamensByCompositionPowder();

    @Query("select r, a.crawlingCnt from Ramen r join fetch Composition c, Analysis a where c.seasoning = 1")
    List<Object[]> findRamensByCompositionSeasoning();

    @Query("select r, a.crawlingCnt from Ramen r join fetch Composition c, Analysis a where c.soup = 1")
    List<Object[]> findRamensByCompositionSoup();

    @Query("select r, a.crawlingCnt from Ramen r join fetch Composition c, Analysis a where c.cup = 1")
    List<Object[]> findRamensByCompositionCup();

    @Query("select r, a.crawlingCnt from Ramen r join fetch Composition c, Analysis a where c.cold = 1")
    List<Object[]> findRamensByCompositionCold();

    @Query("select r, a.crawlingCnt from Ramen r join fetch Composition c, Analysis a where c.jjajang = 1")
    List<Object[]> findRamensByCompositionJjajang();

    // 볶음, 비빔
    @Query("select r, a.crawlingCnt from Ramen r join fetch Composition c, Analysis a where c.jjajang = 0 and c.soup = 0")
    List<Object[]> findRamensByCompositionBB();

    // noodle
    @Query("select r from Ramen r where r.noodle = :noodle")
    List<Object[]> findRamensByNoodle(@Param("noodle") String noodle);

    @Query("select r from Ramen r where r.noodle <> '건면' and r.noodle <> '유탕면' ")
    List<Object[]> findRamensBySoftNoodle();


    // Analysis 선택
    @Query("select r, a.crawlingCnt from Ramen r join fetch Analysis a where a.kkoDeul > 0 ")
    List<Object[]> findRamensByAnalysisKkoDeul();

    @Query("select r, a.crawlingCnt from Ramen r join fetch Analysis a where a.taengGeul > 0 ")
    List<Object[]> findRamensByAnalysisTaengGeul();

    @Query("select r, a.crawlingCnt from Ramen r join fetch Analysis a where a.jjolGit > 0 ")
    List<Object[]> findRamensByAnalysisJjolGit();

    @Query("select r, a.crawlingCnt from Ramen r join fetch Analysis a where a.greenOnion> 0 ")
    List<Object[]> findRamensByAnalysisGreenOnion();

    @Query("select r, a.crawlingCnt from Ramen r join fetch Analysis a where a.egg > 0 ")
    List<Object[]> findRamensByAnalysisEgg();

    @Query("select r, a.crawlingCnt from Ramen r join fetch Analysis a where a.beef > 0 ")
    List<Object[]> findRamensByAnalysisBeef();

    @Query("select r, a.crawlingCnt from Ramen r join fetch Analysis a where a.pork > 0 ")
    List<Object[]> findRamensByAnalysisPork();

    @Query("select r, a.crawlingCnt from Ramen r join fetch Analysis a where a.chickenBreast > 0 ")
    List<Object[]> findRamensByAnalysisChickenBreast();

    @Query("select r, a.crawlingCnt from Ramen r join fetch Analysis a where a.milk > 0 ")
    List<Object[]> findRamensByAnalysisMilk();

    @Query("select r, a.crawlingCnt from Ramen r join fetch Analysis a where a.riceCake > 0 ")
    List<Object[]> findRamensByAnalysisRiceCake();

    @Query("select r, a.crawlingCnt from Ramen r join fetch Analysis a where a.dumpling > 0 ")
    List<Object[]> findRamensByAnalysisDumpling();

    @Query("select r, a.crawlingCnt from Ramen r join fetch Analysis a where a.softTofu > 0 ")
    List<Object[]> findRamensByAnalysisSoftTofu();

    @Query("select r, a.crawlingCnt from Ramen r join fetch Analysis a where a.kimchi > 0 ")
    List<Object[]> findRamensByAnalysisKimchi();

    @Query("select r, a.crawlingCnt from Ramen r join fetch Analysis a where a.mayonnaise > 0 ")
    List<Object[]> findRamensByAnalysisMayonnaise();

    @Query("select r, a.crawlingCnt from Ramen r join fetch Analysis a where a.cheese > 0 ")
    List<Object[]> findRamensByAnalysisCheese();

    @Query("select r, a.crawlingCnt from Ramen r join fetch Analysis a where a.garlic > 0 ")
    List<Object[]> findRamensByAnalysisGarlic();

    @Query("select r, a.crawlingCnt from Ramen r join fetch Analysis a where a.pepper > 0 ")
    List<Object[]> findRamensByAnalysisPepper();

    @Query("select r, a.crawlingCnt from Ramen r join fetch Analysis a where a.chiliPowder > 0 ")
    List<Object[]> findRamensByAnalysisChiliPowder();

    @Query("select r, a.crawlingCnt from Ramen r join fetch Analysis a where a.beanSprouts > 0 ")
    List<Object[]> findRamensByAnalysisBeanSprouts();

    @Query("select r, a.crawlingCnt from Ramen r join fetch Analysis a where a.redPepper > 0 ")
    List<Object[]> findRamensByAnalysisRedPepper();

    @Query("select r, a.crawlingCnt from Ramen r join fetch Analysis a where a.soyaSprouts > 0 ")
    List<Object[]> findRamensByAnalysisSoyaSprouts();

    @Query("select r, a.crawlingCnt from Ramen r join fetch Analysis a where a.seafood > 0 ")
    List<Object[]> findRamensByAnalysisSeafood();

    @Query("select r, a.crawlingCnt from Ramen r join fetch Analysis a where a.seaweed > 0 ")
    List<Object[]> findRamensByAnalysisSeaweed();

    @Query("select r, a.crawlingCnt from Ramen r join fetch Analysis a where a.sausage > 0 ")
    List<Object[]> findRamensByAnalysisSausage();

    @Query("select r, a.crawlingCnt from Ramen r join fetch Analysis a where a.tuna > 0 ")
    List<Object[]> findRamensByAnalysisTuna();

    @Query("select r, a.crawlingCnt from Ramen r join fetch Analysis a where a.ketchup > 0 ")
    List<Object[]> findRamensByAnalysisKetchup();

    @Query("select r, a.crawlingCnt from Ramen r join fetch Analysis a where a.vegan > 0 ")
    List<Object[]> findRamensByAnalysisVegan();

    @Query("select r, a.crawlingCnt from Ramen r join fetch Analysis a where a.diet > 0 ")
    List<Object[]> findRamensByAnalysisDiet();

    @Query("select r, a.crawlingCnt from Ramen r join fetch Analysis a where a.spicy > 0 ")
    List<Object[]> findRamensByAnalysisSpicy();

    @Query("select r, a.crawlingCnt from Ramen r join fetch Analysis a where a.lightness > 0 ")
    List<Object[]> findRamensByAnalysisLightness();

    @Query("select r, a.crawlingCnt from Ramen r join fetch Analysis a where a.haejang > 0 ")
    List<Object[]> findRamensByAnalysisHaejang();

}