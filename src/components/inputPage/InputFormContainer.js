import React from "react";
import InputForm from "./InputForm";
import * as thunks from "../../modules/thunks";
import { useDispatch } from "react-redux";

export default function InputFormContainer() {
  const dispatch = useDispatch();
  const onCreate = (word) => {
    dispatch(thunks.addOneWord(word));
  };

  return <InputForm onCreate={onCreate} />;
}
