import styled from "styled-components";

export const EmpresaMain = styled.div`
  background: white;
  padding: 2rem;
`;

export const EmpresaTitle = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
  font-size: 3rem;
`;

export const EmpresaSingleCard = styled.div`
  position: relative;
  display: flex;
  flex-flow: ${({ left }) => (left ? "row-reverse" : null)};
  flex-flow: ${({ column }) => (column ? "column" : null)};
  align-items: center;
  gap: 30px;
  margin-top: 2rem;

  @media screen and (max-width: 700px) {
    display: flex;
    flex-flow: column;
    align-items: center;
  }
`;

export const ItemImage = styled.img`
  max-width: 22rem;
  border-radius: 20px;

  @media screen and (max-width: 840px) {
    width: 18rem;
  }
`;

export const ItemTextBox = styled.div`
  .ol-2column {
    column-count: 2;
    column-gap: 4rem;
    /* column-rule:4px dotted gray; */
  }

  @media screen and (max-width: 1000px) {
    .ol-2column {
      column-count: 1;
    }
  }
`;

export const ItemSubTitle = styled.h3`
  text-align: center;
`;

export const ItemParagraph = styled.p`
  position: relative;
  background: transparent;
  padding: 1rem;
`;

export const LowDivisor = styled.div`
  width: 100%;
  height: 10px;
  border-radius: 20px;
  background: ${({ color }) => (color ? color : "blue")};
`;
