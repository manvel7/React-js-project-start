declare enum Unit {
    px = "px",
    rem = "rem",
    percent = "%",
    em = "em"
}
declare const getUnit: (styleValue: string) => Unit;
declare const getValue: (styleValue: string) => number;
declare const pxToRem: (styleValue: string, htmlBaselinePx: string, decimal?: number) => string;
declare const toPercent: (value: number, total?: number, decimal?: number) => string;
export { Unit, getUnit, getValue, toPercent, pxToRem };
