import { gql } from '@apollo/client';

export const GET_TREE = gql`
 query {
   modelTreeClasses {
      searched
      tree {
         id
         name
         sort
         classTypes {
           name
           id
           standard
           code
         }
         children {
           id
           name
           children {
             id
             name
             children {
             id
             name
             }
            }
         }
      }
   }
 }
`;