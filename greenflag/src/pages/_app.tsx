// src/pages/_app.tsx
import type { AppProps } from "next/app";
import RootLayout from "../components/Layout"; // Ensure this path is correct

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;
