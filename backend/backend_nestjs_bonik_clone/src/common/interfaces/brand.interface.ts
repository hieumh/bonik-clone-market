import { BrandDto } from 'src/app/dtos/brand.dto';
import { IPaginationResult } from '../helpers/pagination.helper';

export type TBrandResponse = Promise<IPaginationResult<BrandDto>>;
