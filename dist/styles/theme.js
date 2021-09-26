var theme = {
    palette: {
        primary: "#001254",
        border: "#E6E6E6",
        disabled: "#DDDDDD",
        alert: {
            info: "#001254",
            success: "#0C5B0F",
            warn: "#D4A600",
            error: "#CA0000"
        },
        background: {
            white: "#FEFEFE",
            light: "#F7F7F7",
            dark: "#000A62",
            disabled: "#E6E6E6",
            tinted: "#F1F2F5"
        },
        text: {
            white: "#FEFEFE",
            dark: "#232323",
            darkDimmed: "#808080"
        }
    },
    typography: {
        fontFamily: "'Nunito Sans', sans-serif",
        htmlFontSize: "10px",
        fontWeights: {
            normal: 400,
            bold: 600,
            boldest: 800
        },
        variants: {
            h1: {
                size: "43px",
                weight: 600,
                lineHeight: "64px",
                letterSpacing: "0.005em"
            },
            h2: {
                size: "34px",
                weight: 600,
                lineHeight: "40px",
                letterSpacing: "0.005em"
            },
            h3: {
                size: "27px",
                weight: 600,
                lineHeight: "32px",
                letterSpacing: "0.005em"
            },
            h4: {
                size: "22px",
                weight: 600,
                lineHeight: "24px",
                letterSpacing: "0.005em"
            },
            h5: {
                size: "18px",
                weight: 600,
                lineHeight: "24px",
                letterSpacing: "0.005em"
            },
            h6: {
                size: "16px",
                weight: 600,
                lineHeight: "16px",
                letterSpacing: "0em"
            },
            body: {
                size: "16px",
                weight: 400,
                lineHeight: "24px",
                letterSpacing: "0em"
            },
            caption: {
                size: "14px",
                weight: 400,
                lineHeight: "16px",
                letterSpacing: "0em"
            }
        }
    },
    grid: {
        columns: 12,
        gutterWidth: "32px",
        breakpoints: {
            xs: "0px",
            sm: "576px",
            md: "768px",
            lg: "992px",
            xl: "1200px",
            xxl: "1456px"
        },
        containerMaxWidths: {
            sm: "544px",
            md: "720px",
            lg: "960px",
            xl: "1144px"
        }
    },
    spacing: {
        default: "32px",
        defaultX: "16px",
        defaultY: "16px"
    }
};
export default theme;
