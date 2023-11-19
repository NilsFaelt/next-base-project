import { styled } from "styled-components";

export const Container = styled.div<{ $bgcolor: string }>`
  display: flex;
  flex-direction: column;
  color: black;
  background-color: ${(props) => props.$bgcolor};
`;
export const TitleWrapper = styled.div`
  width: 10rem;
`;
export const MarginLeftWrapper = styled.div`
  margin-left: 2rem;
`;
