import styled, { css } from "styled-components";

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
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.buttonText};
  border: none;
  width: 30px;
  height: 30px;
  padding: 0px;
  margin: 0;
  transition: background 0.4s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonCompletedHover};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.buttonCompletedActive};
  }

  ${({ deleted }) =>
    deleted &&
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
