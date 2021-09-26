import { ScreenBreakpointName, GridBreakpoints } from "../interfaces/grid";
declare const mediaBreakpointUp: (breakpointName: ScreenBreakpointName, breakpoints: GridBreakpoints, styles: string) => string;
declare const mediaBreakpointDown: (breakpointName: ScreenBreakpointName, breakpoints: GridBreakpoints, styles: string) => string;
declare const mediaBreakpointBetween: (lowerBreakpointName: ScreenBreakpointName, upperBreakpointName: ScreenBreakpointName, breakpoints: GridBreakpoints, styles: string) => string;
declare const mediaBreakpointOnly: (breakpointName: ScreenBreakpointName, breakpoints: GridBreakpoints, styles: string) => string;
export { mediaBreakpointUp, mediaBreakpointDown, mediaBreakpointBetween, mediaBreakpointOnly };
