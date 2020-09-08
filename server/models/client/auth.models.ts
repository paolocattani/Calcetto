import { GenericReponse } from './common.models';
import { UserDTO, PlayerRole } from 'models/dto';

export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegistrationRequest {
  username: string;
  name: string;
  surname: string;
  email: string;
  cEmail: string;
  password: string;
  cPassword: string;
  phone: string;
  birthday: Date | null;
  playerRole: PlayerRoleType;
}

export interface AuthenticationResponse extends GenericReponse {
  user?: UserDTO;
}

type PlayerRoleType = {
  value: PlayerRole;
  label: PlayerRole;
};