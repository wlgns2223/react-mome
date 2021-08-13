import React from "react";
import styled from "styled-components";

export default function WordNameCard({ word }) {
  return (
    <CradContainer>
      <Card>
        <span>{word.name}</span>
      </Card>
    </CradContainer>
  );
}

const CradContainer = styled.div`
  flex: 1;
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  width: 100%;
  height: 150px;
  border: 10px solid ${({ theme }) => theme.pallete.navy};
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 3rem;
  }
`;
