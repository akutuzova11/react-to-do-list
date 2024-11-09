import styled from "styled-components";

export const Segment = styled.section`
  background-color: ${({ theme }) => theme.colors.segment};
  margin: 10px 0;
  box-shadow: 0 0 5px #afafaf;
`;

export const Header = styled.header`
  padding: 20px;
  margin: 0;
  border-bottom: 2px solid #ddd;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

export const Container = styled.div`
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 15px;
  }
`;

export const Title = styled.h2`
  font-size: 21px;
  margin: 0;
`;
