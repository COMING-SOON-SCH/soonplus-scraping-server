import { IsString, IsNotEmpty, IsOptional, IsNumberString } from 'class-validator';

export class NoticeDto {
  @IsNotEmpty()
  @IsNumberString()
  readonly id: string; 

  @IsOptional()
  @IsString()
  readonly keyword?: string; 

  constructor(id: string, keyword?: string) {
    this.id = id;
    this.keyword = keyword; 
  }
}
