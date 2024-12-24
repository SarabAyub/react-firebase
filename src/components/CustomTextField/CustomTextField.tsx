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
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  name,
  label,
  rules,
  type,
  placeHolder,
  width,
  defaultValue,
  ...props
}) => {
  const { control } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((prev: any) => !prev);

  return (
    <Box width={{ md: width, sm: width, xs: "auto" }}>
      <InputLabel
        sx={{
          fontWeight: 500,
          fontSize: "16px",
          color: COLORS.primary.darkCyanBlue,
          lineHeight: "20px",
          pb: 1,
          display: "flex",
          alignItems: "center",
          gap: "10px",
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
                    color: COLORS.red.stateColorRed,
                    fontSize: "12px",
                    fontWeight: 500,
                    marginLeft: -14,
                  }}
                >
                  <InputAdornment position="start">
                    <Info
                      sx={{
                        color: COLORS.red.stateColorRed,
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
            InputProps={{
              endAdornment: type === "password" && (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    (showPassword ? (
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
                    ))
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </Box>
  );
};
export default CustomTextField;
