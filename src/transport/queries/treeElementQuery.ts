import { gql } from "@apollo/client";

export const GET_TREE_ELEMENT = gql`
  query { 
    modelTreeClasses {
     searched
      tree {
       id
        name 
        sort 
        children { 
        id
         name 
         children
          { 
          id 
          name
           } 
       } 
     } 
   }
 }
`