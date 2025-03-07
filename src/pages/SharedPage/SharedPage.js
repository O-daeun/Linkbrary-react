import React, { useEffect, useState } from "react";
import Search from "../../components/Search/Search";
import { getSharedList } from "../../api";
import { StyledSectionWrap, StyledTopWrap } from "../Common.styled";
import * as S from "./SharedPage.styled";
import Profile from "../../components/Profile/Profile";
import CardList from "../../components/CardList/CardList";

export default function SharedPage() {
  const [folder, setFolder] = useState([]);

  const handleLoad = async () => {
    const nextFolder = await getSharedList();
    setFolder(nextFolder);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      <StyledTopWrap>
        <Profile
          src={folder?.owner?.profileImageSource}
          $size='m'
          user={folder?.owner?.name}
          $flextype='column'
        />
        <S.StyledTitle>{folder?.name}</S.StyledTitle>
      </StyledTopWrap>
      <StyledSectionWrap>
        <Search />
        {folder && <CardList items={folder.links} />}
      </StyledSectionWrap>
    </>
  );
}
