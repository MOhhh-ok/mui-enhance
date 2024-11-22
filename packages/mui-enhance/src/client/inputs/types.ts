import { TextFieldProps } from '@mui/material';

export type NumberAllowedRange = {
    min?: number;
    max?: number;
};

export type NumberInputProps = {
    value: number | null | undefined;
    onChange: (value: number) => void;
    endText?: string;
    allowedRange?: NumberAllowedRange;
    textFieldProps?: Omit<TextFieldProps, 'defaultValue' | 'type'>;
};

export type PercentageInputProps = {
    value: number | null | undefined;
    onChange: (value: number) => void;
    allowRange?: NumberAllowedRange;
};
