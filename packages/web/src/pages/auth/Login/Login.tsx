import * as React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { NavLink } from '../../shared-components';
import { Alert } from '../components/Alert';
import { Form } from '../components/Form';

const validationSchema = yup.object({
  email: yup.string().email('Enter a valid email').required('Email is required'),
  password: yup.string().min(8, 'Password should be of minimum 8 characters length').required('Password is required'),
});

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values, formikHelpers) => {
      formikHelpers.setSubmitting(false);

      try {
        const url = 'http://localhost:3005/authentication/log-in';
        await axios.post(url, values, { withCredentials: true });
        window.open('http://localhost:3000/');
      } catch (e) {
        console.log(e.response.data.message);
        // @ts-ignore
        formikHelpers.setErrors({ errorMsg: e.response.data.message });
      }

      // onSubmit(values).catch((e) => {
      //   formikHelpers.setSubmitting(false);
      //   if (isFormError(e)) {
      //     formikHelpers.setErrors(e.errors);
      //   } else {
      //     throw e;
      //   }
      // });
    },
  });

  return (
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
        <Form name="login" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
          <Box sx={{ marginBottom: 2 }}>
            {/* @ts-ignore */}
            {formik.errors && formik.errors?.errorMsg && <Alert color="error">{formik.errors.errorMsg}</Alert>}
          </Box>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
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
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} disabled={formik.isSubmitting}>
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <NavLink to="/forgot-password" variant="body2">
                Forgot password?
              </NavLink>
            </Grid>
            <Grid item>
              <NavLink to="/signup" variant="body2">
                Do not have an account? Sign Up
              </NavLink>
            </Grid>
          </Grid>
        </Form>
      </Box>
    </Container>
  );
}
