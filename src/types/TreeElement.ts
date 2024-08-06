export type TreeElement = {
  name: string
  id: string
  classTypes?: {
    name: string
    id: string
  }[]
  description?: string
  children?: TreeElement[]
}