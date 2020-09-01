import { createReducer, Action } from 'typesafe-actions';
import { SessionState } from 'redux/models/session.model';
import { SessionAction } from 'redux/actions/session.action';
import { UserRole } from 'redux/models/user.model';

export const sessionState: SessionState = {
  isAuthenticated: false,
  isAdmin: false,
  isLoading: false,
};

export const SessionReducer = createReducer<SessionState, Action>(sessionState)
  // Request
  .handleAction([SessionAction.checkAuthentication.request], (state) => ({
    ...state,
    isLoading: true,
    errorMessage: undefined,
  }))
  // Failure
  .handleAction([SessionAction.checkAuthentication.failure], (state, { payload: { message } }) => ({
    ...state,
    errorMessage: message,
    isLoading: false,
  }))
  .handleAction(
    [
      SessionAction.checkAuthentication.success,
      SessionAction.register.success,
      SessionAction.login.success,
      SessionAction.updateSession,
    ],
    (state, { payload: { user } }) => ({
      user,
      isAuthenticated: !!user,
      isAdmin: user ? user.role === UserRole.Admin : false,
      isLoading: false,
    })
  );
