import React, { useState } from "react";
import useSWR from "swr";
import fetcher from "../utils/fetcher";
import Card from "./Card";

export const Container = (props) => {
  const [cards, setCards] = useState([]);

  useSWR("http://localhost:3000/api/cards", fetcher, {
    initialData: props.cardsData,
    onSuccess: (data) => {
      setCards(data);
    },
  });

  const moveCard = (dragId, hoverId) => {
    const dragIndex = cards.findIndex((item) => item.id === dragId);
    const hoverIndex = cards.findIndex((item) => item.id === hoverId);

    const newCards = [...cards];
    const swap = newCards[dragIndex];

    newCards[dragIndex] = newCards[hoverIndex];
    newCards[hoverIndex] = swap;

    setCards(newCards);

    fetch(
      `http://localhost:3000/api/cards?hoverId=${hoverId}&dragId=${dragId}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      },
    );
  };

  return (
    <div>
      {cards.map((card, i) => (
        <Card
          key={card.id}
          index={i}
          id={card.id}
          text={card.text}
          moveCard={moveCard}
        />
      ))}
    </div>
  );
};
