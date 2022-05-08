import 'reflect-metadata';

import { CreateFeedbackService } from './CreateFeedbackService';

describe('Unit test for create feedback', () => {
  let submitFeedback: CreateFeedbackService;
  const createFeedbackSpy = jest.fn();
  const sendEmailSpy = jest.fn();

  beforeAll(() => {
    submitFeedback = new CreateFeedbackService(
      {
        create: createFeedbackSpy,
      },
      {
        sendMail: sendEmailSpy,
      }
    );
  });

  it('should be able to submit a feedback', () => {
    expect(
      submitFeedback.execute({
        type: 'BUG',
        comment: 'Example comment',
        screenshot: 'data:image/png;base64',
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendEmailSpy).toHaveBeenCalled();
  });

  it('should not be able to submit feedback with a invalid feedback', () => {
    expect(
      submitFeedback.execute({
        type: 'BUG',
        comment: 'Example comment',
        screenshot: 'teste.png',
      })
    ).rejects.toThrow();
  });
});
