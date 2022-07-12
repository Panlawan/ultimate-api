import Articles, { NodeSchemaWithDocument } from './schema'
import { NodeSchema } from '../../types/models/Nodes'
import articleErrors from '../../errors/article'
import customError from '../../utils/custom-error'

export type {
  NodeSchemaWithDocument
}

export const createNewNode = async (doc: NodeSchema): Promise<NodeSchemaWithDocument> => {
  const article = new Articles(doc)

  return article.save()
}

export const getNodeById = async (articleId: string): Promise<any> => {
  const article = Articles
    .findOne({
      _id: articleId,
      status: 'active'
    })
    // .lean<ArticlesSchema>()

  return article
}

export const getNode = async (criteria: object = {}): Promise<NodeSchema[]> => {
  const articles = Articles

    .find({
      ...criteria,
      status: 'active'
    })
    // .lean<ArticlesSchema[]>()

  return articles
}

export const updateNodeDataById = async (articleId: string, doc: NodeSchema): Promise<string> => {
  try {
    Object.keys(doc).filter(key => doc[key] ?? delete doc[key])

    const result = await Articles
      .updateOne({
        _id: articleId,
        status: {
          $in: ['active', 'inactive']
        }
      }, {
        $set: {
          ...doc
        }
      })

    if (!result.nModified) {
      return customError(articleErrors.ArticleHasDeleted)
    }

    return 'OK'
  } catch (error) {
    if (error.kind === 'ObjectId') {
      return customError(articleErrors.ArticleNotfound)
    } else if (error.name === 'CustomError') {
      return error
    }
    return customError(articleErrors.ArticleSomethingWentWrong)
  }
}

export const removeNodeById = async (articleId: string): Promise<string> => {
  await Articles.findByIdAndUpdate(articleId, {
    $set: {
      status: 'delete'
    }
  })

  return 'OK'
}

export default {
  createNewNode,
  updateNodeDataById,
  removeNodeById,
  getNode,
  getNodeById
}