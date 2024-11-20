import { useState } from "react";
import {
  Box,
  Typography,
  FormHelperText,
  useTheme,
  InputAdornment,
  Select,
  SelectChangeEvent,
  MenuItem,
} from "@mui/material";
import { ArrowDownIcon } from "@/assets/icons";
import type { RefObject } from "react";
import type { SxProps } from "@mui/material";
import type { WithSx } from "@/types";

interface DropdownProps extends WithSx {
  name: string;
  label?: string;
  error?: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  dropdownRef?: RefObject<HTMLInputElement>;
  required?: boolean;
  value: string;
  options: string[];
  sx?: SxProps;
}

export const Dropdown: React.FC<DropdownProps> = ({
  name,
  label,
  error,
  placeholder,
  required = false,
  value,
  onChange,
  onBlur,
  dropdownRef,
  options = [],
  sx = {},
  ...props
}) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [_focused, setFocused] = useState(false);

  const handleFocus = () => setFocused(true);
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false);
    if (onBlur) onBlur(event);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
      }}
    >
      {label && (
        <Box sx={{ display: "flex", mb: 0.5 }}>
          <Typography
            variant="subtitle2"
            sx={{ color: theme.palette.common.white }}
          >
            {label}
          </Typography>
          {required && (
            <Typography
              variant="subtitle2"
              sx={{
                color: theme.palette.error.main,
              }}
            >
              *{" "}
            </Typography>
          )}
        </Box>
      )}
      <Select
        name={name}
        value={value}
        error={!!error}
        inputRef={dropdownRef}
        onChange={onChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        placeholder={placeholder}
        displayEmpty
        fullWidth
        endAdornment={
          <InputAdornment
            position="end"
            sx={{ right: "20px", position: "absolute" }}
          >
            <ArrowDownIcon
              sx={{
                height: "20px",
                transform: open ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease-in-out",
              }}
            />
          </InputAdornment>
        }
        MenuProps={{
          PaperProps: {
            sx: {
              maxHeight: "200px",
              mt: 0.25,
              boxShadow: "4px 4px 24px 0px rgba(42, 43, 47, 0.1216)",
              borderRadius: "8px",
            },
          },
        }}
        sx={{
          color: theme.palette.custom.blue,
          borderColor: error
            ? theme.palette.error.main
            : theme.palette.common.black,
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: error
              ? theme.palette.error.main
              : theme.palette.primary.main,
            boxShadow: "0px 4px 10px 0px rgba(3, 9, 80, .15)",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: `1px solid ${theme.palette.primary.main}`,
            boxShadow: "none",
          },
          ...sx,
        }}
        {...props}
      >
        <MenuItem sx={{ display: "none" }} value="">
          <Typography
            sx={{
              color: "rgba(255, 255, 255, 0.3)",
            }}
          >
            {placeholder}
          </Typography>
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>

      {error && (
        <FormHelperText component={Box}>
          <Typography
            variant="subtitle2"
            sx={{
              color: theme.palette.error.main,
              fontWeight: theme.typography.fontWeightRegular,
              mt: 0.5,
            }}
          >
            {error}
          </Typography>
        </FormHelperText>
      )}
    </Box>
  );
};
