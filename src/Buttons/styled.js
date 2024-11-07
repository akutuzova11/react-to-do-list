import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Selectors = styled.button`
  background-color: transparent;
  border: none;
  color: teal;
  margin-left: 10px;

  @media (max-width: 767px) {
    margin: 10px;
    flex-basis: 100%;
  }

  &:hover {
    color: hsl(180, 100%, 35%);
  }

  &:active {
    color: hsl(180, 100%, 40%);
  }

  &:disabled {
    color: #bfbfbf;
  }

  ${({ isHidden }) =>
    isHidden &&
    css`
      visibility: hidden;
    `}
`;
