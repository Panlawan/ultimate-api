import { FastifyRequest } from 'fastify'

export type NodeCreateNewRequestBody = FastifyRequest<{
  Body: {
    temperature?: string
    humidity?: string
    location?: string
    status?: string
  }
}>

export type NodeGetByIdRequest = FastifyRequest<{
  Params: {
    articleId: string
  }
}>

export type NodeUpdate = NodeCreateNewRequestBody & NodeGetByIdRequest