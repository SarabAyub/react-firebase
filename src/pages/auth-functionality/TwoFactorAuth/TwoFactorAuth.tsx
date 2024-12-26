import { CustomTextField, CommonButton } from '@muc/components';
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { COLORS } from '@muc/constant';
import { ButtonWrapper, Heading, StyledContainer } from '../login/Login.styles';

interface TwoFactorAuthProps { }

const TwoFactorAuth: React.FC<TwoFactorAuthProps> = (): React.ReactElement => {
    const methods = useForm();

    const onSubmit = (data: any) => {
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
                            fontFamily='Inter , sans-serif'
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
}

export default TwoFactorAuth;