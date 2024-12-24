import { COLORS } from "@muc/constant";
import { Box, Button, CircularProgress } from "@mui/material";
import React from "react";

interface ButtonProps {
  title: string;
  type?: "button" | "submit" | "reset";
  width?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  variant: "contained" | "outlined";
  height?: string;
  borderRadius?: string;
  isLoading?: boolean;
}

const CommonButton: React.FC<ButtonProps> = (props) => {
  const {
    title,
    type,
    width,
    onClick,
    disabled,
    variant,
    height,
    borderRadius,
    isLoading = false,
  } = props || {};
  return (
    <Box>
      <Button
        type={type ? type : "button"}
        variant={variant}
        onClick={onClick}
        disabled={disabled}
        sx={{
          display: "flex",
          right: 0,
          boxShadow: "none",
          width: {
            md: width ? width : "auto",
            sm: width ? width : "auto",
          },
          height: {
            md: height ? height : "auto",
            sm: height ? height : "auto",
          },
          color:
            variant === "outlined" ? COLORS.primary.main : COLORS.white.main,
          textTransform: "none",
          border: `1px solid ${COLORS.primary.main}`,
          borderRadius: borderRadius ? borderRadius : "8px",
          "&:hover": {
            bgcolor:
              variant === "outlined" ? "transparent" : COLORS.primary.main,
            boxShadow: "none",
          },
        }}
      >
        {isLoading ? (
          <CircularProgress
            sx={{
              color:
                variant === "outlined"
                  ? COLORS.primary.main
                  : COLORS.white.main,
            }}
            size={25}
          />
        ) : (
          <>{title}</>
        )}
      </Button>
    </Box>
  );
};

export default CommonButton;
