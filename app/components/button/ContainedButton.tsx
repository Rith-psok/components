import { Button, ButtonProps } from "@mui/material";
import React from "react";

interface ButtonManualProps {
  name: string;
}

const CustomButton: React.FC<ButtonManualProps & ButtonProps> = ({
  name,
  ...props
}) => {
  return (
    <Button
      variant="contained"
      sx={{
        boxShadow: "none",
        bgcolor: "#218c74",
        textTransform: "none",
      }}
      {...props}
    >
      {name}
    </Button>
  );
};

export default CustomButton;
