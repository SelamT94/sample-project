
import oip from '../image/oip.jpg';
import AddButton from '../components/addbutton';

function Home() {
  return (

<div classNameName='container '> 
   <header className=' text-white font-semibold'>
     <div className="justify-center p-1 top-0 z-50 w-full sticky flex-col border-double border-b-4 border-green-900 backdrop-blur">
      <div className=" items-center flex">
        <div className="text-xl">
          <span className="text-yellow-500">0</span>
          <span className="text-xs">ETB</span>
        </div>
        <span className="mx-auto text-xl font-bold font-mono text-white">KK Green</span>
      </div>
      <div className="flex items-center leading-none">
        <span className="bg-green-700 text-xs font-mono px-1">
          0  Item</span>
      </div>
     </div>
    </header>

    <main className=' text-white'>
      <div className="flex justify-around gap-12 flex-wrap p-8">
        <div className="flex flex-col items-center gap-1">
             <span className="bg-green-700 text-black self-end font-sans font-extrabold leading-3 px-2 py-1 rounded-xl text-xs invisible">0</span>
             <img className="border-2 border-white rounded-md" src={oip} alt="item_icon" width="50"/>
             <span className="font-sans">soya</span>
          <div className="font-bold">
              <span className="text-yellow-500">25</span>
              <span className="text-xs">ETB</span>
          </div>
         <AddButton />
        </div>


       <button className="bg-blue-500 p-2 sticky bottom-0">Continue</button>
      </div>
    </main>

</div>
  );
}



export default Home;