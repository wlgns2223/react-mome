import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import WordCard from "./WordCard";

export default function WordCardList({ words, onDelete, onUpdate }) {
  const listRef = useRef();

  useEffect(() => {
    const scrollDown = () => {
      if (listRef.current.lastChild) {
        listRef.current.lastChild.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
      }
    };

    scrollDown();
  }, [words]);

  return (
    <List ref={listRef}>
      {words.map((word) => (
        <li key={word.id}>
          <WordCard word={word} onDelete={onDelete} onUpdate={onUpdate} />
        </li>
      ))}
    </List>
  );
}

const List = styled.ul`
  width: 100%;
  overflow-y: scroll;
  flex: 1;
  margin-bottom: 2rem;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  li + li {
    margin-top: 1rem;
  }
`;
