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
  bgColor?: string; 
}

const CommonButton: React.FC<ButtonProps> = (properties) => {
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
    bgColor
  } = properties || {};
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
          border: `1px solid ${bgColor ? bgColor : COLORS.blue.main}`,
          borderRadius: borderRadius ? borderRadius : "8px",
          bgcolor:
            variant === "outlined" ? COLORS.white.main : bgColor ? bgColor : COLORS.blue.main,
          "&:hover": {
            bgcolor:
              variant === "outlined" ? "transparent" : 'none',
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
