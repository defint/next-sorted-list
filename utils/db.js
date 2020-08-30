export const cardsList = [
  {
    id: 1,
    text: "Write a cool JS library",
    order: 1,
  },
  {
    id: 2,
    text: "Make it generic enough",
    order: 2,
  },
  {
    id: 3,
    text: "Write README",
    order: 3,
  },
  {
    id: 4,
    text: "Create some examples",
    order: 4,
  },
  {
    id: 5,
    text:
      "Spam in Twitter and IRC to promote it (note that this element is taller than the others)",
      order: 5,
  },
  {
    id: 6,
    text: "???",
    order: 6,
  },
  {
    id: 7,
    text: "PROFIT",
    order: 7,
  },
];

export const getList = () => cardsList.sort((a,b) => a.order - b.order);

export const getItem = (id) => cardsList.find(item => item.id.toString() === id);

export const updateOrder = (dragId, hoverId) => {
  const drag = cardsList.find(item => item.id == dragId);
  const hover = cardsList.find(item => item.id == hoverId);

  const swap = drag.order;
  drag.order = hover.order;
  hover.order = swap;

  return getList();
};