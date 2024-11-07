import React from "react";
import {Segment, Header, Container, Title } from "./styled.js"

const Section = ({ title, body, extraHeaderContent }) => (
  <Segment>
    <Header>
      <Title>{title}</Title>
      {extraHeaderContent}
    </Header>
    <Container>{body}</Container>
  </Segment>
);

export default Section;
