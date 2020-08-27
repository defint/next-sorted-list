export default async (req, res) => {
  await new Promise(resolve => {
    setTimeout(resolve, 1);
  });
  res.statusCode = 200;
  res.json({ name: 'John Doe' });
}
