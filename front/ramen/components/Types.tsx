import { NextRouter } from "next/router";

export interface DataProps {
  data: number[];
}

export type RamenDetailType = {
  params: string;
  ramenInfos: {
    brand: string;
    carbs: number;
    cholesterol: number;
    code: string;
    cold: number;
    cup: number;
    englishBrand: string;
    englishName: string;
    jjajang: number;
    kcal: number;
    lipid: number;
    liquid: number;
    name: string;
    noodle: string;
    powder: number;
    protein: number;
    ramenId: number;
    salty: number;
    sampleId: string;
    saturated_fat: number;
    seasoning: number;
    sodium: number;
    soup: number;
    sugar: number;
    surveyYear: number;
    sweetness: number;
    transFat: number;
    volume: number;
  };
  similarityRamen: {
    first: {
      id: string;
      name: string;
      salty: number;
      sweetness: number;
    };
    second: {
      id: string;
      name: string;
      salty: number;
      sweetness: number;
    };
    third: {
      id: string;
      name: string;
      salty: number;
      sweetness: number;
    };
    origin: {
      salty: number;
      sweetness: number;
    };
  };
};

export type RamenListType = {
  AllList: {
    ramenId: number;
    name: string;
    englishName: string;
    englishBrand: string;
    brand: string;
  }[];
  bongiList: {
    ramenId: number;
    name: string;
    englishName: string;
    englishBrand: string;
    brand: string;
  }[];
  cupList: {
    ramenId: number;
    name: string;
    englishName: string;
    englishBrand: string;
    brand: string;
  }[];
};

export type userPageType = {
  params: string;
  fonds: {
    egg: boolean;
    ingredientGarlic: boolean;
    ingredientGreenOnion: boolean;
    ingredientNone: boolean;
    ingredientPepper: boolean;
    noodleLength: string;
    noodleTexture: string;
    spicy: string;
    toppingCheese: boolean;
    toppingDumpling: boolean;
    toppingNone: boolean;
    toppingTteok: boolean;
  };
};

export type userPreferenceType = {
  params: string;
  router: NextRouter;
};

export type signupType = {
  router: NextRouter;
};

export type SimilarRamenType = {
  first: {
    id: string;
    name: string;
    salty: number;
    sweetness: number;
  };
  second: {
    id: string;
    name: string;
    salty: number;
    sweetness: number;
  };
  third: {
    id: string;
    name: string;
    salty: number;
    sweetness: number;
  };
  origin: {
    salty: number;
    sweetness: number;
  };
};
