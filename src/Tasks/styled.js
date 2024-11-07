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
  background-color: green;
  color: #fff;
  border: none;
  width: 30px;
  height: 30px;
  padding: 0px;
  margin: 0;
  transition: background 0.4s;

  &:hover {
    background-color: hsl(120, 100%, 30%);
  }

  &:active {
    background-color: hsl(120, 100%, 35%);
  }

  ${({ deleted }) =>
    deleted &&
    css`
      background-color: rgb(250, 48, 48);

      &:hover {
        background-color: hsl(0, 100%, 65%);
      }

      &:active {
        background-color: hsl(0, 100%, 75%);
      }
    `}
`;
