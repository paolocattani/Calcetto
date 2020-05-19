import { CheckAuthenticationRequest, AuthenticationResponse } from 'models';
import { UserDTO } from 'models/user.model';
import { eventChannel, buffers, END } from 'redux-saga';

export enum SessionStatus {
  // Sessione scaduta, reindirizza l'utente alla login
  SESSION_EXPIRED = 'session_expired',
  // Necessario aggiornamento dati su Stage1
  NEED_REFRESH = 'need_refresh',
}

export interface Message {
  status: SessionStatus;
  message?: string;
}

// eslint-disable-next-line no-empty-pattern
export const CheckAuthentication = async ({}: CheckAuthenticationRequest): Promise<AuthenticationResponse> => {
  try {
    const response = await fetch('/api/v1/auth/');
    const user: UserDTO | null = await response.json();
    console.log('SessionContext.user : ', user);

    return { user: user && response.ok ? user : undefined };
  } catch (error) {
    handleError('SessionContext.error :');
    return { user: undefined };
  }
};

export const createSessionChannel = (channel: EventSource) =>
  eventChannel<Message>((emitter) => {
    // Listen for open channel
    const openListener = (event: Event) => console.log('Session Channel is now open.');

    // Listen for new message
    const messageListener = (messageEvent: MessageEvent) => {
      if (messageEvent) {
        const message = JSON.parse(messageEvent.data) as Message;
        if (message.status === SessionStatus.SESSION_EXPIRED) {
          emitter(message);
          closeConnection();
        }
      }
    };
    // Listen for error
    const errorListener = (event: Event) => {
      console.error('An Error Occur: ', event);
      emitter(END);
      closeConnection();
    };
    channel.addEventListener('open', openListener);
    channel.addEventListener('message', messageListener);
    channel.addEventListener('error', errorListener);
    // Cleanup function
    const closeConnection = () => {
      channel.removeEventListener('open', openListener);
      channel.removeEventListener('message', messageListener);
      channel.removeEventListener('error', errorListener);
      channel.close();
    };
    return closeConnection;
  }, buffers.expanding());

const handleError = (errorMessage: string) => {
  console.warn('Session Error : ', errorMessage);
  throw new Error('Something went wrong');
};
