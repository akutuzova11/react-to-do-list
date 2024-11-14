import styled from "styled-components";

export const Template = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

export const Button = styled.button`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.buttonText};
  border: none;
  transition: 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonSubmitHover};
    transform: scale(1.1);
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.buttonSubmitHover};
  }
`;

export const NewItem = styled.input`
  border: 2px solid #ddd;
  padding: 10px;

  &:focus {
    outline: 2px solid black;
    border-radius: 2px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    min-width: 50%;
  }
`;
