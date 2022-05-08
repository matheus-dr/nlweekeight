import { Joi } from 'celebrate';

const createFeedbackSchema = Joi.object({
  type: Joi.string().required(),
  comment: Joi.string().required(),
  screenshot: Joi.string().optional(),
});

export { createFeedbackSchema };
