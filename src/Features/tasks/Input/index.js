import styled from "styled-components";

export default styled.input`
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
