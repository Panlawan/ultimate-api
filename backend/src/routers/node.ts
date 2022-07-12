import { FastifyInstance } from 'fastify'
import { verifyAccessToken } from '../hooks/auth'
import {
  handleCreateNewNode,
  handleGetNodeById,
  handleGetNode,
  handleUpdateNode,
  handleDeleteNode
} from '../handlers/node'

const articleRouters = async (app: FastifyInstance) => {
  const preHandler = [verifyAccessToken]

  app.post('/', { preHandler }, handleCreateNewNode)
  app.get('/', { preHandler }, handleGetNode)
  app.get('/:articleId', { preHandler }, handleGetNodeById)
  app.patch('/:articleId', { preHandler }, handleUpdateNode)
  app.delete('/:articleId', { preHandler }, handleDeleteNode)
}

export default articleRouters