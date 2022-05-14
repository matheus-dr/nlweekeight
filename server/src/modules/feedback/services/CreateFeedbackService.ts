import { inject, injectable } from 'tsyringe';

import { IFeedbackDTO } from '../dto/IFeedbackDTO';
import { IFeedbackRepository } from '../repositories/IFeedbackRepository';
import { IMailerProvider } from '../../../shared/providers/mailerprovider/IMailerProvider';

@injectable()
export class CreateFeedbackService {
  constructor(
    @inject('FeedbackRepository')
    private feedbackRepository: IFeedbackRepository,
    @inject('MailerProvider')
    private mailerProvider: IMailerProvider
  ) {}

  public async execute(data: IFeedbackDTO): Promise<void> {
    if (
      data.screenshot &&
      !data.screenshot.startsWith('data:image/png;base64')
    ) {
      throw new Error('Invalid screenshot format');
    }

    await this.feedbackRepository.create(data);

    await this.mailerProvider.sendMail({
      subject: 'Novo Feedback',
      body: [
        `<div style='font-family: sans-serif; font-size: 16px; color: #111'>`,
        `<p>Tipo do feedback: ${data.type}</p>`,
        `<p>Comentário do feedback: ${data.comment}</p>`,
        data.screenshot
          ? `<img src='${data.screenshot}' alt='Screenshot do usuário' />`
          : null,
        `</div>`,
      ].join('\n'),
    });
  }
}
