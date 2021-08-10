import React from "react";
import InputFormContainer from "./InputFormContainer";
import WordCardListContainer from "./WordCardListContainer";
import { ComponentsWrapper } from "../common/CommonComponents";

export default function InputPage() {
  return (
    <ComponentsWrapper>
      <WordCardListContainer />
      <InputFormContainer />
    </ComponentsWrapper>
  );
}
