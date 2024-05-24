import SectionHeading from "../../SharedComponent/SectionHeading";
import { useForm } from "react-hook-form"
import useAxiosPublic from '../../../CustomHocks/useAxiosPublic'
import useAxios from "../../../CustomHocks/useAxios";


const imgHostingKey = import.meta.env.VITE_IMG_KEY
const imgHostingApi = `https://api.imgbb.com/1/upload?key=${imgHostingKey}`

const AddItem = () => {
    const axiosPublic=useAxiosPublic()
    const axiosSecure=useAxios()
    const {
        register,
        handleSubmit,
       
    } = useForm()

    const onSubmit = async (data) => {
        const imageFile ={image: data.image[0]}

     const res=await  axiosPublic.post(imgHostingApi,imageFile,{
            headers: { 'Content-Type': 'multipart/form-data'},
                withCredentials: false 
        })
     console.log(res.data.data.display_url)
     if(res.data.success){

        const menuItems={
            name:data.name,
            recipe:data.recipe,
            image:res.data.data.display_url,
            category:data.category,
            price: parseFloat(data.price),
        }


        const menuAdd= await axiosSecure.post('/addMenu',menuItems)
        if(menuAdd.data.insertedId){
            alert('item added successfully')
        }


     }

    }
    return (
        <div>

            <SectionHeading h1={'ADD ITEM'} p={'---What`s New---'}></SectionHeading>
            <div>


                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* <input {...register("exampleRequired", { required: true })} />
                    {errors.exampleRequired && <span>This field is required</span>} */}


                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold">Item Name</span>
                        </div>
                        <input  {...register("name", { required: true })} type="text" placeholder="Name" className="input input-bordered w-full " />
                    </label>

                    <div className="flex gap-4">

                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text font-semibold">Category</span>
                            </div>
                            <option defaultValue={'Who shot first?'}></option>
                            <select  {...register("category", { required: true })} className="select select-bordered w-full" >
                                <option disabled value={'Who shot first?'}></option>
                                <option>Salad</option>
                                <option>pizza</option>
                                <option>drinks</option>
                                <option>dessert</option>
                                <option>soup</option>
                                <option>offered</option>
                                <option>popular</option>
                                <option></option>
                            </select>
                        </label>

                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text font-semibold">Price</span>
                            </div>
                            <input  {...register("price", { required: true })} type="text" placeholder="Type here" className="input input-bordered w-full " />
                        </label>


                    </div>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text font-semibold">Item Details</span>
                        </div>
                        <textarea  {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Details"></textarea>
                    </label>
                    <input  {...register("image", { required: true })} type="file" className="file-input my-4" /> <br />

                    <input className=" my-5 btn btn-md bg-[#ab882f]" type="submit" />
                </form>

            </div>
        </div>
    );
};

export default AddItem;