/*
import { FastifyRegister, FastifyRequest } from "fastify";
import Users from '../models/Users/'
export const handleUserMe = async (request: FastifyRequest) => {
    const { userId } = request

    // find in mongodb again
    const user = await Users.getUserById(userId)
    return user
}

export default {
    handleUserMe
}
*/

import { FastifyRequest } from 'fastify'
import { AuthJWTError } from '../errors/auth'
import Users from '../models/Users'
import customError from '../utils/custom-error'

export const handleUserMe = async (request: FastifyRequest) => {
  const { userId } = request
  if (!userId) {
    return customError(AuthJWTError)
  }

  const user = await Users.getUserById(userId)

  return user
}

export default {
  handleUserMe
}