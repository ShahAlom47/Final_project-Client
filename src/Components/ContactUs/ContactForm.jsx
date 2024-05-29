
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { IoIosSend } from "react-icons/io";


const ContactForm = () => {

    const [captcha, setCaptcha] = useState('')


    const handelForm = async (event) => {
        event.preventDefault();
       
    }



    return (
        <div className="bg-gray-200 p-16  w-10/12 mx-auto mb-20">

            <form onSubmit={handelForm} >

                <div className="flex w-full gap-4 ">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control  w-full">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input type="number" placeholder="Number" className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control  w-full">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="mail" className="input input-bordered" />
                </div>
                <div className="form-control  w-full">
                    <label className="label">
                        <span className="label-text">Message</span>
                    </label>
                    <textarea name="" id="" rows={10} className=" h-14input input-bordered w-full"></textarea>
                </div>
                <div className="mt-5">

                    <ReCAPTCHA
                        sitekey="6Lev298pAAAAAEYl5YB7djt50hd7OOUt0AwygApT"
                        onChange={(e) => setCaptcha(e)}
                    >
                    </ReCAPTCHA>
                </div>


                <div className="  btn btn-ghost border-none m-auto my-7  flex w-40  text-white bg-gradient-to-r from-[#c99c06] to-[#231e0b]  items-center gap-3 rounded-sm  ">
                    <input disabled={captcha ? false : true} type="submit" id="send" value="Send Message" />
                    <label htmlFor="send"><IoIosSend /></label>
                </div>



            </form>



        </div>
    );
};

export default ContactForm;

// 6Lev298pAAAAAEYl5YB7djt50hd7OOUt0AwygApT   site key
// 6Lev298pAAAAAJD8SVMkGXMbj6yBrP5-yXgiFNDK  secret key 