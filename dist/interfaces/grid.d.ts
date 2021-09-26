declare type ColBreakpointName = "xs" | "sm" | "md" | "lg" | "xl";
declare type ScreenBreakpointName = ColBreakpointName | "xxl";
declare type ColBreakpoints = Record<ColBreakpointName, string>;
declare type GridBreakpoints = Record<ScreenBreakpointName, string>;
declare type ContainerMaxWidths = Partial<Record<ScreenBreakpointName, string>>;
interface IGrid {
    columns: number;
    gutterWidth: string;
    breakpoints: GridBreakpoints;
    containerMaxWidths: ContainerMaxWidths;
}
export { ColBreakpointName, ColBreakpoints, ScreenBreakpointName, ContainerMaxWidths, GridBreakpoints, IGrid };
