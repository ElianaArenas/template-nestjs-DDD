export interface INotificationsSESRepository {
  sendMessage(to: any[]): Promise<any>;
}
