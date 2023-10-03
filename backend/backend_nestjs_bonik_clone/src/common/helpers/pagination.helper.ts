import { BadRequestException } from '@nestjs/common';
import { isNil } from 'lodash';

export interface IPaginationOptions {
  page: number;
  pageSize: number;
}

export interface IPaginationResult<T> {
  items: T[];
  totalItems: number;
  totalPages: number;
}

// TODO: add type to query, options
export async function paginate<T>(
  query: any,
  options: Partial<IPaginationOptions> & Record<string, unknown>,
): Promise<IPaginationResult<T>> {
  const { page = 0, pageSize = 10, ...rest } = options;

  if ((isNil(page) && !isNil(pageSize)) || (isNil(pageSize) && !isNil(page))) {
    throw new BadRequestException();
  }

  const totalItems = await query.count();

  const hasPaginate = Boolean(page && pageSize);

  const prismaOptions = hasPaginate
    ? {
        skip: (page - 1) * pageSize,
        take: pageSize,
      }
    : {};
  const totalPages = hasPaginate ? Math.ceil(totalItems / pageSize) : 1;

  const items = await query.findMany({
    ...prismaOptions,
    ...rest,
  });

  return {
    items,
    totalItems,
    totalPages,
  };
}
