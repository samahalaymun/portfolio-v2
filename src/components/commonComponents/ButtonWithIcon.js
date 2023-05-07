import React from "react";
import { Button, Typography } from "@mui/material";

function ButtonWithIcon({
  label,
  variant,
  className,
  children,
  onClick,
  name,
  type
}) {
  return (
    <Button
      variant={variant}
      type={type}
      onClick={onClick}
      className={className}
      name={name}
    >
      {label&&<Typography sx={{marginRight:"10px"}}>{label}</Typography>} {children}
    </Button>
  );
}
export default ButtonWithIcon;
