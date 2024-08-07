import { TreeElement } from "../../../types";

export function findEntities(value: string, entities: TreeElement[]) {
  let result: TreeElement[] = []

  function find(list: TreeElement[]) {
    list.forEach(el => {
      if (el.name.includes(value)) {
        result = result.concat([el])
      }
      if (el.children) {
        find(el.children)
      }
    })
  }

  find(entities)

  return result
}