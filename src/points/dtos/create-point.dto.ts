import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class PointDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty()
  @Number()
  readonly whatsapp: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly uf: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly city: string;

  @ApiProperty()
  @IsString()
  readonly latitude: string;

  @ApiProperty()
  @IsString()
  readonly longitude: string;

  @ApiProperty()
  @Number()
  @IsNotEmpty()
  readonly items: number;

  @ApiProperty()
  @IsString()
  image: string;
}