export interface ISlackRepository {
  sendNotification(
    message: string
  ): Promise<any>;
}
