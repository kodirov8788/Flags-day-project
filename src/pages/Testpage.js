// import { fake_data } from '../Static_data';
import { useEffect, useState } from 'react';
import Test from '../components/Test';
import { Link, useParams } from 'react-router-dom';
import axios from '../api/api';

function Testpage() {
    const paramId = useParams().id
    const [count, setCount] = useState(0)
    const [wrong, setWrong] = useState(0)
    const [right, setRight] = useState(0)
    const [ans, setAns] = useState("")
    const [realData, setRealData] = useState([])
    const [products, setProducts] = useState([])



    useEffect(() => {
        const getData = async () => {
            try {
                await axios.get("product/getall").then(res => {
                    let data = res.data.filter(el => el.productCategory === paramId)
                    setProducts(data)
                }).catch(error => console.log(error))
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [])

    useEffect(() => {
        function generateDifferentPositions() {
            function shuffle(array) {
                for (let i = array?.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
                return array.slice(0, 10);
            }
            setRealData(shuffle(products))
        }
        generateDifferentPositions();
    }, [products])

    let data = realData[count]
    return (
        <div className="uzflag bg-center bg-cover w-full h-screen">
            <div className="absolute bg-black/40 w-full h-full top-0 left-0 "></div>
            <div className="absolute z-10 w-full h-full">

                <Link to={-1} className='flex w-fit p-4 m-2 border focus:outline-none font-medium rounded-lg text-lg  py-2 bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700 items-center'>
                    <svg className="w-6 h-6 text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                    </svg><p>ortga qaytish</p></Link>
                <Test setRight={setRight} right={right} wrong={wrong} setWrong={setWrong} data={data} ans={ans} setAns={setAns} setCount={setCount} count={count} />
                <div className='flex justify-between text-center w-[350px] mx-auto text-2xl text-white '>
                    <h1>To'gri : <b className='text-green-500'>{right}</b> </h1>
                    <h1>Noto'gri : <b className='text-red-500'>{wrong}</b> </h1>
                </div>
            </div>

        </div >
    );
}

export default Testpage;