import { CustomTextField, CommonButton } from '@muc/components';
import React from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { COLORS } from '@muc/constant';
import { ROUTES } from '@muc/routes';
import { ButtonWrapper, FlexSpaceBetweenRow, Heading, StyledButton, StyledContainer } from '../login/Login.styles';
import { useNavigate } from 'react-router-dom';

interface TwoFactorAuthPinProps { }

interface FormData {
    code: string;
}

const TwoFactorAuthPin: React.FC<TwoFactorAuthPinProps> = (): React.ReactElement => {
    const navigate = useNavigate();
    const methods = useForm<FormData>();


    const onSubmit: SubmitHandler<FormData> = (data) => {
        if (data.code === '123456') {
            navigate(ROUTES.AUTH.TERMS_CONDITIONS);
        } else {
            alert('Invalid code');
        }
        console.log(data);
    };

    return (
        <StyledContainer>
            <Heading variant="h2" gutterBottom>
                2FA
            </Heading>
            <Heading variant="body1" gutterBottom>
                Code is sent to +1 *** *** 1234
            </Heading>
            <FormProvider {...methods}>
                <form noValidate autoComplete="off" onSubmit={methods.handleSubmit(onSubmit)}>
                    <CustomTextField
                        name="code"
                        label="Enter Code"
                        type="text"
                        placeHolder="000-000"
                        width="100%"
                        rules={{ required: 'Code is required' }}
                    />
                    <FlexSpaceBetweenRow>
                        <StyledButton
                            fontWeight={400}
                            customColor={COLORS.primary.main}
                            onClick={() => navigate('/2fa-phone')}>
                            Resend Code
                        </StyledButton>
                        <StyledButton fontWeight={400} onClick={() => navigate(ROUTES.AUTH.TWO_FACTOR_AUTH_PHONE)}>
                            Try a different number
                        </StyledButton>
                    </FlexSpaceBetweenRow>
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
}

export default TwoFactorAuthPin;