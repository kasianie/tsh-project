import { createTheme } from '@mui/material';
import {
    colorBackground,
    colorBackgroundOverlay,
    colorDialogOverlay,
    colorGrey1,
    colorGrey2,
    colorGrey3,
    colorGrey4,
    colorGrey5,
    colorPrimaryDark,
    colorPrimaryMain,
    colorSecondaryMain,
    colorWhite
} from './designTokens';

declare module '@mui/material/styles/createPalette' {
    interface CommonColors {
        grey1: string;
        grey2: string;
        grey3: string;
        grey4: string;
        grey5: string;
    }

    interface TypeBackground {
        overlay: string;
    }
}

export const theme = createTheme({
    typography: {
        fontFamily: 'Nunito, sans-serif',
        h1: {
            fontSize: '24px',
            lineHeight: '40px',
            fontWeight: 600
        },
        h2: {
            fontSize: '18px',
            lineHeight: '16px',
            fontWeight: 600
        },
        button: {
            fontSize: '14px',
            lineHeight: '16px',
            fontWeight: 600,
            textTransform: 'capitalize'
        },
        body1: {
            fontSize: '18px',
            lineHeight: '24px',
            fontWeight: 600
        },
        body2: {
            fontSize: '14px',
            lineHeight: '16px',
            fontWeight: 600
        }
    },
    palette: {
        primary: {
            main: colorPrimaryMain,
            dark: colorPrimaryDark
        },
        secondary: {
            main: colorSecondaryMain
        },
        text: {
            primary: colorGrey5,
            secondary: colorGrey4
        },
        background: {
            default: colorBackground,
            overlay: colorBackgroundOverlay
        },
        common: {
            grey1: colorGrey1,
            grey2: colorGrey2,
            grey3: colorGrey3,
            grey4: colorGrey4,
            grey5: colorGrey5
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true
            },
            styleOverrides: {
                root: {
                    padding: '11px 24px',
                    boxShadow: 'none',
                    ':hover': {
                        boxShadow: 'none'
                    }
                },
                contained: {
                    ':disabled': {
                        background: colorGrey4,
                        color: colorWhite
                    }
                },
                outlined: {
                    ':disabled': {
                        color: colorGrey4,
                        borderColor: colorGrey4
                    }
                },
                text: {
                    ':disabled': {
                        color: colorGrey4
                    }
                }
            }
        },
        MuiRating: {
            styleOverrides: {
                icon: {
                    svg: {
                        width: '13px',
                        height: '13px',
                        marginRight: '8px'
                    }
                },
                root: {
                    color: colorSecondaryMain
                },
                iconEmpty: {
                    color: colorGrey4
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    fontWeight: 600,
                    fontSize: '14px',
                    lineHeight: '16px'
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    borderColor: colorGrey2
                },
                notchedOutline: {
                    borderColor: colorGrey2
                },
                input: {
                    padding: '14px 16px'
                }
            }
        },
        MuiInputAdornment: {
            styleOverrides: {
                root: {
                    color: colorGrey5,
                    svg: {
                        height: '18px',
                        width: '18px'
                    }
                }
            }
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    borderRadius: '8px'
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: '8px'
                }
            }
        },
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backgroundColor: colorDialogOverlay
                }
            }
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    path: {
                        fill: 'inherit'
                    }
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    svg: {
                        width: '14px',
                        height: '14px'
                    }
                }
            }
        }
    }
});
