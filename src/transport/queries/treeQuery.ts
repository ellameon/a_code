import { gql } from '@apollo/client';

export const GET_TREE = gql`
 query {
   modelTreeClasses {
      searched
      tree {
         id
         name
         sort
         description
         classTypes {
           name
           id
           standard
           code
           description
         }
         children {
           id
           name
           description
           children {
             id
             name
             description
             children {
             id
             name
             description
             }
            }
         }
      }
   }
 }
`;