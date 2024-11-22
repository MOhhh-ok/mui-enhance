import { TextFieldProps } from '@mui/material';

export type NumberAllowedRange = {
    min?: number;
    max?: number;
};

export type NumberInputProps = {
    value: number | undefined;
    onChange: (value: number | undefined) => void;
    endText?: string;
    allowedRange?: NumberAllowedRange;
    textFieldProps?: Omit<TextFieldProps, 'defaultValue' | 'type'>;
};
