import { TextField } from "@mui/material";
import { NumericFormat } from "react-number-format";
import { NumberInputProps } from "./types.js";
import { isAllowed } from "./utils.js";

export function NumberInput(props: NumberInputProps) {
    const { value, onChange, endText, allowedRange, textFieldProps } = props;
    return <NumericFormat
        {...textFieldProps}
        thousandSeparator={true}
        customInput={TextField}
        value={value}
        onValueChange={(e) => onChange(e.floatValue ?? 0)}
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