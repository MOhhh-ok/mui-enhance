import { TextField } from "@mui/material";
import { forwardRef } from "react";
import { NumericFormat } from "react-number-format";
import { NumberInputProps } from "./types.js";
import { isAllowed } from "./utils.js";

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
    function NumberInput(props: NumberInputProps, ref) {
        const { endText, allowedRange, textFieldProps, value, ...rest } = props;
        return <NumericFormat
            {...textFieldProps}
            getInputRef={ref}
            thousandSeparator={true}
            customInput={TextField}
            value={value}
            {...rest}
            isAllowed={(values) => isAllowed(values, allowedRange)}
            sx={{
                '& .MuiInputBase-input': {
                    textAlign: 'right'
                }
            }}
            slotProps={{
                input: {
                    endAdornment: endText ? <span style={{ marginLeft: "0.5em" }}>{endText}</span> : undefined
                }
            }}
        />
    }
);