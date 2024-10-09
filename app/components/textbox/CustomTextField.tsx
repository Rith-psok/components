import { Box, InputLabel, TextField, TextFieldProps } from "@mui/material";
import React from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface CustomTextFieldProps<T extends FieldValues> {
  control: Control<T, any>;
  name: Path<T>;
  rules?: any;
}

const CustomTextField = <T extends FieldValues>(props: CustomTextFieldProps<T> & TextFieldProps)=> {
    const {name, control, rules} = props
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <Box>
          <InputLabel sx={{ textAlign: "start", mt: 2 }}>{name.charAt(0).toUpperCase() + name.slice(1)}</InputLabel>
          <TextField
            {...field}
            {...props}
            error={!!fieldState.error}
            helperText={fieldState.error ? fieldState.error.message : ""}
          />
        </Box>
      )}
    />
  );
};

export default CustomTextField;
