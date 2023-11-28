import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 100%;
  min-height: 100vh;

  > header {
    width: 100%;
    height: 9rem;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;
    padding: 0 7.75rem;

    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 1.5rem;
    }

    button {
      display: flex;
      border: none;
      background: none;
    }
  }
`;

export const Form = styled.form`
  max-width: 340px;
  margin: -5.8rem auto 0;

  > div:nth-child(4) {
    margin-top: 1.5rem;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: 0 auto 2rem;

  width: 11.625rem;
  height: 11.625rem;
  border-radius: 50%;

  > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  > label {
    width: 3rem;
    height: 3rem;

    background-color: ${({ theme }) => theme.COLORS.PURPLE};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      font-size: 1.25rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`;