import { fake_data } from '../Static_data';
import { useEffect, useState } from 'react';
import Test from '../components/Test/Test';

function County() {
    const [count, setCount] = useState(0)
    const [wrong, setWrong] = useState(0)
    const [right, setRight] = useState(0)
    const [ans, setAns] = useState("")
    const [realData, setRealData] = useState([])
    let data = realData[count]
    console.log(realData)
    useEffect(() => {
        function generateDifferentPositions() {
            function shuffle(array) {
                for (let i = array?.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
                return array.slice(0, 10);
            }
            setRealData(shuffle(fake_data))
        }
        generateDifferentPositions();
    }, [])


    return (
        <div className="uzflag bg-center bg-cover w-full h-screen">
            <div className="absolute bg-black/40 w-full h-full top-0 left-0 "></div>
            <div className="absolute z-10 w-full h-full">
                <Test setRight={setRight} right={right} wrong={wrong} setWrong={setWrong} data={data} ans={ans} setAns={setAns} setCount={setCount} count={count} />
                <div className='flex justify-between text-center w-[350px] mx-auto text-2xl text-white '>
                    <h1>To'gri : <b className='text-green-500'>{right}</b> </h1>
                    <h1>Noto'gri : <b className='text-red-500'>{wrong}</b> </h1>

                </div>
            </div>

        </div >
    );
}

export default County;
