import React, { useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, TextField, Typography } from "@mui/material";
import { CommonButton } from "@muc/components";
import { COLORS } from "@muc/constant";
import { Info } from "@mui/icons-material";
import { otpSchema } from "@muc/validations";
import { AuthService } from "@muc/firebase";
import { useAuthContext, useSuccessErrorNotification } from "@muc/context";

type OTPFormValues = {
  otp1: string;
  otp2: string;
  otp3: string;
  otp4: string;
  otp5: string;
  otp6: string;
};
type TFAProps = {
  onNext: () => void;
  title: string;
  subTitle: string;
  btnTitle: string;
  isSingup?: boolean;
};

const TFAuthentication: React.FC<TFAProps> = ({
  onNext,
  btnTitle,
  isSingup,
  subTitle,
  title,
}) => {
  const {
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm<OTPFormValues>({
    resolver: yupResolver(otpSchema),
    defaultValues: {
      otp1: "",
      otp2: "",
      otp3: "",
      otp4: "",
      otp5: "",
      otp6: "",
    },
  });
  const [loading, setLoading] = React.useState(false);
  const [loadingResend, setLoadingResend] = React.useState(false);
  const { setAlert } = useSuccessErrorNotification();
  const { user } = useAuthContext();

  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  const onSubmit = async (data: OTPFormValues) => {
    try {
      setLoading(true);
      const otpCode = Object.values(data).join("");
      await AuthService.verifyOtp({
        phoneNumber: "+12819374192",
        otp: otpCode,
      });
      setAlert({
        show: true,
        message: "Otp verified successfully",
        variant: "success",
      });
      onNext();
    } catch (error) {
      setAlert({
        show: true,
        message: "Failed to verify OTP",
        variant: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const resendOtp = async () => {
    try {
      setLoadingResend(true);

      const email = user?.email;
      const phone = user?.phone;
      // hard coded phone number for now
      await AuthService.sendOtp({ phoneNumber: "+12819374192" });
      setAlert({
        show: true,
        message: "Otp sent successfully",
        variant: "success",
      });
    } catch (error) {
      setAlert({
        show: true,
        message: "Failed to send OTP",
        variant: "error",
      });
    } finally {
      setLoadingResend(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "40px",
      }}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"5px"}
        width={{ md: 420, sm: 420 }}
      >
        <Typography variant="h2">{title}</Typography>
        {isSingup && (
          <Typography variant="body2">
            Already have an account?{" "}
            <Typography
              component={"span"}
              sx={{
                fontWeight: 600,
                fontSize: "14px",
                lineHeight: "18px",
                color: COLORS.primary.darkCyanBlue,
                cursor: "pointer",
              }}
            >
              Login
            </Typography>
          </Typography>
        )}
        <Typography variant="body1" textAlign={"center"}>
          {subTitle}
        </Typography>
      </Box>

      <Box
        display={"flex"}
        gap={"8px"}
        flexDirection={"column"}
        width={{ md: 400 }}
      >
        <Box
          display={"flex"}
          gap={"10px"}
          justifyContent="center"
          width={"100%"}
        >
          {["otp1", "otp2", "otp3", "otp4", "otp5", "otp6"].map(
            (otp, index) => (
              <Box key={index} height={56} width={58}>
                <Controller
                  name={otp as keyof OTPFormValues}
                  control={control}
                  render={({ field, fieldState }) => (
                    <TextField
                      fullWidth
                      {...field}
                      autoFocus={index === 0}
                      variant="outlined"
                      inputProps={{
                        maxLength: 1,
                        style: {
                          textAlign: "center",
                          fontSize: "24px",
                          height: "100%",
                          borderRadius: "8px",
                        },
                        inputMode: "numeric",
                        pattern: "[0-9]*",
                        ref: (ref: any) => {
                          otpRefs.current[index] = ref;
                        },
                      }}
                      error={!!fieldState.error}
                      helperText={""}
                      onChange={(e) => {
                        field.onChange(e);
                        const value = e.target.value;
                        if (
                          value.length === 1 &&
                          index < otpRefs.current.length - 1
                        ) {
                          otpRefs.current[index + 1]?.focus();
                        }
                      }}
                      onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                        if (
                          e.key === "Backspace" &&
                          !e.currentTarget.value &&
                          index > 0
                        ) {
                          otpRefs.current[index - 1]?.focus();
                        }
                      }}
                      sx={fieldStyle}
                    />
                  )}
                />
              </Box>
            )
          )}
        </Box>
        {Object.keys(errors).length > 0 && (
          <Typography
            variant="body2"
            sx={{
              color: COLORS.red.stateColorRed,
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Info
              sx={{
                color: COLORS.red.stateColorRed,
                rotate: "180deg",
                width: 16,
              }}
            />
            Invalid code
          </Typography>
        )}
      </Box>

      <CommonButton
        title={btnTitle}
        type="submit"
        width="400px"
        variant="contained"
        isLoading={loading}
        disabled={loadingResend}
      />
      <CommonButton
        title="Resend Code"
        type="button"
        width="400px"
        variant="outlined"
        onClick={resendOtp}
        isLoading={loadingResend}
      />
    </Box>
  );
};

export default TFAuthentication;

const fieldStyle = {
  "& .MuiOutlinedInput-root": {
    background: COLORS.white.main,
    fontWeight: 600,
    "& fieldset": {
      border: `1px solid ${COLORS.gray.mediumLightGray}`,
    },
    "& input": {
      color: COLORS.primary.main,
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: `2px solid ${COLORS.primary.main}`,
    },
    "&.Mui-focused fieldset": {
      border: `2px solid ${COLORS.primary.main}`,
    },
    "& input::placeholder": {
      color: COLORS.gray.mediumGrey,
      opacity: 0.9,
    },
    "& input:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px transparent inset",
      WebkitTextFillColor: COLORS.primary.main,
      transition: "background-color 5000s ease-in-out 0s",
    },
    "& input:-webkit-autofill:focus": {
      WebkitBoxShadow: "0 0 0 100px transparent inset",
      WebkitTextFillColor: COLORS.primary.main,
      borderColor: COLORS.primary.main,
    },
    "& input:hover": {
      borderColor: COLORS.primary.main,
    },
    "& input:focus": {
      borderColor: COLORS.primary.main,
    },
  },
};
