import React from "react";
import InputForm from "./InputForm";
import WordCardList from "./WordCardList";
import axios from "axios";

export default function InputPage() {
  return (
    <>
      <WordCardList />
      <InputForm />
    </>
  );
}
