import { FC } from "react";
import { StyledInput } from "./styles";

interface Props {
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<Props> = ({placeholder, value, onChange}) => <StyledInput placeholder={placeholder} value={value} onChange={onChange} />;
