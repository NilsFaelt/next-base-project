import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div<{ $bgcolor: string }>`
  background-color: ${(props) => props.$bgcolor};

  flex: 1;
  min-width: 18rem;
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
