import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 32px 104px 108px;
  background-color: var(--black-color);
  font-family: "Arial", sans-serif;
  font-size: 1rem;

  @media (max-width: 767px) {
    font-size: 1rem;
    padding: 32px;
  }
`;

export const StyledInner = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1712px;
  margin: 0 auto;

  @media (max-width: 767px) {
    display: grid;
  }
`;

export const StyledAddress = styled.address`
  flex-basis: 120px;
  color: #676767;

  @media (max-width: 767px) {
    grid-row: 2;
    grid-column: 1;
    margin-top: 58px;
  }
`;

export const StyledNavList = styled.ul`
  display: flex;
  gap: 30px;
  color: #cfcfcf;

  @media (max-width: 767px) {
    grid-row: 1;
    grid-column: 1;
  }
`;

export const StyledSnsList = styled.ul`
  flex-basis: 120px;
  display: flex;
  gap: 12px;

  @media (max-width: 767px) {
    grid-row: 1;
    grid-column: 2;
  }
`;
