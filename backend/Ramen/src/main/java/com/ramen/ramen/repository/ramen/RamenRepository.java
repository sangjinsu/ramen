package com.ramen.ramen.repository.ramen;

import com.ramen.ramen.domain.Ramen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


// Query dsl 추후 적용
public interface RamenRepository extends JpaRepository<Ramen, Long> {


    // Composition 선택 // 최대 3개까지 받은 후 중복 제거 및 crawl cnt 필터링 후 카테고리 별 정렬
    // category 1
    @Query("select r.ramenId,r.name,r.englishName,r.brand, r.englishBrand, a.crawlingCnt from Ramen r join Composition c on c.compositionId = r.ramenId join Analysis a on r.ramenId = a.analysisId where c.cup = 0")
    List<Object[]> findRamensByCompositionBongji();

    @Query("select r.ramenId,r.name,r.englishName,r.brand, r.englishBrand, a.crawlingCnt from Ramen r join Composition c on c.compositionId = r.ramenId join Analysis a on r.ramenId = a.analysisId where c.cup = 1")
    List<Object[]> findRamensByCompositionCup();

    // category 2
    @Query("select r.ramenId,r.name,r.englishName,r.brand, r.englishBrand, a.crawlingCnt from Ramen r join Composition c on c.compositionId = r.ramenId join Analysis a on r.ramenId = a.analysisId where r.noodle = '건면'")
    List<Object[]> findRamensByFriedNoodle();

    @Query("select r.ramenId,r.name,r.englishName,r.brand, r.englishBrand, a.crawlingCnt from Ramen r join Composition c on c.compositionId = r.ramenId join Analysis a on r.ramenId = a.analysisId where r.noodle = '유탕면'")
    List<Object[]> findRamensByOiledNoodle();

    @Query("select r.ramenId,r.name,r.englishName,r.brand, r.englishBrand, a.crawlingCnt from Ramen r join Composition c on c.compositionId = r.ramenId join Analysis a on r.ramenId = a.analysisId where r.noodle <> '건면' and r.noodle <> '유탕면' ")
    List<Object[]> findRamensBySoftNoodle();

    // category 3
    @Query("select r.ramenId,r.name,r.englishName,r.brand, r.englishBrand, a.crawlingCnt from Ramen r join Composition c on c.compositionId = r.ramenId join Analysis a on r.ramenId = a.analysisId where c.soup = 1")
    List<Object[]> findRamensByCompositionSoup();

    @Query("select r.ramenId,r.name,r.englishName,r.brand, r.englishBrand, a.crawlingCnt from Ramen r join Composition c on c.compositionId = r.ramenId join Analysis a on r.ramenId = a.analysisId where c.jjajang = 0 and c.soup = 0")
    List<Object[]> findRamensByCompositionBB();

    @Query("select r.ramenId,r.name,r.englishName,r.brand, r.englishBrand, a.crawlingCnt from Ramen r join Composition c on c.compositionId = r.ramenId join Analysis a on r.ramenId = a.analysisId where c.jjajang = 1")
    List<Object[]> findRamensByCompositionJjajang();


    // Analysis 선택
    @Query("select r.ramenId,r.name,r.englishName,r.brand, r.englishBrand, a.kkoDeul from Ramen r join fetch Analysis a on r.ramenId = a.analysisId where a.crawlingCnt > -0.175 ")
    List<Object[]> findRamensByAnalysisKkoDeul();

    @Query("select r.ramenId,r.name,r.englishName,r.brand, r.englishBrand, a.taengGeul from Ramen r join fetch Analysis a on r.ramenId = a.analysisId where a.crawlingCnt > 0.5 ")
    List<Object[]> findRamensByAnalysisTaengGeul();

    @Query("select r.ramenId,r.name,r.englishName,r.brand, r.englishBrand, a.jjolGit from Ramen r join fetch Analysis a on r.ramenId = a.analysisId where a.crawlingCnt > 0.5 ")
    List<Object[]> findRamensByAnalysisJjolGit();

    @Query("select r.ramenId,r.name,r.englishName,r.brand, r.englishBrand, a.greenOnion from Ramen r join fetch Analysis a on r.ramenId = a.analysisId where a.crawlingCnt > 0.5 ")
    List<Object[]> findRamensByAnalysisGreenOnion();

    @Query("select r.ramenId,r.name,r.englishName,r.brand, r.englishBrand, a.egg from Ramen r join fetch Analysis a on r.ramenId = a.analysisId where a.crawlingCnt > 0.5 ")
    List<Object[]> findRamensByAnalysisEgg();

    @Query("select r.ramenId,r.name,r.englishName,r.brand, r.englishBrand, a.beef from Ramen r join fetch Analysis a on r.ramenId = a.analysisId where a.crawlingCnt > 0.5 ")
    List<Object[]> findRamensByAnalysisBeef();

    @Query("select r.ramenId,r.name,r.englishName,r.brand, r.englishBrand, a.pork from Ramen r join fetch Analysis a on r.ramenId = a.analysisId where a.crawlingCnt > 0.5 ")
    List<Object[]> findRamensByAnalysisPork();

    @Query("select r.ramenId,r.name,r.englishName,r.brand, r.englishBrand, a.chickenBreast from Ramen r join fetch Analysis a on r.ramenId = a.analysisId where a.crawlingCnt > 0.5 ")
    List<Object[]> findRamensByAnalysisChickenBreast();

    @Query("select r.ramenId,r.name,r.englishName,r.brand, r.englishBrand, a.milk from Ramen r join fetch Analysis a on r.ramenId = a.analysisId where a.crawlingCnt > 0.5 ")
    List<Object[]> findRamensByAnalysisMilk();

    @Query("select r.ramenId,r.name,r.englishName,r.brand, r.englishBrand, a.riceCake from Ramen r join fetch Analysis a on r.ramenId = a.analysisId where a.crawlingCnt > 0.5 ")
    List<Object[]> findRamensByAnalysisRiceCake();

    @Query("select r.ramenId,r.name,r.englishName,r.brand, r.englishBrand, a.dumpling from Ramen r join fetch Analysis a on r.ramenId = a.analysisId where a.crawlingCnt > 0.5 ")
    List<Object[]> findRamensByAnalysisDumpling();

    @Query("select r.ramenId,r.name,r.englishName,r.brand, r.englishBrand, a.softTofu from Ramen r join fetch Analysis a on r.ramenId = a.analysisId where a.crawlingCnt > 0.5 ")
    List<Object[]> findRamensByAnalysisSoftTofu();

    @Query("select r.ramenId,r.name,r.englishName,r.brand, r.englishBrand, a.kimchi from Ramen r join fetch Analysis a on r.ramenId = a.analysisId where a.crawlingCnt > 0.5 ")
    List<Object[]> findRamensByAnalysisKimchi();

    @Query("select r.ramenId,r.name,r.englishName,r.brand, r.englishBrand, a.mayonnaise from Ramen r join fetch Analysis a on r.ramenId = a.analysisId where a.crawlingCnt > 0.5 ")
    List<Object[]> findRamensByAnalysisMayonnaise();

    @Query("select r.ramenId,r.name,r.englishName,r.brand, r.englishBrand, a.cheese from Ramen r join fetch Analysis a on r.ramenId = a.analysisId where a.crawlingCnt > 0.5 ")
    List<Object[]> findRamensByAnalysisCheese();

    @Query("select r.ramenId,r.name,r.englishName,r.brand, r.englishBrand, a.garlic from Ramen r join fetch Analysis a on r.ramenId = a.analysisId where a.crawlingCnt > 0.5 ")
    List<Object[]> findRamensByAnalysisGarlic();

    @Query("select r.ramenId,r.name,r.englishName,r.brand, r.englishBrand, a.pepper from Ramen r join fetch Analysis a on r.ramenId = a.analysisId where a.crawlingCnt > 0.5 ")
    List<Object[]> findRamensByAnalysisPepper();

    @Query("select r.ramenId,r.name,r.englishName,r.brand, r.englishBrand, a.chiliPowder from Ramen r join fetch Analysis a on r.ramenId = a.analysisId where a.crawlingCnt > 0.5 ")
    List<Object[]> findRamensByAnalysisChiliPowder();

    @Query("select r.ramenId,r.name,r.englishName,r.brand, r.englishBrand, a.beanSprouts from Ramen r join fetch Analysis a on r.ramenId = a.analysisId where a.crawlingCnt > 0.5 ")
    List<Object[]> findRamensByAnalysisBeanSprouts();

    @Query("select r.ramenId,r.name,r.englishName,r.brand, r.englishBrand, a.redPepper from Ramen r join fetch Analysis a on r.ramenId = a.analysisId where a.crawlingCnt > 0.5 ")
    List<Object[]> findRamensByAnalysisRedPepper();

    @Query("select r.ramenId,r.name,r.englishName,r.brand, r.englishBrand, a.soyaSprouts from Ramen r join fetch Analysis a on r.ramenId = a.analysisId where a.crawlingCnt > 0.5 ")
    List<Object[]> findRamensByAnalysisSoyaSprouts();

    @Query("select r.ramenId,r.name,r.englishName,r.brand, r.englishBrand, a.seafood from Ramen r join fetch Analysis a on r.ramenId = a.analysisId where a.crawlingCnt > 0.5 ")
    List<Object[]> findRamensByAnalysisSeafood();

    @Query("select r.ramenId,r.name,r.englishName,r.brand, r.englishBrand, a.seaweed from Ramen r join fetch Analysis a on r.ramenId = a.analysisId where a.crawlingCnt > 0.5 ")
    List<Object[]> findRamensByAnalysisSeaweed();

    @Query("select r.ramenId,r.name,r.englishName,r.brand, r.englishBrand, a.sausage from Ramen r join fetch Analysis a on r.ramenId = a.analysisId where a.crawlingCnt > 0.5 ")
    List<Object[]> findRamensByAnalysisSausage();

    @Query("select r.ramenId,r.name,r.englishName,r.brand, r.englishBrand, a.tuna from Ramen r join fetch Analysis a on r.ramenId = a.analysisId where a.crawlingCnt > 0.5 ")
    List<Object[]> findRamensByAnalysisTuna();

    @Query("select r.ramenId,r.name,r.englishName,r.brand, r.englishBrand, a.ketchup from Ramen r join fetch Analysis a on r.ramenId = a.analysisId where a.crawlingCnt > 0.5 ")
    List<Object[]> findRamensByAnalysisKetchup();

    @Query("select r.ramenId,r.name,r.englishName,r.brand, r.englishBrand, a.vegan from Ramen r join fetch Analysis a on r.ramenId = a.analysisId where a.crawlingCnt > 0.5 ")
    List<Object[]> findRamensByAnalysisVegan();

    @Query("select r.ramenId,r.name,r.englishName,r.brand, r.englishBrand, a.diet from Ramen r join fetch Analysis a on r.ramenId = a.analysisId where a.crawlingCnt > 0.5 ")
    List<Object[]> findRamensByAnalysisDiet();

    @Query("select r.ramenId,r.name,r.englishName,r.brand, r.englishBrand, a.spicy from Ramen r join fetch Analysis a on r.ramenId = a.analysisId where a.crawlingCnt > 0.5 ")
    List<Object[]> findRamensByAnalysisSpicy();

    @Query("select r.ramenId,r.name,r.englishName,r.brand, r.englishBrand, a.lightness from Ramen r join fetch Analysis a on r.ramenId = a.analysisId where a.crawlingCnt > 0.5 ")
    List<Object[]> findRamensByAnalysisLightness();

    @Query("select r.ramenId,r.name,r.englishName,r.brand, r.englishBrand, a.haejang from Ramen r join fetch Analysis a on r.ramenId = a.analysisId where a.crawlingCnt > 0.5 ")
    List<Object[]> findRamensByAnalysisHaejang();
}