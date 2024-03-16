import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/Payment/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51JwnGrLiLwVG3jO00U7B3YmokwdPnB6FKd1uresJgkbsL4f5xUfCmbFdBaGO42KvLmLfVzsgo1oIQToXABSTyypS00xQsEgKZ6"
);
const Payment = () => {
  return (
    <div className="container my-8 text-center">
      <h2 className="text-3xl">Payment</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Payment;
