import { IsString, IsUrl } from 'class-validator';

export class NoticeDto {
  @IsUrl()
  url: string;

  @IsString()
  selector: string;
}
