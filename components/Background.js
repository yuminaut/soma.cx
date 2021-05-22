import styled from "styled-components";

export const Background = ({ children, url }) => (
  <Container url={url}>
    <div className="layout">{children}</div>
  </Container>
);

const Container = styled.div`
  background: url(${(props) => props.url}) center center no-repeat fixed;
  background-size: contain;
  height: 100%;
  > div {
    background-color: rgba(0, 0, 0, 0.25);
    height: 100%;
  }
`;
