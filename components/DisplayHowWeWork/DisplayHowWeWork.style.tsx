import styled from "styled-components";

export const OuterContainer = styled.div<{ $bgcolor: string }>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.$bgcolor};
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 5rem;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 3rem;
  margin-bottom: 5rem;
  width: 100%;
  height: auto;
  box-sizing: border-box;

  @media (max-width: 868px) {
    flex-direction: column;
  }
`;
export const TitleWrapper = styled.div`
  width: 10rem;
`;
