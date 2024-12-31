import { CustomTextField, CommonButton } from '@muc/components';
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { COLORS } from '@muc/constant';
import { ROUTES } from '@muc/routes';
import { StyledContainer, Heading, ButtonWrapper } from '../login/Login.styles';
import { useNavigate } from 'react-router-dom';

interface ForgotPasswordProps { }

const ForgotPassword: React.FC<ForgotPasswordProps> = (): React.ReactElement => {
    const methods = useForm();
    const navigate = useNavigate();

    const onSubmit = (data: any) => {
        navigate(ROUTES.AUTH.RESET_PASSWORD);
        console.log(data);
    };

    return (
            <StyledContainer>
                <Heading variant="h2" gutterBottom>
                    Forgot Password
                </Heading>
                <Heading variant="body1" gutterBottom>
                    Enter Email assocciated with your account
                </Heading>
                <FormProvider {...methods}>
                    <form noValidate autoComplete="off" onSubmit={methods.handleSubmit(onSubmit)}>
                        <CustomTextField
                            name="email"
                            label="Email"
                            type="Email"
                            placeHolder="Enter Email..."
                            width="100%"
                            rules={{ required: 'Email is required' }}
                        />
                        <CustomTextField
                            name="re-enter-email"
                            label="Re-enter Email"
                            type="email"
                            placeHolder="Re-enter Email..."
                            width="100%"
                            rules={{ required: 'Required' }}
                        />
                        <ButtonWrapper>
                            <CommonButton
                                type="submit"
                                variant="contained"
                                title="Reset"
                                width="100%"
                                bgColor={COLORS.blue.navyBlue}
                            />
                        </ButtonWrapper>
                    </form>
                </FormProvider>
            </StyledContainer>
    );
}

export default ForgotPassword;