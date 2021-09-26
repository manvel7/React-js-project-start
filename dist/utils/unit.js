var Unit;
(function (Unit) {
    Unit["px"] = "px";
    Unit["rem"] = "rem";
    Unit["percent"] = "%";
    Unit["em"] = "em";
})(Unit || (Unit = {}));
var getUnit = function (styleValue) {
    switch (true) {
        case !!styleValue.match(Unit.px):
            return Unit.px;
        case !!styleValue.match(Unit.rem):
            return Unit.rem;
        case !!styleValue.match(Unit.percent):
            return Unit.percent;
        case !!styleValue.match(Unit.em):
            return Unit.em;
        default:
            throw new Error("Unit can't be extracted from " + styleValue);
    }
};
var getValue = function (styleValue) {
    var unit = getUnit(styleValue);
    var number = styleValue.replace(unit, "");
    return Number(number);
};
var pxToRem = function (styleValue, htmlBaselinePx, decimal) {
    if (decimal === void 0) { decimal = 2; }
    var valueUnit = getUnit(styleValue);
    var baselineUnit = getUnit(styleValue);
    if (baselineUnit !== Unit.px || valueUnit !== Unit.px) {
        throw new Error("Values are NOT in px unit");
    }
    var baseline = getValue(htmlBaselinePx);
    var value = getValue(styleValue);
    var remValue = Math.floor((value / baseline) * Math.pow(10, decimal)) / Math.pow(10, decimal);
    return "" + remValue + Unit.rem;
};
var toPercent = function (value, total, decimal) {
    if (total === void 0) { total = 100; }
    if (decimal === void 0) { decimal = 10; }
    var percentValue = Math.floor((value / total) * 100 * Math.pow(10, decimal)) / Math.pow(10, decimal);
    return "" + percentValue + Unit.percent;
};
export { Unit, getUnit, getValue, toPercent, pxToRem };
