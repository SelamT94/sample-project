import oip from '../image/oip.jpg';
import {Browserrouter,Link,router} from 'react-router-dom';

function Checkout() {
    return (
    <div className='container' >
        <header>
            <div className="justify-center p-1 top-0 z-50 w-full sticky flex-col border-double border-b-4 border-green-900 backdrop-blur">
                <div className=" items-center flex">
{/* the addition parts from here */}
                    <div className="font-bold">
                        <span className="text-yellow-500">70.7</span>
                        <span className="text-xs">ETB</span>
                    </div>
{/* to here */}
<span className="mx-auto text-xl font-bold font-mono text-white"> Cafe</span>
                  {/* <Link className="text-green-500 font-bold font-mono" to ='./home.js'>EDIT</Link> */}
                </div>
{/* the addition part from here */}
              <div className="flex items-center leading-none">
                    <span className="bg-green-900 text-xs font-mono px-1">2 Items 70ETB</span>
                    <span className="">+</span>
                    <span className="bg-yellow-500 text-black text-xs font-mono px-1">1% SERVICE FEE</span>
              </div>
{/* to here */}
            </div>
        </header>

        <main className='text-white'>
            {/* the row part from here */}
            <div className=" p-6 gap-6 flex flex-col" >
                <div className="flex gap-2 items-center">
                    <img className="border-2 border-white rounded-md" src={oip} alt="item-picture" width="50"/>
                    <span className="bg-green-500 text-black px-1 font-sans text-xs font-extrabold leading-none">2</span>
                    <span className="font-sans">Dinich</span>
                 <div className="font-bold ml-auto border-green-500 border-r-2 rounded pr-2">
                    <span className="text-yellow-500">35</span>
                    <span className="text-xs">ETB</span>
                 </div>
                </div>
            </div>
            {/* to here */}

            <div className="flex flex-col p-8 gap-4">
              <div className="flex flex-col">
                <textarea className="text-sm bg-black px-4 py-2" rows="2" type="text" placeholder="Add comment..."></textarea>
                <span className="text-xs pt-1 pl-4 text-gray-400">Any special requests, detail, dessage </span>
              </div>
              <div className=" flex items-center gap-2 flex-wrap ">
                <span className="text-sm font-semibold text-gray-900 dark:text-gray-300 font-bold font-serif">SMS</span>
                <label className="inline-flex relative items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" value="" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600">
                    </div>
                </label>
              </div>
            </div>
        </main>
    </div>                
            );
}

export default Checkout;