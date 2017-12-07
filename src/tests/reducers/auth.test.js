import authReducer from '../../reducers/auth';

it('should set uid for login ', () => {
  const action = {
    type: 'LOGIN',
    uid: '123abc',
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});

it('should clear uid for logout ', () => {
  const action = {
    type: 'LOGOUT',
  };
  const state = authReducer({ uid: '123abc' }, action);
  expect(state.uid).toBeFalsy();
  expect(state).toEqual({});
});
