import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../../CustomHocks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../../CustomHocks/useAxios";
import { useState } from "react";
import Loading from "../../../SharedComponent/Loading/Loading";

const imgHostingKey = import.meta.env.VITE_IMG_KEY
const imgHostingApi = `https://api.imgbb.com/1/upload?key=${imgHostingKey}`
const UpdateItem = () => {
    const { id } = useParams()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxios()
    const [imgUrl, setImgUrl] = useState(null)

    const { data, refetch, isLoading } = useQuery({
        queryKey: ['updateItem'], queryFn: async () => {
            const loadedData = await axiosPublic.get(`/menu/${id}`)
            setImgUrl(loadedData.data.image)
            return loadedData.data

        }
    })



    // const { name, recipe, image, price, category } = data;


    const {
        register,
        handleSubmit,
        reset,

    } = useForm()

   
    const onSubmit = async (data) => {


        if (data.image.length > 0) {
            const imageFile = { image: data.image[0] }
            const res = await axiosPublic.post(imgHostingApi, imageFile, {
                headers: { 'Content-Type': 'multipart/form-data' },
                withCredentials: false
            })
            setImgUrl(res.data.data.display_url)


        }
        const menuItems = {
            name: data.name,
            recipe: data.recipe,
            image: imgUrl,
            category: data.category,
            price: parseFloat(data.price),
        }

        axiosSecure.patch(`/menu/update/${id}`, menuItems)
            .then((res) => {
                if (res.data.modifiedCount > 0) {

                    alert('updated successfully ')
                    refetch()
                    reset()
                }
            })

    }

    return (
        <div>
            <div className="heading">
                <h1 className="text-3xl text-center my-6">UPDATE ITEM</h1>
            </div>

            {
                isLoading ? <Loading></Loading> : <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text font-semibold">Item Name</span>
                            </div>
                            <input defaultValue={data?.name}  {...register("name", { required: true })} type="text" placeholder="Name" className="input input-bordered w-full " />
                        </label>

                        <div className="flex gap-4">

                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text font-semibold">Category</span>
                                </div>

                                <select defaultValue={data?.category}  {...register("category", { required: true })} className="select select-bordered w-full" >
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
                                <input defaultValue={data?.price} {...register("price", { required: true })} type="text" placeholder="Type here" className="input input-bordered w-full " />
                            </label>


                        </div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text font-semibold">Item Details</span>
                            </div>
                            <textarea defaultValue={data?.recipe}  {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Details"></textarea>
                        </label>
                        <div className=" flex items-center ">
                            <input  {...register("image")} type="file" className="file-input my-4" />
                            <div className="w-16 h-16 mt-4 ml-10 rounded-sm">
                                <img src={imgUrl} alt="" />
                            </div>
                        </div> <br />

                        <input className=" my-5 btn btn-md bg-[#ab882f]" type="submit" />
                    </form>

                </div>
            }

        </div>
    );
};

export default UpdateItem;