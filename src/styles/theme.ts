import { COLORS } from "@muc/constant";
import { createTheme } from "@mui/material";

export let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    h1: {
      fontWeight: 700,
      fontSize: "32px",
      lineHeight: "40px",
      color: COLORS.blue.navyBlue,
    },
    h2: {
      fontWeight: 600,
      fontSize: "24px",
      lineHeight: "30px",
      letterSpacing: "0.0015em",
      textAlign: "left",
      color: COLORS.primary.main,
    },
    h3: {
      fontWeight: 700,
      fontSize: "20px",
      lineHeight: "28px",
      letterSpacing: "0.0015em",
      color: COLORS.primary.main,
    },
    h4: {
      fontWeight: 600,
      fontSize: "18px",
      lineHeight: "21px",
      color: COLORS.primary.main,
    },
    h5: {
      fontWeight: 700,
      fontSize: "16px",
      lineHeight: "20px",
      color: COLORS.primary.main,
    },
    h6: {
      fontWeight: 500,
      fontSize: "16px",
      color: COLORS.primary.main,
    },
    body1: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "20px",
      color: COLORS.primary.main,
    },
    body2: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "18px",
      color: COLORS.primary.main,
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "23px",
      color: COLORS.primary.main,
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "14px",
      color: COLORS.secondary.main,
    },
    caption: {
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: "16px",
      color: COLORS.gray.lightGray,
    },
  },
});

theme = {
  ...theme,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "16px",
          fontWeight: 500,
          borderRadius: "8px",
          padding: "8px 12px ",
          textTransform: "none",
          height: "52px",
          [theme.breakpoints.down("sm")]: {
            fontSize: "14px",
            height: "35px",
            width: "auto",
          },
        },

        contained: {
          backgroundColor: COLORS.blue.main,
          color: COLORS.white.main,
          boxShadow: "none",
          "&:hover": {
            backgroundColor: COLORS.blue.navyBlue,
            boxShadow: "none",
          },
          "&.Mui-disabled": {
            backgroundColor: `#D3D7E6`,
            color: COLORS.white.main,
          },
          outlined: {
            color: COLORS.blue.main,
            boxShadow: "none",
            "&:hover": {
              borderColor: COLORS.blue.navyBlue,
              boxShadow: "none",
            },
          },
        },
      },
      defaultProps: {
        disableRipple: false,
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          border: "none",
          width: 72,
          position: "relative",
          margin: "10px 10px 0px 10px",
          overflowY: "auto",
          overflowX: "hidden",

          "::-webkit-scrollbar": {
            width: "0px",
          },
          "::-webkit-scrollbar-track": {
            margin: "10px 0px",
            borderRadius: "34px",
            backgroundColor: COLORS.primary.main,
          },
          "::-webkit-scrollbar-thumb": {
            borderRadius: "34px",
            backgroundColor: COLORS.primary.main,
          },
          "& .MuiListItem-root": {
            "& .MuiListItemButton-root": {
              width: 56,
              height: 56,
              display: "flex",
              borderRadius: 14,
              margin: "10px 0px",
              justifyContent: "center",
              "&:hover": {
                background: COLORS.white.main,
              },
            },
            "& .MuiListItemButton-root.Mui-selected": {
              width: 56,
              height: 56,
              display: "flex",
              borderRadius: 14,
              margin: "10px 0px",
              justifyContent: "center",
              background: COLORS.white.main,
            },
          },
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          // padding: 0,
          borderRadius: 8,
          background: COLORS.white.main,
          color: COLORS.primary.main,
          "& fieldset": {
            border: `1px solid ${COLORS.gray.borderGray}`,
            padding: "12px 16px",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: `1px solid ${COLORS.gray.borderGray}`,
          },
          "&.Mui-focused fieldset": {
            border: `1px solid ${COLORS.gray.borderGray}`,
          },

          "& input::placeholder": {
            color: COLORS.secondary.main,
            opacity: 0.4,
          },
          "& input:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px transparent inset",
            color: COLORS.primary.main,
            transition: "background-color 5000s ease-in-out 0s",
          },
          "& input:-webkit-autofill:focus": {
            WebkitBoxShadow: "0 0 0 100px transparent inset",
            color: COLORS.primary.main,
            borderColor: COLORS.gray.borderGray,
          },
          "& input:hover": {
            borderColor: COLORS.primary.main,
          },
          "& input:focus": {
            borderColor: COLORS.primary.main,
          },
        },
      },
    },
  },
};
