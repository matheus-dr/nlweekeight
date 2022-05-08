import { Router } from 'express';
import { celebrate, Segments } from 'celebrate';

import { FeedbackController } from '../controllers/FeedbackController';
import { createFeedbackSchema } from '../../../schemas/createFeedback.schema';

const feedbackRoutes = Router();
const feedbackController = new FeedbackController();

feedbackRoutes.post(
  '/feedbacks',
  [celebrate({ [Segments.BODY]: createFeedbackSchema }, { abortEarly: false })],
  feedbackController.create
);

export { feedbackRoutes };
