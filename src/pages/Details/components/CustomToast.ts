import styled from "styled-components";

export const CustomToast = styled.div`
  > p {
    margin-bottom: 0.5rem;
  }

  > button {
    border: none;
    border-radius: 4px;
    background-color: #3498db;
    color: white;
    padding: 0.25rem 1rem;
  }

  > button + button {
    margin-left: 1rem;
  }
`;