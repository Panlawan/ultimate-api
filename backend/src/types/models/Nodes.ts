export enum NodePictureTypes {
  thumbnail,
  galley
}

export interface NodePicturesSchema {
  type: NodePictureTypes
  url: string
}

export interface NodeSchema {
  location?: string
  temperature?: string
  humidity?: string
  status?: string
  node: string
}