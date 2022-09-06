import UserDao from '../daos';
import { UserCRUD, UserDTO } from './../../types/index.d';

class UserServices implements UserCRUD {
  async create(resouce: UserDTO) {
    return UserDao.addUser(resouce);
  }
  async deleteById(resouceId: string) {
    return UserDao.removeUserById(resouceId);
  }
  async list(limit: number, page: number) {
    return UserDao.getUsers();
  }
  async patchById(resource: UserDTO) {
    return UserDao.patchUserById(resource);
  }
  async readById(resourceId: string) {
    return UserDao.getUserById(resourceId);
  }
  async updateById(resource: UserDTO) {
    return UserDao.putUserById(resource);
  }
  async getUserByEmail(email: string) {
    return UserDao.getUserByEmail(email);
  }
}
export default new UserServices();
