import styled from "styled-components";

export const DetailsContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: scroll;
    padding: 4rem 0;
  }

  > .details-loader {
    margin: auto;
  }
`;

export const Links = styled.ul`
  list-style: none;

  > li {
    margin-top: 0.75rem;

    a {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const DetailsContent = styled.div`
  max-width: 550px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > button:first-child {
    align-self: end;
  }

  > h1 {
    font-size: 2.25rem;
    font-weight: 500;
    padding-top: 4rem;
  }

  > p {
    font-size: 1rem;
    margin-top: 1rem;
    text-align: justify;
  }
`;