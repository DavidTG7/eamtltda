import styled from "styled-components";

export const LineDivisor = styled.div`
  width: 20%;
  height: 4px;
  border-radius: 20px;
  margin: 2px;
  background: ${({ color }) => (color ? color : "blue")};
`;
