import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template: 
    "brand header" 105px
    "menu search" 128px
    "menu content" auto
    "newnote content" 64px / 250px auto;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  > .rings-loader {
    margin: auto;
    background-color: red;
  }
`;

export const Brand = styled.div`
  grid-area: brand;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  > h1 {
    color: ${({ theme }) => theme.COLORS.PURPLE};
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 32px;
  }
`;

export const Menu = styled.ul`
  grid-area: menu;

  list-style: none;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  padding-top: 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  > li + li {
    margin-top: 1.5rem;
  }
`;

export const Search = styled.div`
  grid-area: search;

  display: flex;
  align-items: center;
  padding: 0 4rem;
`;

export const HomeContent = styled.div`
  grid-area: content;

  display: flex;
  flex-direction: column;
  padding: 0 4rem;
  overflow-y: scroll;
`;

export const NewNote = styled(Link)`
  grid-area: newnote;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  background-color: ${({ theme }) => theme.COLORS.PURPLE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  font-size: 1.25rem;
  line-height: 26px;

  > svg {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }
`;
