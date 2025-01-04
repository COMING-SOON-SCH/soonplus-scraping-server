import { validate } from 'class-validator';
import { NoticeDto } from './notice.dto';

describe('NoticeDto', () => {
  it('should validate correct id', async () => {
    const dto = new NoticeDto('1');
    const errors = await validate(dto);
    expect(errors.length).toBe(0); 
  });

  it('should reject invalid id', async () => {
    const dto = new NoticeDto('invalid'); 
    const errors = await validate(dto);
    expect(errors.length).toBeGreaterThan(0); 
  });

  it('should validate optional keyword', async () => {
    const dto = new NoticeDto('1', '장학금'); 
    const errors = await validate(dto);
    expect(errors.length).toBe(0);
  });

  it('should validate missing keyword', async () => {
    const dto = new NoticeDto('1'); 
    const errors = await validate(dto);
    expect(errors.length).toBe(0); 
  });
});
