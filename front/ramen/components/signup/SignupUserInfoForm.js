/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";

export default function SignupUserInfoForm({
  infoName,
  infoId,
  handleFunction,
  value,
  type,
  icon,
}) {
  return (
    <>
      <FormControl variant="standard">
        <InputLabel htmlFor={infoId}>{infoName}</InputLabel>
        <Input
          type={type}
          id={infoId}
          value={value}
          onChange={handleFunction}
          startAdornment={
            <InputAdornment position="start">{icon}</InputAdornment>
          }
        />
      </FormControl>
    </>
  );
}
