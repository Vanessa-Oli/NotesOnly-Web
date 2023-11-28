import styled from "styled-components";

export const NewContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template:
  "header" 105px
  "content" auto / 1fr;

  > main {
    grid-area: content;
    overflow-y: auto;
  }

  .tags {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export const Form = styled.form`
  max-width: 550px;
  margin: 2.375rem auto;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 2.25rem;

    button {
      font-size: 1.25rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`;