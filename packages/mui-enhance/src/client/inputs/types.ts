import { TextFieldProps } from '@mui/material';

export type NumberAllowedRange = {
    min?: number;
    max?: number;
};

export type NumberInputProps = {
    value: number;
    onChange: (value: number) => void;
    endText?: string;
    allowedRange?: NumberAllowedRange;
    textFieldProps?: Omit<TextFieldProps, 'defaultValue' | 'type'>;
};
