import styled from "styled-components";

export const Container = styled.div<{ $bgcolor: string }>`
  display: flex;
  flex-direction: ;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
  height: auto;
  margin-top: 5rem;
  padding-left: 2rem;
  padding-right: 2rem;
  box-sizing: border-box;
  background-color: ${(props) => props.$bgcolor};
`;
