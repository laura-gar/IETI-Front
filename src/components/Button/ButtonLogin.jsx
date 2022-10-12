import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#00c2a8"),
  margin: 20,
  padding: 10,
  fontFamily: "Trebuchet MS",
  fontSize: 15,
  backgroundColor: "#00c2a8",
  "&:hover": {
    backgroundColor: "#008b74",
  },
}));

export default ColorButton;
