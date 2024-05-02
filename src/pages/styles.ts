import styled from "styled-components";

export const PageWrapper = styled.article`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.large};
  box-sizing: border-box;
`;

export const PageTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  text-align: center;
`;

export const Info = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSizes.medium};
  color: ${({ theme }) => theme.colors.primary};
  margin-top: ${({ theme }) => theme.spacing.medium};
  text-align: center;
`;
