import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useLazyQuery, useQuery } from '@apollo/client';
import { LOGIN } from '../../graphql/apis';
import { useCallback } from 'react';
import { useMemo } from 'react';
import Copyright from '../../components/Copyright';
import useAlert from '../../hooks/ui/alert';
import { useRouter } from 'next/router'
import { setLoginUser, useGetLoginUser } from '../../hooks/scripts/useSessionUser';

const theme = createTheme();

export default function SignIn({ loginUser }) {

    const router = useRouter();

    if (typeof window !== 'undefined' && loginUser._id !== undefined) {
        localStorage.setItem(`loginUser`, JSON.stringify(loginUser));
        router.push('/');
    }

    if (typeof window !== 'undefined' && loginUser._id === undefined) {
        localStorage.removeItem('loginUser');
    }

    // login
    const [doLoginQuery, { loading: logining }] = useLazyQuery(LOGIN);

    // error
    const [loginError, setLoginError] = useState('');
    const THEME_COLOR = useMemo(() => loginError ? 'error' : 'primary', [loginError])
    const Alert = useAlert(loginError);

    const handleSubmit = useCallback((event) => {

        event.preventDefault();
        const form = new FormData(event.currentTarget);

        async function login() {
            if (logining)
                return;
            const { error, data } = await doLoginQuery({
                variables: {
                    email: form.get('email'),
                    password: form.get('password')
                }
            });
            if (error)
                setLoginError(error.message);
            else {
                setLoginError('');
                console.log("success", data.user);
                router.reload();
            }
        }
        login()
    }, [doLoginQuery, logining]);

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            color={THEME_COLOR}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            color={THEME_COLOR}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            color={THEME_COLOR}
                        >
                            Sign In
                        </Button>
                        {Alert}
                        <Grid container justifyContent="center">
                            <Grid item>
                                <Link href="/signup" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}


export async function getServerSideProps(context) {

    let loginUser = {};
    try {
        loginUser = await fetch('http://localhost:3000/verify', {
            headers: {
                cookie: context.req.headers.cookie
            }
        }).then(res => res.json());
    } catch (error) {}

    console.log(loginUser);

    return {
        props: { loginUser }, // will be passed to the page component as props
    }
}