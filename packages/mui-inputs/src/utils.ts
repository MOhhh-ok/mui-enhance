import { NumberFormatValues } from 'react-number-format';
import { NumberAllowedRange } from './types.js';

export function isAllowed(
    values: NumberFormatValues,
    allowRange?: NumberAllowedRange
) {
    const { floatValue } = values;
    if (floatValue === undefined) return false;
    if (allowRange?.min !== undefined && floatValue < allowRange.min)
        return false;
    if (allowRange?.max !== undefined && floatValue > allowRange.max)
        return false;
    return true;
}
