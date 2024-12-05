import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ButtonStyled = styled.button`
  background-color: transparent;
  border: none;
  color: ${({theme})=>theme.colors.primary};
  margin-left: 10px;

  @media (max-width:  ${({theme}) => theme.breakpoints.mobile}px) {
    margin: 10px;
    flex-basis: 100%;
  }

  &:hover {
    color: ${({theme})=>theme.colors.buttonSubmitHover};
  }

  &:active {
    color: ${({theme})=>theme.colors.buttonSubmitActive};
  }

  &:disabled {
    color: ${({theme})=>theme.colors.buttonDisabled};
  }

  ${({ isHidden }) =>
    isHidden &&
    css`
      visibility: hidden;
    `}
`;
