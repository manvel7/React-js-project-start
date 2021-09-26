interface ITypographyStyles {
    size: string;
    weight: number;
    lineHeight: string;
    letterSpacing: string;
}
declare type TypographyVariantName = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body" | "caption";
declare type TypographyVariants = Record<TypographyVariantName, ITypographyStyles>;
declare type FontWeightName = "normal" | "bold" | "boldest";
declare type FontWeights = Record<FontWeightName, number>;
interface ITypography {
    htmlFontSize: string;
    fontFamily: string;
    fontWeights: FontWeights;
    variants: TypographyVariants;
}
export { ITypography };
