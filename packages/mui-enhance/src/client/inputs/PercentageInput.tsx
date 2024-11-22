import { NumberInput } from "./NumberInput.js";
import { NumberAllowedRange } from "./types.js";


export type PercentageInputProps = {
    value: number | undefined;
    onChange: (value: number | undefined) => void;
    allowRange?: NumberAllowedRange;
}

export function PercentageInput(props: PercentageInputProps) {
    const { value, onChange, allowRange } = props;

    return <NumberInput
        value={valueToPercentage(value ?? 0)}
        onChange={(v) => onChange(percentageToValue(v))}
        endText='%'
        allowedRange={allowRange}
    />
}

function percentageToValue(percentage: number | undefined) {
    if (!percentage) return 0;
    return Math.round(percentage * 100) / 10000;
}

function valueToPercentage(value: number | undefined) {
    return Math.round((value ?? 0) * 10000) / 100;
}