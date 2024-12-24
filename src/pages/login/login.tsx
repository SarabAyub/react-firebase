import { TextField, Button, Container, Typography } from '@mui/material';

import React from 'react';

export default function Login(): React.ReactElement {
    return (
        <Container maxWidth="sm">
            <Typography variant="h4" component="h1" gutterBottom>
                Login
            </Typography>
            <form noValidate autoComplete="off">
                <TextField
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    style={{ marginTop: '16px' }}
                >
                    Login
                </Button>
            </form>
        </Container>
    );
}