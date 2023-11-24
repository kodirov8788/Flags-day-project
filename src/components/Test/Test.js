import axios from '../../api/api'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Test({ setRight, right, data, ans, setAns, setCount, count, setWrong, wrong }) {
    const navigate = useNavigate()
    const [option, setOption] = useState([])
    // console.log("ans: ", ans)

    const Count = async () => {

        await axios.post("/visitors/testcount")
            .then(res => console.log(res.data))
            .catch(error => console.log(error))
    }
    const FormFunction = (e) => {
        e.preventDefault()
        if (ans === "") {
            alert("joylarni to'ldiring")
        } else {
            console.log(ans == data.answer)
            if (ans != data.answer) {
                setWrong(wrong + 1)

            } else {
                setRight(right + 1)
            }
            setCount(count + 1)
        }
        setAns("")
    }
    useEffect(() => {
        if (wrong == 3) {
            Count()
            setTimeout(() => {
                navigate("/")
            }, 5000);
        }
        if (count > 9) {
            Count()
            setTimeout(() => {
                navigate("/")
            }, 5000);
        }

    }, [wrong, count])

    useEffect(() => {
        function generateDifferentPositions() {
            function shuffle(array) {
                for (let i = array?.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
                return array;
            }
            setOption(shuffle([data?.options][0]))
        }
        generateDifferentPositions();
    }, [data])
    9
    return (

        <div className=' w-[380px] mx-auto p-5 pt-[100px]'>
            {count > 9 || wrong > 2 ? <>{wrong > 2 ? <h1 className='text-white text-center text-2xl'>Afsus, siz yutqazdingiz, qayta harakat qilib ko'ring</h1> : <h1 className='text-white text-center text-2xl'>Siz g'olib bo'ldingiz, Tabriklayman</h1>}</> : <form onSubmit={FormFunction} className="card">
                <img className='w-full rounded-lg mx-auto' src={data?.flag} alt="" />
                <div className="flex mt-10">
                    {option?.map((el, inx) => (
                        <button key={inx} onClick={e => setAns(el)}
                            className=" w-full m-auto block border focus:outline-none hover:bg-gray-100 font-medium rounded-lg text-lg  py-2.5 bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700 ">{el}</button>
                    ))}


                </div>

            </form>
            }

        </div>
    )
}

export default Test