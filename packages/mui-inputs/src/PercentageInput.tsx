import { NumberInput } from "./NumberInput";
import { NumberAllowedRange } from "./types";


export function PercentageInput(props: { value: number, onChange: (value: number) => void, allowRange?: NumberAllowedRange }) {
    const { value, onChange, allowRange } = props;

    return <NumberInput
        value={valueToPercentage(value)}
        onChange={(v) => onChange(percentageToValue(v))}
        endText='%'
        allowedRange={allowRange}
    />
}

function percentageToValue(percentage: number | undefined) {
    if (!percentage) return 0;
    return Math.round(percentage * 100) / 10000;
}

function valueToPercentage(value: number) {
    return Math.round(value * 10000) / 100;
}
