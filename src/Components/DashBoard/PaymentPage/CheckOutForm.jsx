import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import useAxios from "../../../CustomHocks/useAxios";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useGetCard from "../../../CustomHocks/useGetCard";
import useAxiosPublic from "../../../CustomHocks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const CheckOutForm = ({ total }) => {
    const [data, refetch] = useGetCard();
    const stripe = useStripe();
    const elements = useElements();
    const [errMsg, setErrMsg] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const totalPrice = parseFloat(total);
    const axiosSecure = useAxios();
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.post("/create-payment-intent", { price: totalPrice })
            .then((res) => {

                setClientSecret(res.data.clientSecret)
            })
    }, [axiosSecure, totalPrice])


    const handelForm = async (e) => {
        setErrMsg('')
        setTransactionId('')
        e.preventDefault()
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setErrMsg(error.message)
            // console.log('[error]', error);
        } else {
            // console.log('[PaymentMethod]', paymentMethod);
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName,
                        email: user?.email,
                    }
                }
            }
        )
        if (confirmError) {
            // console.log(confirmError);
        }
        else {
            if (paymentIntent.status === 'succeeded') {
                setTransactionId(paymentIntent.id)

                const paymentData = {
                    email: user.email,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    cartId: data.map(res => res.cardId),
                    itemId: data.map(res => res._id),
                    status: 'pending',
                    price: totalPrice,

                }

                const response = await axiosPublic.post('/payment', paymentData)
                // console.log(response.data);
                if (response.data?.result?.insertedId) {
                    refetch()
                    alert('payment success')
                    navigate('/dashBoard/history')
                }
            }

        }


    }

    // console.log(data);
    return (
        <div>
            <form onSubmit={handelForm} className=" flex flex-col gap-3" >
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className="text-red-500">{errMsg}</div>
                {transactionId && <div className="text-green-500"> Your Transaction Id: {transactionId}</div>}
                <input disabled={!stripe || !clientSecret} className=" btn btn-primary m-auto btn-md w-6/12 " type="submit" value="PAY" />

            </form>
        </div>
    );
};

export default CheckOutForm;

CheckOutForm.propTypes = {
    total: PropTypes.string.isRequired
};