export interface ISendMailData {
  subject: string;
  body: string;
}

export interface IMailerProvider {
  sendMail(data: ISendMailData): Promise<void>;
}
