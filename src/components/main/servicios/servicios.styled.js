import styled from "styled-components";

export const LineDivisor = styled.div`
  width: 100%;
  height: 10px;
  border-radius: 20px;
  margin: 2px;
  background: ${({ color }) => (color ? color : "blue")};
`;
