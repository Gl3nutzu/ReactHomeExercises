import React, { FC } from "react";
import { User } from "../../store/types";
import { UserCard } from "../UserCard/UserCard";
import { StyledButton, StyledButtonSecondary, StyledSlide, StyledSlideshow, StyledWrapper } from "./styles";

interface Props {
    users: User[];
}

export const Slideshow: FC<Props> = ({users}) => {
    const [index, setIndex] = React.useState<number>(0);
    const [autoplay, setAutoplay] = React.useState<boolean>(true);

    const handleNext = React.useCallback(() => {
        setIndex(index === users.length - 1 ? 0 : index + 1);
    }, [index, users]);

    React.useEffect(() => {
        setIndex(0);
    }, [users]);

    React.useEffect(() => {
        if (autoplay) {
            const id = setTimeout(() => {
                handleNext();
            }, 2000);
            return () => clearTimeout(id);
        }
    }, [index, autoplay, handleNext]);

    return (
        <StyledSlideshow>
            <StyledWrapper>
                {users.map((user, i) => (
                    <StyledSlide key={i} active={i === index}>
                         <UserCard image={user.picture.large} firstName={user.name.first} lastName={user.name.last} />
                    </StyledSlide>
                ))}
            </StyledWrapper>
            <StyledWrapper>
                <StyledButtonSecondary onClick={() => setAutoplay(true)}>Start</StyledButtonSecondary>
                <StyledButton onClick={() => setAutoplay(false)}>Stop</StyledButton>
            </StyledWrapper>
        </StyledSlideshow>
    );
}
    
