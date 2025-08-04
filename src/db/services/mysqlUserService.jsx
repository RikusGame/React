import AbstractUserService from './userServiceInterface';

const BASE_URL = 'http://localhost:4000/api/users';

export default class MySQLUserService extends AbstractUserService {
  async fetchAll() {
    const response = await fetch(BASE_URL);
    return await response.json();
  }

  async create(user) {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    });
    return await response.json();
  }

  async delete(userId) {
    await fetch(`${BASE_URL}/${userId}`, { method: 'DELETE' });
  }
}
