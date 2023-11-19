import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(252, 76, 148);
  padding: 0.8rem;
  border: none;
  border-radius: 3rem;
  white-space: nowrap;
  width: min-content;
  color: white;
  margin: 2rem 2rem 2rem 2rem;
  cursor: pointer;
  align-self: flex-end;
  &:hover {
    background-color: rgb(252, 76, 148);
  }
`;
