// pages/_app.tsx
import { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/globalStyles';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
