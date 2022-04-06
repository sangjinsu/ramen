package com.ramen.ramen.service.ramen;


import com.ramen.ramen.domain.Member;
import com.ramen.ramen.domain.MemberLikeRamen;
import com.ramen.ramen.domain.Ramen;
import com.ramen.ramen.dto.ramen.CategoryVo;
import com.ramen.ramen.dto.ramen.RamenDetailDto;
import com.ramen.ramen.dto.ramen.RamenListDto;
import com.ramen.ramen.dto.ramen.RamenSortDto;
import com.ramen.ramen.exception.LikeNotFoundException;
import com.ramen.ramen.exception.MemberNotFoundException;
import com.ramen.ramen.exception.RamenNotFoundException;
import com.ramen.ramen.repository.member.MemberLikeRamenRepository;
import com.ramen.ramen.repository.member.MemberRepository;
import com.ramen.ramen.repository.ramen.RamenRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class RamenService {

    private final RamenRepository ramenRepository;
    private final MemberRepository memberRepository;
    private final MemberLikeRamenRepository memberLikeRamenRepository;

    public RamenDetailDto fetchDetailRamen(Long ramenId) {

        Optional<Ramen> optionalRamen = ramenRepository.findById(ramenId);
        if (optionalRamen.isEmpty()) {
            throw new RamenNotFoundException();
        }

        Ramen ramen = optionalRamen.get();
        RamenDetailDto ramenDetailDto = new RamenDetailDto(ramen);

        return ramenDetailDto;
    }

    public void ramenislike(Long ramenId, Long memberId){
        Optional<Member> optionalMember = memberRepository.findById(memberId);
        if (optionalMember.isEmpty()) {
            throw new MemberNotFoundException();
        }

        Optional<Ramen> optionalRamen = ramenRepository.findById(ramenId);
        if (optionalRamen.isEmpty()) {
            throw new RamenNotFoundException();
        }

        Optional<MemberLikeRamen> memberLikeRamen = Optional.ofNullable(memberLikeRamenRepository.findRamenIsLiked(ramenId, memberId));
        if (memberLikeRamen.isEmpty()) {
            throw new LikeNotFoundException();
        }
    }

    public List<RamenListDto> fetchRamenListBongji() {

        List<Object[]> ramens = ramenRepository.findRamensByCompositionBongji();

        List<RamenSortDto> ramenSortDtos = new ArrayList<>();

        for (Object o[] : ramens) {
            Long ramenId = (Long) o[0];
            String name = (String) o[1];
            String englishName = (String) o[2];
            String brand = (String) o[3];
            String englishBrand = (String) o[4];
            double c = (double) o[5];

            ramenSortDtos.add(new RamenSortDto(ramenId, name, englishName, brand, englishBrand, c));
        }

        // 크롤링 순으로 정렬
        Collections.sort(ramenSortDtos, new RamenNameComparator());

        // dto 변환
        List<RamenListDto> ramenListDtos = ramenSortDtos.stream().map(RamenListDto::new).collect(Collectors.toList());

        return ramenListDtos;
    }

    public List<RamenListDto> fetchRamenListCup() {

        List<Object[]> ramens = ramenRepository.findRamensAll();

        List<RamenSortDto> ramenSortDtos = new ArrayList<>();

        for (Object o[] : ramens) {
            Long ramenId = (Long) o[0];
            String name = (String) o[1];
            String englishName = (String) o[2];
            String brand = (String) o[3];
            String englishBrand = (String) o[4];
            double c = (double) o[5];

            ramenSortDtos.add(new RamenSortDto(ramenId, name, englishName, brand, englishBrand, c));
        }

        // 크롤링 순으로 정렬
        Collections.sort(ramenSortDtos, new RamenNameComparator());

        // dto 변환
        List<RamenListDto> ramenListDtos = ramenSortDtos.stream().map(RamenListDto::new).collect(Collectors.toList());

        return ramenListDtos;
    }

    public List<RamenListDto> fetchRamensListAll() {

        List<Object[]> ramens = ramenRepository.findRamensByCompositionCup();

        List<RamenSortDto> ramenSortDtos = new ArrayList<>();

        for (Object o[] : ramens) {
            Long ramenId = (Long) o[0];
            String name = (String) o[1];
            String englishName = (String) o[2];
            String brand = (String) o[3];
            String englishBrand = (String) o[4];
            double c = (double) o[5];

            ramenSortDtos.add(new RamenSortDto(ramenId, name, englishName, brand, englishBrand, c));
        }

        // 크롤링 순으로 정렬
        Collections.sort(ramenSortDtos, new RamenNameComparator());

        // dto 변환
        List<RamenListDto> ramenListDtos = ramenSortDtos.stream().map(RamenListDto::new).collect(Collectors.toList());

        return ramenListDtos;
    }


    public List<RamenListDto> fetchRamensByCategory(CategoryVo category) { // List composition
        List<Object[]> ramens1 = null; // category 1
        List<Object[]> ramens2 = null; // category 2
        List<Object[]> ramens3 = null; // category 3
        List<Object[]> ramens = null;

        boolean[] result = {false, false, false};
        int result_cnt = 0;

        // category 1
        if (category.getRamenType() == 2) {
            ramens1 = ramenRepository.findRamensByCompositionCup();
            result[0] = true;
            result_cnt++;
        } else if (category.getRamenType() == 1) {
            ramens1 = ramenRepository.findRamensByCompositionBongji();
            result[0] = true;
            result_cnt++;
        }

        // category 2
        if (category.getNoodleType() == 1) {
            ramens2 = ramenRepository.findRamensByFriedNoodle();
            result[1] = true;
            result_cnt++;
        } else if (category.getNoodleType() == 2) {
            ramens2 = ramenRepository.findRamensByOiledNoodle();
            result[1] = true;
            result_cnt++;
        } else if (category.getNoodleType() == 3) {
            ramens2 = ramenRepository.findRamensBySoftNoodle();
            result[1] = true;
            result_cnt++;
        }

        // category 3
        if (category.getRamenStyle() == 1) {
            ramens3 = ramenRepository.findRamensByCompositionSoup();
            result[2] = true;
            result_cnt++;
        } else if (category.getRamenStyle() == 2) {
            ramens3 = ramenRepository.findRamensByCompositionBB();
            result[2] = true;
            result_cnt++;
        } else if (category.getRamenStyle() == 3) {
            ramens3 = ramenRepository.findRamensByCompositionJjajang();
            result[2] = true;
            result_cnt++;
        }

        if (result_cnt == 1) {
            for (int i = 0; i < 3; i++) {
                if (result[i] == true) {
                    if (i == 0) {
                        ramens = ramens1;
                    }
                    else if(i == 1) {
                        ramens = ramens2;
                    }
                    else if (i == 2){
                        ramens = ramens3;
                    }
                    break;
                }
            }
        } else if (result_cnt == 2) {
            int a = -1;
            int b = -1;
            for (int i = 0; i < 3; i++) {
                if (result[i] == true) {
                    if (a == -1) {
                        a = i;
                        continue;
                    }
                    b = i;
                }
            }

            // intersection
            if (a==0 && b==1){
                ramens = getIntersectOfLists2(ramens1, ramens2);
            }

            if (a==0 && b==2){
                ramens = getIntersectOfLists2(ramens1, ramens3);
            }

            if (a==1 && b==2){
                ramens = getIntersectOfLists2(ramens2, ramens3);
            }

        } else if (result_cnt == 3){
            ramens = getIntersectOfLists3(ramens1, ramens2, ramens3);
        }

        List<RamenSortDto> ramenSortDtos = new ArrayList<>();

//      객체 cast to RamenSort Dto
        if (ramens != null) {
            for (Object o[] : ramens) {
                Long ramenId = (Long) o[0];
                String name = (String) o[1];
                String englishName = (String) o[2];
                String brand = (String) o[3];
                String englishBrand = (String) o[4];
                double c = (double) o[5];

                ramenSortDtos.add(new RamenSortDto(ramenId, name, englishName, brand, englishBrand, c));
            }

            // 크롤링 순으로 정렬
            Collections.sort(ramenSortDtos, new RamenComparator());

            // dto 변환
            List<RamenListDto> ramenListDtos = ramenSortDtos.stream().map(RamenListDto::new).collect(Collectors.toList());

            return ramenListDtos;
        }
        return null;
    }

    public List<RamenListDto> fetchRamensByAnalysis(String analysis) {
        // 리스트 가져온 후 crawling cnt 로 정렬
        List<Object[]> ramens = null;

        switch (analysis) {
            case "kkoDeul":
                ramens = ramenRepository.findRamensByAnalysisKkoDeul();
                break;
            case "taengGeul":
                ramens = ramenRepository.findRamensByAnalysisTaengGeul();
                break;
            case "jjolGit":
                ramens = ramenRepository.findRamensByAnalysisJjolGit();
                break;
            case "greenOnion":
                ramens = ramenRepository.findRamensByAnalysisGreenOnion();
                break;
            case "egg":
                ramens = ramenRepository.findRamensByAnalysisEgg();
                break;
            case "beef":
                ramens = ramenRepository.findRamensByAnalysisBeef();
                break;
            case "pork":
                ramens = ramenRepository.findRamensByAnalysisPork();
                break;
            case "chickenBreast":
                ramens = ramenRepository.findRamensByAnalysisChickenBreast();
                break;
            case "milk":
                ramens = ramenRepository.findRamensByAnalysisMilk();
                break;
            case "riceCake":
                ramens = ramenRepository.findRamensByAnalysisRiceCake();
                break;
            case "dumpling":
                ramens = ramenRepository.findRamensByAnalysisDumpling();
                break;
            case "softTofu":
                ramens = ramenRepository.findRamensByAnalysisSoftTofu();
                break;
            case "kimchi":
                ramens = ramenRepository.findRamensByAnalysisKimchi();
                break;
            case "mayonnaise":
                ramens = ramenRepository.findRamensByAnalysisMayonnaise();
                break;
            case "cheese":
                ramens = ramenRepository.findRamensByAnalysisCheese();
                break;
            case "garlic":
                ramens = ramenRepository.findRamensByAnalysisGarlic();
                break;
            case "pepper":
                ramens = ramenRepository.findRamensByAnalysisPepper();
                break;
            case "chiliPowder":
                ramens = ramenRepository.findRamensByAnalysisChiliPowder();
                break;
            case "beanSprouts":
                ramens = ramenRepository.findRamensByAnalysisBeanSprouts();
                break;
            case "redPepper":
                ramens = ramenRepository.findRamensByAnalysisRedPepper();
                break;
            case "soyaSprouts":
                ramens = ramenRepository.findRamensByAnalysisSoyaSprouts();
                break;
            case "seafood":
                ramens = ramenRepository.findRamensByAnalysisSeafood();
                break;
            case "seaweed":
                ramens = ramenRepository.findRamensByAnalysisSeaweed();
                break;
            case "sausage":
                ramens = ramenRepository.findRamensByAnalysisSausage();
                break;
            case "tuna":
                ramens = ramenRepository.findRamensByAnalysisTuna();
                break;
            case "ketchup":
                ramens = ramenRepository.findRamensByAnalysisKetchup();
                break;
            case "vegan":
                ramens = ramenRepository.findRamensByAnalysisVegan();
                break;
            case "diet":
                ramens = ramenRepository.findRamensByAnalysisDiet();
                break;
            case "spicy":
                ramens = ramenRepository.findRamensByAnalysisSpicy();
                break;
            case "lightness":
                ramens = ramenRepository.findRamensByAnalysisLightness();
                break;
            case "haejang":
                ramens = ramenRepository.findRamensByAnalysisHaejang();
                break;
        }

        List<RamenSortDto> ramenSortDtos = new ArrayList<>();

        // 객체 cast to RamenSort Dto
        for (Object o[] : ramens) {
            Long ramenId = (Long) o[0];
            String name = (String) o[1];
            String englishName = (String) o[2];
            String brand = (String) o[3];
            String englishBrand = (String) o[4];
            double c = (double) o[5];

            ramenSortDtos.add(new RamenSortDto(ramenId, name, englishName, brand, englishBrand, c));
        }

        // 크롤링 순으로 정렬
        Collections.sort(ramenSortDtos, new RamenComparator());

        // dto 변환
        List<RamenListDto> ramenListDtos = ramenSortDtos.stream().map(RamenListDto::new).collect(Collectors.toList());

        return ramenListDtos;

    }

    class RamenComparator implements Comparator<RamenSortDto> {
        @Override
        public int compare(RamenSortDto a, RamenSortDto b) {
            if (a.getC() < b.getC()) return 1; // 내림차순
            if (a.getC() > b.getC()) return -1;
            return 0;
        }
    }

    class RamenNameComparator implements Comparator<RamenSortDto> {
        @Override
        public int compare(RamenSortDto a, RamenSortDto b) {
            if (a.getName() < b.getName()) return 1; // 내림차순
            if (a.getName() > b.getName()) return -1;
            return 0;
        }
    }

    static List<Object[]> getIntersectOfLists2(List<Object[]> list1, List<Object[]> list2) {

        List<Object[]> intersectElements = list1.stream()
                .filter(l1 -> list2.stream()
                        .anyMatch(l2 ->
                                l1[0].equals(l2[0])))
                .collect(Collectors.toList());

        if(!intersectElements.isEmpty()) {
            return intersectElements;
        }else {
            return Collections.emptyList();
        }
    }

    static List<Object[]> getIntersectOfLists3(List<Object[]> list1, List<Object[]> list2, List<Object[]> list3) {

        List<Object[]> intersectElements = list1.stream()
                .filter(l1 -> list2.stream()
                        .anyMatch(l2 ->
                                l1[0].equals(l2[0])))
                .collect(Collectors.toList());

        List<Object[]> final_intersectElements = intersectElements.stream()
                .filter(l1 -> list3.stream()
                        .anyMatch(l3 ->
                                l1[0].equals(l3[0])))
                .collect(Collectors.toList());

        if(!final_intersectElements.isEmpty()) {
            return final_intersectElements;
        }else {
            return Collections.emptyList();
        }
    }
}