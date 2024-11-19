import React from 'react';
import { NumberInput } from '../../mui-inputs/src/NumberInput';
import { PercentageInput } from '../../mui-inputs/src/PercentageInput';

export default function App() {
    const [currency, setCurrency] = React.useState(0);
    const [percentage, setPercentage] = React.useState(0);
    const [n, setN] = React.useState(0);

    return <>
        {n}
        <NumberInput value={n} onChange={setN} textFieldProps={{ variant: "filled" }} />
        {currency}
        <NumberInput endText='JPY' value={currency} onChange={(v) => setCurrency(v)} allowedRange={{ min: 0, max: 300 }} />
        {percentage}
        <PercentageInput value={percentage} onChange={(v) => setPercentage(v)} allowRange={{ min: 0, max: 100 }} />
    </>
}

