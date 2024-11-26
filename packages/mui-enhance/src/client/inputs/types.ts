import { TextFieldProps } from '@mui/material';
import { NumericFormatProps } from 'react-number-format';

export type NumberAllowedRange = {
    min?: number;
    max?: number;
};

export type NumberInputProps = Pick<
    NumericFormatProps,
    'onChange' | 'onValueChange'
> & {
    value?: string | number | null | undefined;
    endText?: string;
    allowedRange?: NumberAllowedRange;
    textFieldProps?: Omit<TextFieldProps, 'defaultValue' | 'type'>;
};

export type PercentageInputProps = NumberInputProps;
//  Pick<
//     NumericFormatProps,
//     'onChange' | 'onValueChange'
// > & {
//     value?: string | number | null | undefined;
//     allowRange?: NumberAllowedRange;
// };
