import styled from "styled-components";

export const TagContainer = styled.span`
  font-size: 0.75rem;
  padding: 5px 14px;
  border-radius: 5px;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  background-color: ${({ theme }) => theme.COLORS.PURPLE};

  & + & {
    margin-left: 6px;
  }
`;