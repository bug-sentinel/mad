import type {
    Color,
    EDSColor,
    EDSTextColor,
    HexColorValue,
    RGBAColorValue,
    RGBColorValue,
    Theme
} from "./types"

export const isHexColorValue = (obj: string): obj is HexColorValue => obj.startsWith("#");
export const isRGBAColorValue = (obj: string): obj is RGBAColorValue => obj.startsWith("rgba(");
export const isRGBColorValue = (obj: string): obj is RGBColorValue => obj.startsWith("rgb(");
export const isEDSColor = (obj: string): obj is EDSColor => ["primary", "secondary", "warning", "danger", "success"].some(col => col === obj);
export const isTextColor = (obj: string): obj is EDSTextColor => ["textPrimary", "textSecondary", "textTertiary", "textInverted"].some(col => col === obj);


export function resolveColor(color: Color, theme: Theme) {
    if (isEDSColor(color)) return theme.colors.interactive[color];
    if (isTextColor(color)) {
        const textColorToThemeKeyMap: Record<EDSTextColor, keyof typeof theme.colors.text> = {
            textPrimary: "primary",
            textSecondary: "secondary",
            textTertiary: "tertiary",
            textInverted: "primaryInverted",
        } as const;
        return theme.colors.text[textColorToThemeKeyMap[color]];
    }
    return color;
}