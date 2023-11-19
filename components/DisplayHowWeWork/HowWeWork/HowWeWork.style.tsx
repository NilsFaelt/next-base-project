import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div<{ $bgcolor: string }>`
  width: 20vw;
  background-color: ${(props) => props.$bgcolor};
  padding: 1rem;
  min-height: 14rem;
  flex: 1;
  @media (max-width: 868px) {
    width: auto;
    min-height: 0rem;
    padding-bottom: 6rem;
  }
`;
export const StyledImage = styled(Image)`
  width: 100%;
  height: 14rem;
  object-fit: cover;
`;
export const TextContainer = styled.div`
  box-sizeing: border-box;
  padding: 1rem;
`;
export const Title = styled.h2<{ $color: string }>`
  text-align: left;
  font-weight: bold;
  font-size: 1.2rem;
  color: ${(props) => props.$color};
  margin-bottom: 0;
`;
export const Text = styled.p<{ $color: string }>`
  text-align: left;
  color: ${(props) => props.$color};
  font-size: 0.8rem;
`;
