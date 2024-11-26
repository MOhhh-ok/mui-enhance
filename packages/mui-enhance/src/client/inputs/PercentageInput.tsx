import { forwardRef } from "react";
import { NumberInput } from "./NumberInput.js";
import { PercentageInputProps } from "./types.js";
import { anyToNumber } from "./utils.js";

export const PercentageInput = forwardRef<HTMLInputElement, PercentageInputProps>(
    function PercentageInput(props, ref) {
        const { value, onChange, onValueChange, ...rest } = props;

        return <NumberInput
            ref={ref}
            value={valueToPercentage(value)}
            onChange={(ev) => {
                const newValue = percentageToValue(ev.target.value);
                ev.target.value = String(newValue);
                onChange?.(ev);
            }}
            onValueChange={(v, s) => {
                const newValue = percentageToValue(v.floatValue ?? 0);
                v.floatValue = newValue;
                v.formattedValue = String(newValue);
                v.value = String(newValue);
                onValueChange?.(v, s);
            }}
            endText='%'
            {...rest}
        />
    }
);

function percentageToValue(percentage: number | string | null | undefined) {
    return Math.round((anyToNumber(percentage)) * 100) / 10000;
}

function valueToPercentage(value: number | string | null | undefined) {
    return Math.round((anyToNumber(value)) * 10000) / 100;
}
