import { useContext, useEffect, useState } from "react";
import axios from "../api/api";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
// import FlagImage from "../backgroundImages/uz-flag.jpg"

function StartTest() {
    const [getCategories, setGetCategories] = useState([])
    // console.log(getCategories)
    const { setIsLoading, sensor, setSensor } = useContext(AuthContext)
    const getApi = async () => {
        await axios.post("/visitors/addmaincount")
            .then(res => console.log(res.data))
            .catch(error => console.log(error))
    }
    window.addEventListener("load", (event) => {
        getApi()
    });
    useEffect(() => {
        const getData = async () => {
            try {
                await axios.get("category/getall").then(res => {
                    setGetCategories(res.data)
                    console.log(res.data)
                }).catch(error => console.log(error))
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [sensor])

    return (
        <div className="flags bg-fixed top-0 w-full h-screen bg-center bg-cover relative">
            <div className="absolute bg-black/40 w-full h-full top-0 left-0 "></div>

            <div className="text-white z-100 absolute w-full h-full">
                <Link to={-1} className='flex w-fit p-4 m-2 focus:outline-none font-medium rounded-lg text-lg  py-2 bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700 items-center'>
                    <svg className="w-6 h-6 text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                    </svg><p>ortga qaytish</p></Link>


                <div className="w-[350px] h-[700px] mx-auto overflow-y-auto mt-[30px]  rounded-sm">
                    <div className="w-full  mx-auto  text-center text-2xl font-bold overflow-y-auto leading-10  bg-transparent">

                        {getCategories.map(category => (<>
                            <div class="max-w-sm h-[350px] overflow-hidden rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-5">
                                <Link to={`/tests/${category?._id}`} >
                                    <img class="rounded-lg h-[200px] w-full object-cover" src={category?.images[0].url} alt="" />
                                </Link>
                                <div class="py-5 flex flex-col items-center justify-between bg-black/60 h-[150px]">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white ">{category.categoryName}</h5>

                                    <Link to={`/tests/${category?._id}`} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Testga o'tish
                                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </>

                        ))}
                        <div className="max-w-sm h-[200px] overflow-hidden rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-5"></div>


                    </div>
                </div>


            </div>


        </div >
    );
}

export default StartTest;
