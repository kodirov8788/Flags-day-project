import { toast } from 'react-toastify'
import axios from '../../api/api'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useAuthContext } from '../../hooks/useAuthContext'

function Createproduct() {
    const { setIsLoading, sensor, setSensor } = useContext(AuthContext)
    const [productName, setProductName] = useState("")

    const [imageLink, setImageLink] = useState("")
    const { user } = useAuthContext()
    const addproduct = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        await axios.post(`/product/create`, { productName, imageLink }, {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
            .then(res => {
                toast.success(res.data, {
                    position: toast.POSITION.TOP_RIGHT
                });
                setIsLoading(false)
            })
            .catch((error) => {
                toast.error(error.response.data, {
                    position: toast.POSITION.TOP_RIGHT
                });
                setIsLoading(false)
            })
    }
    return (
        <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-16">
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                        <h1 className="text-2xl text-gray-800 dark:text-gray-200">
                            Saytga tashriflar soni: <span className='text-green-700 ml-2 mr-1 dark:text-green-400'>Hello</span>ta
                        </h1>
                    </div>
                    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                        <h1 className="text-2xl text-gray-800 dark:text-gray-200">
                            Testni ishlaganlar soni:<span className='text-green-700 dark:text-green-400 ml-2 mr-1'>Hello</span>ta
                        </h1>
                    </div>
                    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                        <h1 className="text-2xl text-gray-800 dark:text-gray-200">
                            Salom
                        </h1>
                    </div>
                    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                        <h1 className="text-2xl text-gray-800 dark:text-gray-200">
                            Salom
                        </h1>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Createproduct