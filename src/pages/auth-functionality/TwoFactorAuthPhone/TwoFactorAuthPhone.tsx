import { CustomTextField, CommonButton } from '@muc/components';
import React from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { COLORS } from '@muc/constant';
import { ButtonWrapper, Heading, StyledContainer } from '../login/Login.styles';
import { useNavigate } from 'react-router-dom';

interface TwoFactorAuthPhoneProps { }

interface FormData {
    phone: string;
}

const TwoFactorAuthPhone: React.FC<TwoFactorAuthPhoneProps> = (): React.ReactElement => {
    const methods = useForm<FormData>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        if (data.phone === '+1234567891') {
            navigate('/2fa-pin');
        } else {
            alert('Invalid phone number');
        }
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
                <form noValidate autoComplete="off" onSubmit={methods.handleSubmit(onSubmit)}>
                    <CustomTextField
                        name="phone-number"
                        label="Phone number"
                        type="text"
                        placeHolder="+1 000 000 0000"
                        width="100%"
                        rules={{ required: 'Required' }}
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

export default TwoFactorAuthPhone;