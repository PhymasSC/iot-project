// pages/_app.js
// 1. Import `createTheme`
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// 2. Call `createTheme` and pass your custom values
const lightTheme = createTheme({
	type: "light",
});

const darkTheme = createTheme({
	type: "dark",
});

// 3. Pass the new `theme`` to the `NextUIProvider`
function MyApp({ Component, pageProps }) {
	return (
		<NextThemesProvider
			defaultTheme="system"
			attribute="class"
			value={{
				light: lightTheme.className,
				dark: darkTheme.className,
			}}
		>
			<NextUIProvider>
				<Component {...pageProps} />
			</NextUIProvider>
		</NextThemesProvider>
	);
}

export default MyApp;
