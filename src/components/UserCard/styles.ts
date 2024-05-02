import styled from "styled-components";

export const StyledUserCard = styled.div`
    display: flex;
    align-items: center;
    padding: ${({ theme }) => theme.spacing.medium};
    border: 1px solid ${({ theme }) => theme.colors.grey};
    border-radius: 5px;
    margin-bottom: ${({ theme }) => theme.spacing.medium};
    `;
    
export const StyledUserImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: ${({ theme }) => theme.spacing.medium};
    `;

export const StyledUserName = styled.p`
    font-size: ${({ theme }) => theme.typography.fontSizes.medium};
    `;