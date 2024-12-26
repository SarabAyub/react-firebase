import styled from '@emotion/styled';
import { COLORS } from '@muc/constant';
import { Box } from '@mui/material';

export const AuthLayoutContainer = styled(Box)`
    background-color: ${COLORS.blue.main};
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const AuthLayoutLogo = styled(Box)`
    position: absolute;
    top: 20px;
    left: 20px;
`;

export const AuthLayoutCar = styled(Box)`
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0.8;
    z-index: 0;
`;