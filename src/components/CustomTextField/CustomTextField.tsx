import React, { useState } from "react";
import {
  Box,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import { Controller, RegisterOptions, useFormContext } from "react-hook-form";
import { COLORS } from "@muc/constant";
import { Info, Visibility, VisibilityOff } from "@mui/icons-material";

interface CustomTextFieldProps {
  name: string;
  label: string;
  rules?: RegisterOptions;
  type: string;
  placeHolder: string;
  width: string;
  defaultValue?: string;
  fontFamily?: string;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  name,
  label,
  rules,
  type,
  placeHolder,
  width,
  defaultValue,
  fontFamily,
  ...props
}) => {
  const { control } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((prev: any) => !prev);

  return (
    <Box width={{ md: width, sm: width, xs: "auto" }} mt={2}>
      <InputLabel
      sx={{
        fontWeight: 500,
        fontSize: "16px",
        color: COLORS.primary.main,
        lineHeight: "20px",
        pb: 2,
        display: "flex",
        alignItems: "center",
        gap: "20px",
        fontFamily: fontFamily? fontFamily : '',
      }}
      >
      {label}
      </InputLabel>
      <Controller
      name={name}
      defaultValue={defaultValue}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <TextField
        variant="outlined"
        {...field}
        placeholder={placeHolder}
        {...props}
        defaultValue={defaultValue || ""}
        fullWidth
        error={!!fieldState.error}
        helperText={
          fieldState.error?.message ? (
          <span
            style={{
            display: "flex",
            alignItems: "center",
            color: COLORS.red.main,
            fontSize: "12px",
            fontWeight: 500,
            marginLeft: -14,
            }}
          >
            <InputAdornment position="start">
            <Info
              sx={{
              color: COLORS.red.main,
              rotate: "180deg",
              width: 16,
              }}
            />
            </InputAdornment>
            {fieldState.error.message.charAt(0).toUpperCase() +
            fieldState.error.message.slice(1)}
          </span>
          ) : (
          ""
          )
        }
        type={showPassword ? "text" : type}
        slotProps={{
          input: {
          endAdornment: type === "password" && (
            <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? (
              <VisibilityOff
                sx={{
                color: COLORS.primary.main,
                }}
              />
              ) : (
              <Visibility
                sx={{
                color: COLORS.primary.main,
                }}
              />
              )}
            </IconButton>
            </InputAdornment>
          ),
          },
        }}
        />
      )}
      />
    </Box>
  );
};
export default CustomTextField;
