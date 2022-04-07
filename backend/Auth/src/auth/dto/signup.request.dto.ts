import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({
    example: 'climbplant39@example.com',
    description: 'email',
    required: true,
  })
  @IsEmail()
  @IsNotEmpty()
  @IsString()
  readonly inputEmail: string;

  @ApiProperty({
    example: '123456789',
    description: 'inputPw',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  readonly inputPw: string;

  @ApiProperty({
    example: '상진수',
    description: 'inputName',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  readonly inputName: string;

  @ApiProperty({
    example: 28,
    description: 'inputAge',
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  readonly inputAge: number;

  @ApiProperty({
    example: 'M',
    description: 'inputGender',
    required: true,
  })
  @IsString()
  @IsAlpha()
  @IsNotEmpty()
  readonly inputGender: string;

  // 1. 면의 길이 (1: 그냥, 2: 2개로 분리, 3: 4개로 분리, 4: 잘게)
  @ApiProperty({
    example: '2개로 분리',
    description: 'noodleLength',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  readonly noodleLength: string;

  // 2. 면의 식감 (1: 쫄깃하게, 2: 부드럽게, 3: 심지가 있게, 4: 퍼지게)
  @ApiProperty({
    example: '부드럽게',
    description: 'noodleTexture',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  readonly noodleTexture: string;

  // 3-1. 국물 재료 안 넣음
  @ApiProperty({
    example: false,
    description: 'ingredientNone',
    required: true,
  })
  @IsBoolean()
  @IsNotEmpty()
  readonly ingredientNone: boolean;

  @ApiProperty({
    example: true,
    description: 'ingredientGarlic',
    required: true,
  })
  // 3-2. 국물 재료 마늘
  @IsBoolean()
  @IsNotEmpty()
  readonly ingredientGarlic: boolean;

  // 3-3. 국물 재료 고추
  @ApiProperty({
    example: false,
    description: 'ingredientPepper',
    required: true,
  })
  @IsBoolean()
  @IsNotEmpty()
  readonly ingredientPepper: boolean;

  // 3-4. 국물 재료 파
  @ApiProperty({
    example: false,
    description: 'ingredientGreenOnion',
    required: true,
  })
  @IsBoolean()
  @IsNotEmpty()
  readonly ingredientGreenOnion: boolean;

  // 4. 계란 (1: 안 넣음, 2: 완숙, 3: 반숙, 4: 풀어서)
  @ApiProperty({
    example: '풀어서',
    description: 'egg',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  readonly egg: string;

  // 5-1. 토핑 안 넣음
  @ApiProperty({
    example: true,
    description: 'toppingNone',
    required: true,
  })
  @IsBoolean()
  @IsNotEmpty()
  readonly toppingNone: boolean;

  // 5-2. 토핑 치즈
  @ApiProperty({
    example: false,
    description: 'toppingCheese',
    required: true,
  })
  @IsBoolean()
  @IsNotEmpty()
  readonly toppingCheese: boolean;

  // 5-3. 토핑 떡
  @ApiProperty({
    example: false,
    description: 'toppingTteok',
    required: true,
  })
  @IsBoolean()
  @IsNotEmpty()
  readonly toppingTteok: boolean;

  // 5-4. 토핑 만두
  @ApiProperty({
    example: false,
    description: 'toppingDumpling',
    required: true,
  })
  @IsBoolean()
  @IsNotEmpty()
  readonly toppingDumpling: boolean;

  @ApiProperty({
    example: '매운',
    description: 'spicy',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  readonly spicy: string;

  // 선호 라면 리스트 (제품명 기준)
  @ApiProperty({
    example: [1, 2, 3],
    description: 'selectRamens',
    required: true,
  })
  @IsArray()
  @IsNotEmpty()
  readonly selectRamens: number[];
}
