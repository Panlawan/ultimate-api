import { Schema, Document, model } from 'mongoose'
import { NodeSchema } from '../../types/models/Nodes'

const collection = 'Articles'

export interface NodeSchemaWithDocument extends NodeSchema, Document {
  // add more field
}

// const articlesSchema = new Schema<ArticlesSchemaWithDocument>({
//   title: {
//     type: String,
//     required: true
//   },
//   description: {
//     type: String,
//     required: true
//   },
//   tags: [String],
//   pictures: [
//     {
//       type: {
//         type: String,
//         default: 'normal'
//       },
//       url: {
//         type: String
//       }
//     }
//   ],
//   author: {
//     type: Schema.Types.ObjectId,
//     ref: 'Users',
//     required: true
//   },
//   status: {
//     type: String,
//     default: 'active',
//     enum: ['active', 'deleted']
//   }
// }, {
//   collection,
//   versionKey: false,
//   timestamps: true
// })

const articlesSchema = new Schema<NodeSchemaWithDocument>({
  location: {
    type: String,
  },
  temperature: {
    type: String,
  },
  humidity: {
    type: String,
  },
  tags: [String],
  status: {
    type: String,
    default: 'active',
    enum: ['active', 'deleted']
  }
}, {
  collection,
  versionKey: false,
  timestamps: true
})

export default model(collection, articlesSchema)