import React, { useState } from "react";
import styled, { css } from "styled-components";
import { darken } from "polished";
import { MdAddCircle, MdArrowBack, MdArrowForward } from "react-icons/md";
import { Button } from "../common/CommonComponents";

export default function Controller({ goBackward, goForward }) {
  const [meaning, setMeaning] = useState("");

  const onChange = (e) => {
    setMeaning(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setMeaning("");
  };

  return (
    <FormPositioner>
      <Form>
        <ItemBlock>
          <Text>뜻</Text>
          <Input
            type="text"
            placeholder="뜻을 입력하세요"
            value={meaning}
            onChange={onChange}
          />
          <CircleButton type="button" onClick={onSubmit}>
            <MdAddCircle />
          </CircleButton>
        </ItemBlock>
        <InputBlock>
          <Button
            width="50%"
            height="2.5rem"
            color="lightPink"
            type="button"
            onClick={goBackward}
          >
            <MdArrowBack />
          </Button>
          <Button
            width="50%"
            height="2.5rem"
            color="lightPink"
            type="button"
            onClick={goForward}
          >
            <MdArrowForward />
          </Button>
        </InputBlock>
      </Form>
    </FormPositioner>
  );
}

const FormPositioner = styled.div`
  margin-bottom: 2rem;
  width: 100%;
`;

const Form = styled.form`
  padding: 1rem 1.5rem;
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.pallete.navy};
  color: ${({ theme }) => theme.pallete.lightIvory};
  position: relative;
`;
const InputBlock = styled.div`
  display: flex;
`;
const ItemBlock = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  flex: 1;
  height: 2rem;
  font-size: 1.25rem;
  border-radius: 0.25rem;
  padding: 0.25rem 1rem;
  outline: none;
  border: none;
  width: 100%;
`;
const Text = styled.span`
  font-size: 1.25rem;
  line-height: 1.5rem;
  display: inline-block;
  width: 3rem;
  min-width: 3rem;
  text-align: center;
`;
const CircleButton = styled.button`
  width: 3.5rem;
  height: 2.5rem;
  border-radius: 0.25rem;
  font-size: 2rem;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 1rem;

  color: ${({ theme }) => theme.pallete.lightIvory};
  background-color: ${({ theme }) => theme.pallete.lightPink};

  &:hover {
    ${({ theme }) => {
      const color = theme.pallete.lightPink;
      return css`
        background-color: ${darken(0.1, color)};
      `;
    }}
  }
`;
