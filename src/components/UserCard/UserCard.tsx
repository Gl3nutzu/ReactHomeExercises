import { FC } from "react";
import { StyledUserCard, StyledUserImage, StyledUserName } from "./styles";

interface Props {
    image: string;
    firstName: string;
    lastName: string;
}

export const UserCard: FC<Props> = ({image, firstName, lastName}) => (
    <StyledUserCard>
        <StyledUserImage src={image} alt="user" />
        <StyledUserName>{firstName} {lastName}</StyledUserName>
    </StyledUserCard>
);
    
