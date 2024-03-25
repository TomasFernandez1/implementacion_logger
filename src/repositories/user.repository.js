import userDto from '../dtos/user.dto.js'

export default class UserRepository {
  constructor(dao) {
    this.dao = dao
  }

  getUsers = async (filters) => {
    return await this.dao.get(filters)
  }

  getUserBy = async (id) => {
    return await this.dao.getBy(id)
  }

  getUser = async (filters) => {
    return await this.dao.getOne(filters)
  }

  createUser = async (newU) => {
    const newUser = new userDto(newU)
    return await this.dao.create(newUser)
  }

  updateUser = async (id, updatedU) => {
    return this.dao.update(id, updatedU)
  }

  deleteUser = async (id) => {
    return this.dao.delete(id)
  }
}
