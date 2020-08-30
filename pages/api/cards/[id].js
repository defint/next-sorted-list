import { getItem } from "../../../utils/db";

export default async (req, res) => {
  res.statusCode = 200;
  res.json(getItem(req.query.id) ?? {});
};
