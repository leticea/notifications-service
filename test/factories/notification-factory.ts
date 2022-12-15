import { Content } from "@application/entities/content";
import { Notification } from "@application/entities/notification";

export function makeNotification() {
  return new Notification({
    category: 'social',
    content: new Content('Nova solicitação de amizade!'),
    recipientId: 'recipient-2',
  });
}