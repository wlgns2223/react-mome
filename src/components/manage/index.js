import React, { useState } from "react";
import Modal from "./modal";
import WordCardListContainer from "../inputPage/WordCardListContainer";
import ClearAll from "./clear";
import { useSelector, useDispatch } from "react-redux";
import { deleteOneWord } from "../../modules/thunks";

export default function Manage() {
  const [modalVisibility, setModalVisibility] = useState(false);
  const { words } = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  const onConfirm = () => {
    const destroy = (words) => {
      for (const { id } of words) {
        dispatch(deleteOneWord(`/${id}`, { id }));
      }
    };

    setModalVisibility(false);
    destroy(words);
  };
  const onCancel = () => {
    setModalVisibility(false);
  };

  const onDeleteAll = () => {
    setModalVisibility(true);
  };

  return (
    <>
      <WordCardListContainer />
      <ClearAll onDeleteAll={onDeleteAll} />
      <Modal
        title="정말로 삭제하시겠습니까?"
        visible={modalVisibility}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </>
  );
}
