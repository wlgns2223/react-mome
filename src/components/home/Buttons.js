import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { Button } from "../common/CommonComponents";

export default function ButtonList() {
  const history = useHistory();
  const goInput = () => {
    history.push("/input");
  };
  const goManage = () => {
    history.push("/manage");
  };
  const goStart = () => {
    history.push("/start");
  };

  return (
    <Section>
      <ItemList>
        <Item>
          <Button onClick={goInput} width="220px" height="70px" color="navy">
            <h2>단어입력</h2>
          </Button>
        </Item>
        <Item>
          <Button onClick={goManage} width="220px" height="70px" color="navy">
            <h2>단어관리</h2>
          </Button>
        </Item>
        <Item>
          <Button onClick={goStart} width="220px" height="70px" color="navy">
            <h2>시작</h2>
          </Button>
        </Item>
      </ItemList>
    </Section>
  );
}
const Section = styled.article`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
const ItemList = styled.ul`
  margin: 60px auto;
`;

const Item = styled.li`
  & + & {
    margin-top: 40px;
  }
`;
