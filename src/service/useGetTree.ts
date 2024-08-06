import { useMutation, useQuery } from "@apollo/client"
import { GET_TREE } from "../transport"
import client from "../transport/Client";

export const useGetTree = () => {

  async function getTree() {
    try {
      const { data } = await client.query({
        query: GET_TREE,
      });
      console.log(data)
      return data;
    } catch (error) {
      console.error('Error fetching user by email:', error);
      throw error;
    }
  }
  
  return {
    getTree
  }
}