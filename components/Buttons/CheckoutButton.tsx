// components/CheckoutButton.tsx
import { useCart } from '@/context/CartContext';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

const CheckoutButton = () => {
  const { cart } = useCart();

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    // Envía los productos del carrito a la API
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cartItems: cart, // Mandamos los items del carrito
      }),
    });

    const session = await res.json();

    // Redirige a Stripe Checkout
    const result = await stripe?.redirectToCheckout({
      sessionId: session.id,
    });

    if (result?.error) {
      console.error(result.error.message);
    }
  };

  return (
    <button onClick={handleCheckout} className="btn btn-primary">
      Pagar con Stripe
    </button>
  );
};

export default CheckoutButton;
