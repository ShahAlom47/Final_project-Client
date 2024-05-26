import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe('pk_test_51PKiBjL0G1CCoDyDqmFNbtZ2xirq6kQGJNIeLWUtxqtLDWHXcCePls2KhxUB70IizVU7RlzrylIiesFuke0I1mwh00YdN38b1Y');

const PaymentPage = () => {
const {total} =useParams()

  


    return (
        <div>
            <div>
                <h1 className="text-2xl text-center  my-5">PAYMENT</h1>
            </div>
            <div>
                <Elements stripe={stripePromise} >
                    <CheckOutForm total={total} />
                </Elements>
            </div>






        </div>
    );
};

export default PaymentPage;