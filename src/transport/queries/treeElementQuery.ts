import { gql } from "@apollo/client";

export const GET_TREE_ELEMENT = gql`
query GetTreeById($id: ID!) {
  modelTreeClasses {
    tree(id: $id) {
      id
      name
      sort
      classTypes {
        id
        name
      }
      children {
        id
        name
      }
    }
  }
}

`