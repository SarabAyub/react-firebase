import { Box, Button, Container, Typography } from '@mui/material';
import { CustomTextField, CommonButton } from '@muc/components';
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { COLORS } from '@muc/constant';

interface LoginProps { }

const Login: React.FC<LoginProps> = (): React.ReactElement => {
    const methods = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <Box
            style={{
            backgroundColor: COLORS.blue.main,
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
            }}
        >
            <Container
            maxWidth="xs"
            style={{
                backgroundColor: COLORS.white.main,
                padding: '20px',
                borderRadius: '10px'
            }}
            >
            <Typography variant="h4" component="h1" gutterBottom>
                Login
            </Typography>
            <FormProvider {...methods}>
                <form noValidate autoComplete="off" onSubmit={methods.handleSubmit(onSubmit)}>
                <CustomTextField
                    name="email"
                    label="Email"
                    type="text"
                    placeHolder="Enter your email"
                    width="100%"
                    rules={{ required: 'Email is required' }}
                />
                <CustomTextField
                    name="password"
                    label="Password"
                    type="password"
                    placeHolder="Enter your password"
                    width="100%"
                    rules={{ required: 'Password is required' }}
                />
                <Typography variant="body2" style={{ textAlign: 'right', marginTop: '8px' }}>
                    Forgot password?
                </Typography>
                {/* <Box style={{ marginTop: '16px', backgroundColor: COLORS.blue.navyBlue }}> */}
                    <CommonButton
                        type="submit"
                        variant="contained"
                        title="Login"
                        width="100%"
                        bgColor={COLORS.blue.navyBlue}
                    />
                {/* </Box> */}
                </form>
            </FormProvider>
            </Container>
        </Box>
    );
}

export default Login;