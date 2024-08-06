import { gql } from '@apollo/client';

export const GET_DATA = gql`
query
      
{
  __type(name: "AuthPayload") {
    name
    kind
    fields {
      name
      type {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
          }
        }
      }
    }
  }
}



`;