import styled, { css } from "styled-components";
import { Link } from "react-router-dom/";

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  border-bottom: 2px solid #ddd;
  padding: 10px;
  gap: 10px;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  ${({ completed }) =>
    completed &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.buttonText};
  border: none;
  width: 30px;
  height: 30px;
  padding: 5px;
  margin: 0;
  transition: background 0.4s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonCompletedHover};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.buttonCompletedActive};
  }

  ${({ $isDeleted }) =>
    $isDeleted &&
    css`
      background-color: ${({ theme }) => theme.colors.ButtonRemove};

      &:hover {
        background-color: ${({ theme }) => theme.colors.ButtonRemoveHover};
      }

      &:active {
        background-color: ${({ theme }) => theme.colors.ButtonRemoveActive};
      }
    `}
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
`;
