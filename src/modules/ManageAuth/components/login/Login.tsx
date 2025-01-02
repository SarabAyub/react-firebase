import { CustomTextField, CommonButton } from '@muc/components';
import React from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { COLORS } from '@muc/constant';
import { ROUTES } from '@muc/routes';
import { StyledContainer, Heading, StyledButton, FlexEndRow } from './Login.styles';
import { useNavigate } from 'react-router-dom';

interface LoginProps {}

interface FormData {
    email: string;
    password: string;
}

const Login: React.FC<LoginProps> = (): React.ReactElement => {
    const methods = useForm<FormData>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        if (data.email === 'admin@parkking.com' && data.password === '12345678') {
            navigate(ROUTES.AUTH.TWO_FACTOR_AUTH_PHONE);
        } else {
            alert('Invalid email or password');
        }
    };

    return (
        <StyledContainer>
            <Heading variant="h2" gutterBottom>
                Login
            </Heading>
            <FormProvider {...methods}>
                <form noValidate onSubmit={methods.handleSubmit(onSubmit)}>
                    <CustomTextField
                        name="email"
                        label="Email"
                        type="text"
                        placeHolder="Enter Email..."
                        width="100%"
                        rules={{ required: 'Email is required' }}
                    />
                    <CustomTextField
                        name="password"
                        label="Password"
                        type="password"
                        placeHolder="Enter Password..."
                        width="100%"
                        rules={{ required: 'Password is required' }}
                    />
                    <FlexEndRow>
                        <StyledButton onClick={() => navigate(ROUTES.AUTH.FORGOT_PASSWORD)}>
                            Forgot password?
                        </StyledButton>
                    </FlexEndRow>
                    <CommonButton
                        type="submit"
                        variant="contained"
                        title="Login"
                        width="100%"
                        bgColor={COLORS.blue.navyBlue}
                    />
                </form>
            </FormProvider>
        </StyledContainer>
    );
};

export default Login;