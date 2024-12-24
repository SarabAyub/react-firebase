import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { COLORS } from "@muc/constant";

type CountryPhoneInputProps = {
  value: string;
  onChange: (value: string) => void;
};

const CountryPhoneInput = ({ value, onChange }: CountryPhoneInputProps) => (
  <PhoneInput
    value={value}
    onChange={onChange}
    defaultCountry="us"
    placeholder="Enter Phone Number"
    inputStyle={{
      width: "100%",
      border: "none",
      borderRadius: "8px",
      fontSize: "14px",
      outline: "none",
      color: COLORS.primary.darkCyanBlue,
    }}
    style={{
      border: `1px solid ${COLORS.primary.main}`,
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
);

export default CountryPhoneInput;
