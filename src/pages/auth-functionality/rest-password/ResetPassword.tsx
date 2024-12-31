import { CustomTextField, CommonButton } from '@muc/components';
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { COLORS } from '@muc/constant';
import { StyledContainer, Heading, ButtonWrapper } from '../login/Login.styles';
import { useNavigate } from 'react-router-dom';

interface ResetPasswordProps { }

const ResetPassword: React.FC<ResetPasswordProps> = (): React.ReactElement => {
    const methods = useForm();
    const navigate = useNavigate();

    const onSubmit = (data: any) => {
        navigate('/login');
        console.log(data);
    };

    return (
            <StyledContainer>
                <Heading variant="h2" gutterBottom>
                    Reset Password
                </Heading>
                <Heading variant="body1" gutterBottom>
                    Lorem ipsum dolor sit amet consectetur.
                </Heading>
                <FormProvider {...methods}>
                    <form noValidate autoComplete="off" onSubmit={methods.handleSubmit(onSubmit)}>
                        <CustomTextField
                            name="password"
                            label="Password"
                            type="password"
                            placeHolder="Enter Password..."
                            width="100%"
                            rules={{ required: 'Password is required' }}
                            fontFamily='Inter , sans-serif'
                        />
                        <CustomTextField
                            name="re-enter-password"
                            label="Re-enter Password"
                            type="password"
                            placeHolder="Re-enter Password..."
                            width="100%"
                            rules={{ required: 'Required' }}
                            fontFamily='Inter , sans-serif'
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

export default ResetPassword;