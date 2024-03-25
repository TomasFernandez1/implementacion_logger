import { generateToken } from '../utils/generateToken.js'
import { generateUserErrorInfo } from '../repositories/errors/info.js'
import {EErrors} from '../repositories/errors/enums.js'
import CustomError from '../repositories/errors/CustomError.js'
import uDto from '../dtos/user.dto.js'

export class SessionController {
  constructor() {}

  login = async (req, res) => {
    try {
      const token = generateToken(req.user)
      res
        .cookie('cookieToken', token, {
          maxAge: 60 * 60 * 1000,
          httpOnly: true
        })
        .redirect('/api/products')
    } catch (error) {
      req.logger.error(error)
      res.sendServerError(error)
    }
  }

  register = (req, res, next) => {
    try {
      const { first_name, last_name, email } = req.body
      if (!first_name || !last_name || !email) {
        CustomError.createError({
          name: 'User creation error',
          cause: generateUserErrorInfo({
            first_name,
            last_name,
            email
          }),
          message: 'Error trying to created user',
          code: EErrors.INVALID_TYPES_ERROR
        })
      }
      res.redirect('/api/view/login')
    } catch (error) {
      req.logger.error(error)
      next(error)
    }
  }

  recoveryPassword = (req, res) => {
    res.redirect('/api/view/login')
  }

  logout = (req, res) => {
    res.clearCookie('cookieToken')
    res.redirect('/api/view/login')
  }

  current = (req, res) => {
    const UserDto = new uDto(req.user, req.user.cart)
    delete UserDto.password
    res.render('current', { user: UserDto })
  }
}
