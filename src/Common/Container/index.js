import styled from "styled-components";

export const Container = styled.main`
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 15px;
  }
`;
