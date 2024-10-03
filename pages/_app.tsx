// pages/_app.tsx
import { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/globalStyles';
import 'bootstrap/dist/css/bootstrap.min.css';
import { OrderProvider } from '@/context/OrderContext';
import { CartProvider } from '@/context/CartContext';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <OrderProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </OrderProvider>
    </CartProvider>
  );
}

export default MyApp;
