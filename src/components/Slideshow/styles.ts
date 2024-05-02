import styled from "styled-components";

export const StyledSlideshow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const StyledSlide = styled.div<{ active: boolean }>`
  display: ${({ active }) => (active ? "block" : "none")};
`;

export const StyledButton = styled.button`
  padding: 10px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

export const StyledButtonSecondary = styled.button`
    padding: 10px;
    margin: 10px;
    border: none;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
`;

export const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;