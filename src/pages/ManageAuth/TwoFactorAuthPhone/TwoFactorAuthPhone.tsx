import React from "react";
import {
  useForm,
  FormProvider,
  SubmitHandler,
  Controller,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CustomCountryInput, CommonButton } from "@muc/components";
import { COLORS } from "@muc/constant";
import { ROUTES } from "@muc/routes";
import { ButtonWrapper, Heading, StyledContainer } from "../login/Login.styles";
import { useNavigate } from "react-router-dom";

interface TwoFactorAuthPhoneProps {}

interface FormData {
  phone: string;
}

const schema = yup.object().shape({
  phone: yup.string().required("Phone number is required"),
});

const TwoFactorAuthPhone: React.FC<
  TwoFactorAuthPhoneProps
> = (): React.ReactElement => {
  const methods = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormData> = (_data) => {
    navigate(ROUTES.AUTH.TWO_FACTOR_AUTH_PIN);
  };

  return (
    <StyledContainer>
      <Heading variant="h2" gutterBottom>
        2FA
      </Heading>
      <Heading variant="body1" gutterBottom>
        To set up 2FA for your account, please enter your phone number
      </Heading>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Controller
            name="phone"
            control={methods.control}
            render={({ field, formState: { errors } }) => (
              <CustomCountryInput {...field} error={errors.phone?.message} />
            )}
          />
          <ButtonWrapper>
            <CommonButton
              type="submit"
              variant="contained"
              title="Submit"
              width="100%"
              bgColor={COLORS.blue.navyBlue}
            />
          </ButtonWrapper>
        </form>
      </FormProvider>
    </StyledContainer>
  );
};

export default TwoFactorAuthPhone;
