import styled from '@emotion/styled';
import { COLORS } from '@muc/constant';
import { Box, Button, Container, Typography } from '@mui/material';

export const StyledContainer = styled(Container)`
    background-color: ${COLORS.white.main};
    padding: 20px;
    border-radius: 10px;
    position: relative;
    z-index: 1;
    width: 400px;
    margin: 0 auto;
`;

export const Heading = styled(Typography)`
    font-family: 'Inter', sans-serif;
`;

export const FlexEndRow = styled(Box)`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`;

export const StyledButton = styled(Button)`
    text-align: right;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: ${COLORS.blue.navyBlue}; 
    padding: 0;
`;

export const ButtonWrapper = styled(Box)`
    margin-top: 20px;
`;