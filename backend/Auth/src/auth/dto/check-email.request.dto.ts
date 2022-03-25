import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CheckEmailDto {
  @ApiProperty({
    example: 'climbplant39@example.com',
    description: 'email',
    required: true,
  })
  @IsEmail()
  @IsNotEmpty()
  @IsString()
  readonly inputEmail: string;
}
