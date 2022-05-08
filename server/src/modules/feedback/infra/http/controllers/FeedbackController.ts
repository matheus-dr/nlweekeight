import { container, injectable } from 'tsyringe';
import { NextFunction, Request, Response } from 'express';

import { CreateFeedbackService } from '../../../services/CreateFeedbackService';

@injectable()
export class FeedbackController {
  public async create(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const service = container.resolve(CreateFeedbackService);

      const data = request.body;

      response.status(201).json(await service.execute(data));
    } catch (err) {
      next(err);
    }
  }
}
