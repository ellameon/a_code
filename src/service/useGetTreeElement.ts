import { GET_TREE_ELEMENT } from "../transport"
import client from "../transport/Client";
import { Tree } from "../types";

export const useGetTreeElement = () => {

  async function getTreeElement(): Promise<any> {
    try {
      const {data} = await client.query({
        query: GET_TREE_ELEMENT,
      });
      console.log(data)
      return data;
    } catch (error) {
      console.error('Error', error);
      throw error;
    }
  }

  return {
    getTreeElement
  }
}