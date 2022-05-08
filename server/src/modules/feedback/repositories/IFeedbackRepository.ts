import { IFeedbackDTO } from '../dto/IFeedbackDTO';

export interface IFeedbackRepository {
  create(data: IFeedbackDTO): Promise<void>;
}
