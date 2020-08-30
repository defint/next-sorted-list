import { getList, updateOrder } from "../../../utils/db";

export default async (req, res) => {
  if (req.method === 'POST') {
    const {dragId, hoverId} = req.query;
    const data = updateOrder(dragId, hoverId);
    res.statusCode = 200;
    res.json(data);
  } else {
    res.statusCode = 200;
    res.json(getList());
  }

}
