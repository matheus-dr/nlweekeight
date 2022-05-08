import { container } from 'tsyringe';

import { IMailerProvider } from '../providers/mailerprovider/IMailerProvider';
import { IFeedbackRepository } from '../../modules/feedback/repositories/IFeedbackRepository';
import { NodeMailerProvider } from '../providers/mailerprovider/implementations/NodeMailerProvider';
import { PrismaFeedbackRepository } from '../../modules/feedback/infra/prisma/repositories/PrismaFeedbackRepository';

container.registerSingleton<IFeedbackRepository>(
  'FeedbackRepository',
  PrismaFeedbackRepository
);

container.registerSingleton<IMailerProvider>(
  'MailerProvider',
  NodeMailerProvider
);
