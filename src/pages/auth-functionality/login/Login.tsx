import { CustomTextField, CommonButton } from '@muc/components';
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { COLORS } from '@muc/constant';
import { StyledContainer, Heading, StyledButton, FlexEndRow } from './Login.styles'
import { useNavigate } from 'react-router-dom';

interface LoginProps { }

const Login: React.FC<LoginProps> = (): React.ReactElement => {
    const methods = useForm();
    const navigate = useNavigate();

    const onSubmit = (data: any) => {
        console.log(data);
        navigate('/2fa');
    };

    return (
            <StyledContainer >
                <Heading variant="h2" gutterBottom>
                    Login
                </Heading>
                <FormProvider {...methods}>
                    <form noValidate autoComplete="off" onSubmit={methods.handleSubmit(onSubmit)}>
                        <CustomTextField
                            name="email"
                            label="Email"
                            type="text"
                            placeHolder="Enter Email..."
                            width="100%"
                            rules={{ required: 'Email is required' }}
                            fontFamily='Inter , sans-serif'
                        />
                        <CustomTextField
                            name="password"
                            label="Password"
                            type="password"
                            placeHolder="Enter Password..."
                            width="100%"
                            rules={{ required: 'Password is required' }}
                            fontFamily='Inter , sans-serif'
                        />
                        <FlexEndRow>
                            <StyledButton onClick={() => navigate('/reset-password')}>
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
}

export default Login;