import { Button, ButtonProps } from "@mui/material";
import React from "react";

interface ButtonManualProps {
  name: string;
}

const TextButton: React.FC<ButtonManualProps & ButtonProps> = ({
  name,
  ...props
}) => {
  return (
    <Button
      variant="text"
      sx={{ color: "#218c74", mt: 1, textTransform: "none" }}
      {...props}
    >
      {name}
    </Button>
  );
};

export default TextButton;
