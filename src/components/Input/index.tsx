import { TextField } from "@mui/material";

interface InputProps {
  label: string;
  placeholder?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  variant?: "outlined" | "filled" | "standard";
  type?: "text" | "password" | "email";
  value: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  onChange,
  variant = "outlined",
  placeholder,
  type = "text",
  value,
}) => {
  return (
    <TextField
      label={label}
      onChange={onChange}
      variant={variant}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  );
};
