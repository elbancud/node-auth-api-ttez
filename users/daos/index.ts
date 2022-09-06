import debug from 'debug';
import shortid from 'shortid';
import { UserDTO } from '../../types/';

// TODO: Data access objects
// Singleton pattern implemented: orivude same instance
const log: debug.IDebugger = debug('app:in-memory-dao');
class UserDao {
  users: UserDTO[] = [];
  constructor() {
    log('Created new instance of UsersDao');
  }
  async addUser(user: UserDTO) {
    user.id = shortid.generate();
    this.users.push(user);
    return user.id;
  }
  async getUsers() {
    return this.users;
  }
  async getUserById(userId: string) {
    return this.users.find((user: { id: string }) => user.id === userId);
  }
  async putUserById(user: UserDTO) {
    const objIndex = this.users.findIndex((obj: { id: string }) => {
      obj.id === user.id;
    });
    this.users.splice(objIndex, 1, user);
    return `${user.id} updated via put`;
  }
  async patchUserById(user: UserDTO) {
    const objIndex = this.users.findIndex((obj: { id: string }) => {
      obj.id === user.id;
    });
    let currentUser = this.users[objIndex];
    let allowedPatchFields = [
      'password',
      'firstName',
      'lastName',
      'permissionLevel',
    ];
    for (let field of allowedPatchFields) {
      if (field in user) {
        // @ts-ignore
        currentUser[field] = user[field];
      }
      this.users.splice(objIndex, 1, currentUser);
      return `${user.id} patched`;
    }
  }
  async removeUserById(userId: string) {
    const objIndex = this.users.findIndex((obj: { id: string }) => {
      obj.id === userId;
    });
    this.users.splice(objIndex, 1);
    return `${userId} removed`;
  }
  async getUserByEmail(userEmail: string) {
    const objIndex = this.users.findIndex((obj: { email: string }) => {
      obj.email === userEmail;
    });
    let currentUser = this.users[objIndex];
    if (currentUser) return currentUser;
    else return null;
  }
}
export default new UserDao();
