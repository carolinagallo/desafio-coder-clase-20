import UserMongooseDao from "../dao/userMongooseDao.js";

class UserManager {
  constructor() {
    this.userDao = new UserMongooseDao();
  }

  async paginate(criteria) {
    return this.userDao.paginate(criteria);
  }

  async getOne(id) {
    return this.userDao.getOne(id);
  }
  async create(data) {
    const user = await this.userDao.create(data);
    return { ...user, password: undefined };
  }

  async updateOne(id, data) {
    return this.userDao.updateOne(id, data);
  }

  async deleteOne(id) {
    return await this.userDao.deleteOne(id);
  }

  async getOneByEmail(email) {
    return this.userDao.getOneByEmail(email);
  }
}

export default UserManager;
