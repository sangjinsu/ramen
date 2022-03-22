import {
  IsAlpha,
  IsArray,
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class SignupRequestDto {
  @IsEmail()
  @IsNotEmpty()
  inputEmail: string;

  @IsString()
  @IsNotEmpty()
  inputPw: string;

  @IsString()
  @IsNotEmpty()
  inputName: string;

  @IsNumber()
  @IsNotEmpty()
  inputAge: number;

  @IsString()
  @IsAlpha()
  @IsNotEmpty()
  inputGender: string;

  // 1. 면의 길이 (1: 그냥, 2: 2개로 분리, 3: 4개로 분리, 4: 잘게)
  @IsString()
  @IsNotEmpty()
  selectLength: string;
  // 2. 면의 식감 (1: 쫄깃하게, 2: 부드럽게, 3: 심지가 있게, 4: 퍼지게)
  @IsString()
  @IsNotEmpty()
  selectTexture: string;
  // 3-1. 국물 재료 안 넣음
  @IsBoolean()
  @IsNotEmpty()
  selectSoupNothing: boolean;
  // 3-2. 국물 재료 마늘
  @IsBoolean()
  @IsNotEmpty()
  selectSoupGarlic: boolean;
  // 3-3. 국물 재료 고추
  @IsBoolean()
  @IsNotEmpty()
  selectSoupPepper: boolean;
  // 3-4. 국물 재료 파
  @IsBoolean()
  @IsNotEmpty()
  selectSoupGreenOnion: boolean;
  // 4. 계란 (1: 안 넣음, 2: 완숙, 3: 반숙, 4: 풀어서)
  @IsString()
  @IsNotEmpty()
  selectEgg: string;
  // 5-1. 토핑 안 넣음
  @IsBoolean()
  @IsNotEmpty()
  selectToppingNothing: boolean;
  // 5-2. 토핑 치즈
  @IsBoolean()
  @IsNotEmpty()
  selectToppingCheese: boolean;
  // 5-3. 토핑 떡
  @IsBoolean()
  @IsNotEmpty()
  selectToppingRicecake: boolean;
  // 5-4. 토핑 만두
  @IsBoolean()
  @IsNotEmpty()
  selectToppingDumpling: boolean;

  // 선호 라면 리스트 (제품명 기준)
  @IsArray()
  @IsNotEmpty()
  selectRamens: number[];
}
