"use client";
import {
  Box,
  Button,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import CustomTextField from "@/app/components/textbox/CustomTextField";
import ContainedButton from "@/app/components/button/ContainedButton";
import TextButton from "@/app/components/button/TextButton";

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignUp() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  });

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleMouseDownPassword = (event: React.MouseEvent) => {
    event.preventDefault();
  };


  const onSubmit = (data: FormData) => {
    console.log("Data", data)
  }
  
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      height={"100vh"}
    >
      <Box>
        <Box textAlign={"center"} mb={2}>
          <Typography variant="h4" fontWeight={"bold"}>
            Create an account
          </Typography>
          <Typography mt={2}>
            Please fill in your information to create an account.
          </Typography>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CustomTextField<FormData>
            control={control}
            name="username"
            hiddenLabel
            variant="outlined"
            size="small"
            fullWidth
            type="text"
            rules={{ required: 'Username is required' }}
          />
          <CustomTextField
            control={control}
            name="email"
            hiddenLabel
            variant="outlined"
            size="small"
            fullWidth
            type="email"
            rules={{ required: 'Email is required' }}
          />
          <CustomTextField
            control={control}
            name="password"
            hiddenLabel
            variant="outlined"
            size="small"
            fullWidth
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            rules={{ required: 'Password is required' }}
          />
          <CustomTextField
            control={control}
            name="confirmPassword"
            hiddenLabel
            variant="outlined"
            size="small"
            fullWidth
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            rules={{ required: 'Confirm password is required' }}
          />
          <Box mt={4}>
            <ContainedButton 
              name="Create"
              type="submit"
              fullWidth
            />
            <TextButton
              name="Back"
              fullWidth
              onClick={() => window.history.go(-1)}
            />
          </Box>
        </form>
      </Box>
    </Box>
  );
}
