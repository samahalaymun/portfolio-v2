import { Typography } from '@mui/material';
import React from 'react'

const LinkButton = ({
  label,
  className,
  children,
  onClick,

}) => {
  return (
    <button onClick={onClick} className={className}>
      {label && <Typography sx={{ marginRight: "10px" }}>{label}</Typography>}{" "}
      {children}
    </button>
  );
};

export default LinkButton
