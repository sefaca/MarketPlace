// pages/_app.tsx
import { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/globalStyles';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from '../context/CartContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
