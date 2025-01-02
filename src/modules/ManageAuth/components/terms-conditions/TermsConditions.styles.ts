import styled from '@emotion/styled';
import { COLORS } from '@muc/constant';
import { Box, Button, Container, Typography } from '@mui/material';

export const StyledContainer = styled(Container)`
    background-color: ${COLORS.white.main};
    padding: 20px;
    border-radius: 10px;
    position: relative;
    z-index: 1;
    width: 500px;
    margin: 0 auto;
`;

export const Heading = styled(Typography)`
    font-family: 'Inter', sans-serif;
    text-align: center;

`;

export const FlexRow = styled(Box)`
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 100%;
    margin-top: 20px;
`;