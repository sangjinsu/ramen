import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginRequestDto {
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
}
