import { GET_TREE } from "../transport"
import client from "../transport/Client";
import { Tree } from "../types";

export const useGetTree = () => {

  async function getTree(): Promise<Tree> {
    try {
      const {data} = await client.query({
        query: GET_TREE,
      });
      return data
    } catch (error) {
      console.error('Error', error)
      throw error
    }
  }

  return {
    getTree
  }
}