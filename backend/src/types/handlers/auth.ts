import { FastifyRequest } from 'fastify'

export type AuthLoginBodyRequest = FastifyRequest<{
  Body: {
    username: string
    password: string
  }
}>

export type AuthRegisterBodyRequest = FastifyRequest<{
  Body: {
    username: string
    password: string
    email: string
    name: string
    surname: string
    temper?: string
    humidity?: string
  }
}>

export type AuthDataBodyResponse = FastifyRequest<{
  Body: {
    userId: string
    temperature?: string
    humidity?: string
  }
}>

export interface AuthLoginBodyResponse {
  id: string
  username: string
  email: string
  name: string
  surname: string
  temper?: string
  humidity?: string
  accessToken?: string
}

export interface AuthRefreshTokenResponse {
  accessToken: string
}