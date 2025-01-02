import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { PhoneNumberUtil } from "google-libphonenumber";
import { useState } from "react";

import { COLORS } from "@muc/constant";
import { InputAdornment, Typography } from "@mui/material";
import { Info } from "@mui/icons-material";

type CountryPhoneInputProps = {
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  readOnly?: boolean;
  error?: string;
};

const phoneUtil = PhoneNumberUtil.getInstance();

const isPhoneValid = (phone: string) => {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
  } catch (error) {
    return false;
  }
};

const CountryPhoneInput = ({
  value,
  onChange,
  onBlur,
  error,
  readOnly = false,
}: CountryPhoneInputProps) => {
  const [isValid, setIsValid] = useState(true);

  const handleChange = (phone: string) => {
    setIsValid(isPhoneValid(phone));
    onChange(phone);
  };

  const [isTouch, setIsTouch] = useState(false);

  return (
    <>
      <PhoneInput
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
        onFocus={() => setIsTouch(true)}
        defaultCountry="us"
        placeholder="Enter Phone Number"
        inputProps={{
          readOnly: readOnly,
        }}
        inputStyle={{
          width: "100%",
          border: "none",
          borderRadius: "8px",
          fontSize: "14px",
          outline: "none",
          color: COLORS.primary.main,
        }}
        style={{
          border: `1px solid ${
            error ? COLORS.red.main : COLORS.primary.main
          }`,
          borderRadius: "8px",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          height: 52,
          padding: "0 12px",
        }}
        countrySelectorStyleProps={{
          buttonStyle: {
            border: "none",
            borderRadius: "8px",
            zIndex: 1000,
          },
        }}
      />
      {(error && error.length > 0) || (!isValid && isTouch) ? (
        <Typography
          variant="caption"
          component="span"
          sx={{
            display: "flex",
            alignItems: "center",
            color: COLORS.red.main,
            textTransform: "capitalize",
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
          {!isValid && isTouch ? "Invalid phone number" : error}
        </Typography>
      ) : null}
    </>
  );
};

export default CountryPhoneInput;
