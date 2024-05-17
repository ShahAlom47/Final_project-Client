import PageHeader from "../SharedComponent/PageHeader/PageHeader";
import bg from '../../assets/contact/banner.jpg'
import SectionHeading from "../SharedComponent/SectionHeading";
import { FaPhoneAlt, FaRegClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import ContactForm from "./ContactForm";


const ContactUs = () => {
    return (
        <div>
            <PageHeader bg={bg} h1={'CONTACT US'} p={'WOULD YOU LIKE TO TRY A DISH'}></PageHeader>
            <div>
                <SectionHeading h1={"OUR LOCATION"} p={'---Visit Us---'} ></SectionHeading>
            </div>

            <div className="flex gap-5 w-10/12 mx-auto">
               

                <div className="w-full border mb-10 ">
                <div className="h-10 bg-[#d6a82a] flex justify-center items-center text-white"><FaPhoneAlt /></div>
                    <div className="  h-36 mx-6 mb-6 py-10 flex flex-col justify-center items-center bg-gray-200">
                        <h1 className="text-lg font-semibold">PHONE</h1>
                        <p className="">+971562596833</p>
                    </div>
                </div>
                <div className="w-full border mb-10 ">
                    <div className="h-10 bg-[#d6a82a] flex justify-center items-center text-white"><FaLocationDot /></div>
                    <div className="  h-36 mx-6 mb-6 py-10 flex flex-col  items-center bg-gray-200">
                        <h1 className="text-lg font-semibold">LOCATION</h1>
                        <p className="">SYLHET,BANGLADESH</p>
                    </div>
                </div>
                <div className="w-full  border mb-10 ">
                <div className="h-10 bg-[#d6a82a] flex justify-center items-center text-white"><FaRegClock /></div>
                    <div className=" h-36 mx-6 mb-6 py-10 flex flex-col justify-center items-center bg-gray-200">
                        <h1 className="text-lg font-semibold">WORKING HOURS</h1>
                        <p className="">Mon - Fri: 08:00 - 22:00</p>
                        <p className="">Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>
            </div>
            <div>
                <SectionHeading h1={"CONTACT FORM"} p={'---Send Us A Message---'} ></SectionHeading>
                <ContactForm></ContactForm>
            </div>

        </div>
    );
};

export default ContactUs;