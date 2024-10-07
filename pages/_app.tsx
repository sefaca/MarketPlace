// pages/_app.tsx
import { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/globalStyles';
import 'bootstrap/dist/css/bootstrap.min.css';
import { OrderProvider } from '@/context/OrderContext';
import { CartProvider } from '@/context/CartContext';
import { AuthProvider } from '@/context/AuthContext';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <CartProvider>
        <OrderProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </OrderProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default MyApp;
