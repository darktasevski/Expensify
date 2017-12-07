import { login, logout } from '../../actions/auth';

it('should generate login action object', () => {
  const action = login('abc123');
  expect(action).toEqual({
    type: 'LOGIN',
    uid: 'abc123',
  });
});

it('should generate logout action object', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT',
  });
});
