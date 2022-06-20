import { createTheme, Theme } from "@mui/material/styles";
import { green } from "@mui/material/colors";

const theme: Theme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: green.A700,
		},
		secondary: {
			main: "#ff6666",
		},
	},
});

export default theme;
