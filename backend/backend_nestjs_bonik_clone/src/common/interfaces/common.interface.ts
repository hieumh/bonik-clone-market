import { Joi } from 'celebrate';

export const paginationSchema = Joi.object({
  page: Joi.number().integer().min(1),
  pageSize: Joi.number().integer().min(1),
});
