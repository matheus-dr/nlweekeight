import { injectable } from 'tsyringe';

import { IFeedbackDTO } from '../../../dto/IFeedbackDTO';
import { prisma } from '../../../../../shared/infra/prisma/prisma';
import { IFeedbackRepository } from '../../../repositories/IFeedbackRepository';

@injectable()
export class PrismaFeedbackRepository implements IFeedbackRepository {
  async create(data: IFeedbackDTO): Promise<void> {
    await prisma.feedback.create({ data });
  }
}
