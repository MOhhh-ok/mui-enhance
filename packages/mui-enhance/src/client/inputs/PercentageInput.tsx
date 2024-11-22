import { NumberInput } from "./NumberInput.js";
import { PercentageInputProps } from "./types.js";

export function PercentageInput(props: PercentageInputProps) {
    const { value, onChange, allowRange } = props;

    return <NumberInput
        value={valueToPercentage(value)}
        onChange={(v) => onChange(percentageToValue(v))}
        endText='%'
        allowedRange={allowRange}
    />
}

function percentageToValue(percentage: number) {
    return Math.round(percentage * 100) / 10000;
}

function valueToPercentage(value: number | null | undefined) {
    return Math.round((value ?? 0) * 10000) / 100;
}