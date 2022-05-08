import { Router } from 'express';

import { feedbackRoutes } from '../../../../modules/feedback/infra/http/routes/feedback.routes';

const routes = Router();

routes.use(feedbackRoutes);

export { routes };
