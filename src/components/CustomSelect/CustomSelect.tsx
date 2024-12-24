import React from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
  Box,
} from "@mui/material";
import styled from "@emotion/styled";
import { COLORS } from "@muc/constant";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  label: string;
  value: string | undefined;
  options: Option[];
  onChange: (event: SelectChangeEvent<string>) => void;
  borderColor?: string;
  iconColor?: string;
}

const StyledFormControl = styled(FormControl)<{ borderColor: string }>`
  width: 100%;
  .MuiOutlinedInput-root {
    & fieldset {
      border-color: ${(props) => props.borderColor || COLORS.primary.main};
    }
    &:hover fieldset {
      border-color: ${(props) => props.borderColor || COLORS.primary.main};
    }
    &.Mui-focused fieldset {
      border-color: ${(props) => props.borderColor || COLORS.primary.main};
    }
  }
  .MuiFormLabel-root {
    &.Mui-focused {
      color: ${COLORS.primary.darkCyanBlue};
    }
  }
`;

const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  value,
  options,
  onChange,
  borderColor = COLORS.primary.main,
  iconColor = COLORS.primary.main,
}) => {
  return (
    <StyledFormControl variant="outlined" borderColor={borderColor}>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        onChange={onChange}
        label={label}
        IconComponent={(props) => (
          <Box component="svg" {...props} viewBox="0 0 24 24" width="24px">
            <path
              d="M7 10l5 5 5-5"
              fill="none"
              stroke={iconColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Box>
        )}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </StyledFormControl>
  );
};

export default CustomSelect;
