import {   
  createNewNode,
  updateNodeDataById,
  removeNodeById,
  getNode,
  getNodeById 
} from '../models/Nodes'
import { NodeSchema } from '../types/models/Nodes'
import { NodeCreateNewRequestBody, NodeGetByIdRequest, NodeUpdate } from '../types/handlers/node'
import { NodeSchemaWithDocument } from '../models/Nodes/schema'

export const handleCreateNewNode = async (request: NodeCreateNewRequestBody): Promise<NodeSchemaWithDocument> => {
  const { userId } = request
  const { location, temperature, humidity } = request.body

  const article = await createNewNode({
    location,
    temperature,
    humidity,
    node: userId
  })

  return article
}

export const handleGetNodeById = async (request: NodeGetByIdRequest): Promise<NodeSchema> => {
  const { articleId } = request.params

  const article = await getNodeById(articleId)

  return article
}

export const handleGetNode = async (): Promise<NodeSchema[]> => getNode()

export const handleUpdateNode = async (request: NodeUpdate): Promise<string> => {
  const { userId } = request
  const { articleId } = request.params
  const { temperature, humidity, location, status } = request.body

  const result = await updateNodeDataById(articleId, {
    temperature,
    humidity,
    location,
    status,
    node: userId
  })

  return result
}

export const handleDeleteNode = async (request: NodeGetByIdRequest): Promise<string> => {
  const { articleId } = request.params

  const result = await removeNodeById(articleId)

  return result
}

export default {
  handleCreateNewNode,
  handleGetNodeById,
  handleGetNode,
  handleUpdateNode
}