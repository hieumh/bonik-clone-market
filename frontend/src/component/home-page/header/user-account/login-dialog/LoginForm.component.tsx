import {
  Button,
  Card,
  Divider,
  TextField,
  Typography,
  Link,
  Stack,
  Box,
  CircularProgress,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { FC, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { loginRequest } from "./login.helper";
import { ILoginForm } from "./login.model";
import { LOGIN_KEY } from "@/constants/server-state.constant";
import {
  AUTHENTICATION_FAILED,
  ERROR_MESSAGES,
  emailRegex,
  phoneRegex,
} from "@/constants/common.constant";
import { COLORS } from "@/constants/ui.constant";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { THandler } from "@/model/common.model";
import { AxiosError } from "axios";

interface ILoginFormProp {
  closeDialog: THandler;
}

const LoginForm: FC<ILoginFormProp> = ({ closeDialog }) => {
  const [error, setError] = useState<string | null>(null);
  const { control, handleSubmit } = useForm<ILoginForm>({
    mode: "onSubmit",
  });
  const { isLoading, mutate } = useMutation({
    mutationFn: loginRequest,
    mutationKey: [LOGIN_KEY],
    onSuccess: () => {
      closeDialog();
    },
    onError: (_: AxiosError) => {
      setError(AUTHENTICATION_FAILED);
    },
  });

  const handleOnSubmit = (dataForm: ILoginForm) => {
    mutate(dataForm);
  };

  const validatePhoneOrEmail = (value: string) => {
    if (phoneRegex.test(value) || emailRegex.test(value)) {
      return true;
    }

    return ERROR_MESSAGES.valid;
  };

  return (
    <Card
      sx={{
        padding: "3rem 3.75rem 0 3.75rem",
        width: "23.75rem",
        position: "relative",
        overflow: "auto",
      }}
    >
      <Stack
        flexDirection="column"
        justifyContent="center"
        gap=".5rem"
        textAlign="center"
      >
        <Typography variant="h3">Welcome to Ecommerce</Typography>

        <Typography variant="body1">Log in with email & password</Typography>
      </Stack>

      <Stack flexDirection="column" mt="2.25rem" gap="1rem">
        <form
          onSubmit={handleSubmit(handleOnSubmit)}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Box>
            <Typography fontSize="0.875rem">Email</Typography>
            <Controller
              control={control}
              rules={{
                required: ERROR_MESSAGES.required,
                validate: validatePhoneOrEmail,
              }}
              name="email"
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  size="small"
                  placeholder="exmple@email.com"
                  type="email"
                  fullWidth
                  error={Boolean(error)}
                  helperText={error?.message}
                />
              )}
            />
          </Box>

          <Box>
            <Typography fontSize="0.875rem">Password</Typography>
            <Controller
              control={control}
              name="password"
              rules={{
                required: ERROR_MESSAGES.required,
              }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  type="password"
                  size="small"
                  fullWidth
                  placeholder="*********"
                  error={Boolean(error)}
                  helperText={error?.message}
                />
              )}
            />
          </Box>

          <Typography color={COLORS.error}>{error}</Typography>

          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: COLORS.primary,
              color: "white",
              textDecoration: "none",
            }}
            disabled={isLoading}
            endIcon={
              isLoading && (
                <CircularProgress size={20} sx={{ color: COLORS.textGrey }} />
              )
            }
          >
            Login
          </Button>
        </form>

        <Divider>on</Divider>

        <Button
          type="submit"
          sx={{
            backgroundColor: "#3b5998",
            color: "white",
            "&:hover": {
              backgroundColor: "#3b5998",
            },
          }}
          startIcon={<FacebookIcon />}
          variant="contained"
        >
          Continue with Facebook
        </Button>
        <Button
          type="submit"
          sx={{
            backgroundColor: "#4285f4",
            color: "white",
            "&:hover": {
              backgroundColor: "#4285f4",
            },
          }}
          startIcon={<GoogleIcon />}
          variant="contained"
        >
          Continue with Google
        </Button>

        <Stack
          flexDirection="row"
          gap=".25rem"
          alignItems="center"
          justifyContent="center"
        >
          <Typography>Don't have an account?</Typography>
          <Link href="/register">Sign Up</Link>
        </Stack>

        <Stack
          flexDirection="row"
          gap=".25rem"
          alignItems="center"
          justifyContent="center"
          sx={{
            backgroundColor: "#f3f5f9",
            mx: "-3.75rem",
            height: "1.25rem",
            py: "1.25rem",
          }}
        >
          <Typography variant="body1">Forgot your password?</Typography>
          <Link href="/register">Reset It</Link>
        </Stack>
      </Stack>
    </Card>
  );
};

export default LoginForm;
