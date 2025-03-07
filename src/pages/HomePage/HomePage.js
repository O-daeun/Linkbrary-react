import React from "react";
import Button from "../../components/Button/Button";
import * as S from "./HomePage.styled";

export default function HomePage() {
  return (
    <S.StyledWrap>
      <Button link='/shared' text='shared 페이지로 이동'></Button>
      <Button link='/folder' text='folder 페이지로 이동'></Button>
    </S.StyledWrap>
  );
}
