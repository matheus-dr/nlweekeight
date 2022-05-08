import nodemailer from 'nodemailer';
import { injectable } from 'tsyringe';

import { IMailerProvider, ISendMailData } from '../IMailerProvider';

@injectable()
export class NodeMailerProvider implements IMailerProvider {
  transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: 'e6a39350067945',
      pass: 'a4e7e8291377f0',
    },
  });

  async sendMail({ subject, body }: ISendMailData): Promise<void> {
    await this.transport.sendMail({
      from: 'Serviços de Feedback <mailer@fidget.com>',
      to: 'Matheus Dantas Ricardo <m47heusdr@protonmail.com',
      subject,
      html: body,
    });
  }
}
