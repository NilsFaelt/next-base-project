import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 70vh;
  background-image: url("/images/main.png"); /* Replace 'your-image.jpg' with your image file */
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 4rem;
`;
export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0rem;
  color: white;
`;
export const Title = styled.h2`
  font-weight: bold;
  text-align: center;
  font-size: 3rem;
  color: white;
  margin-bottom: 0;
  @media (max-width: 500px) {
    width: 70vw;
  }
`;
export const Text = styled.p`
  color: white;
  text-align: center;
  font-size: 1.5rem;
  width: 50vw;
`;
