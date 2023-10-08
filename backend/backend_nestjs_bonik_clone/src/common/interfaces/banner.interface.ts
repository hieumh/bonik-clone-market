import * as Joi from 'joi';

export interface ICreateBanner {
  title: string;
  description: string;
  productId: number;
}

export const createBannerSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  productId: Joi.number().integer().required(),
});
