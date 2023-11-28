import styled from "styled-components";
import backgroundImg from '../../assets/background-signin.png';

export const SignUpContainer = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 8.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  > h1 {
    font-size: 3rem;
    color: ${({ theme }) => theme.COLORS.PURPLE};
  }

  > h2 {
    font-size: 1.5rem;
    margin: 3rem 0;
  }

  > p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > a {
    margin-top: 8rem;
    color: ${({ theme }) => theme.COLORS.PURPLE};
  }
`;

export const Background = styled.div`
  flex: 1;

  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;