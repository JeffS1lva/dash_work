import { PiSuitcase } from "react-icons/pi";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { GrNotes } from "react-icons/gr";
import { CiBarcode } from "react-icons/ci";
import { IoLogInOutline, IoSearchOutline } from "react-icons/io5";
import Users from "./assets/users.jpeg";

export function App() {
  return (
    <div className="flex">
      <section className="bg-blue-950 p-2 h-screen w-[25rem] ">
        <h1 className="flex gap-2 p-6 text-3xl text-white">
          <FaHandHoldingMedical /> Polar Fix
        </h1>
        <div className="flex flex-col mt-12 text-lg gap-5 text-zinc-300 font-semibold">
          <div className="hover:bg-zinc-700 hover:rounded-md p-3 pl-6 hover:text-amber-500">
            <a href="#" className="flex items-center gap-2 text-xl">
              <PiSuitcase size={23} /> Pedidos
            </a>
          </div>

          <div className="hover:bg-zinc-700 hover:rounded-md p-3 pl-6 hover:text-amber-500 ">
            <a href="#" className="flex items-center gap-2 text-xl">
              {" "}
              <GrNotes />
              Notas Fiscais
            </a>
          </div>

          <div className="hover:bg-zinc-700 hover:rounded-md p-3 pl-6 hover:text-amber-500">
            <a href="#" className="flex items-center gap-2 text-xl">
              {" "}
              <CiBarcode size={25} />
              Boletos
            </a>
          </div>
        </div>
        <footer className="fixed bottom-0 left-0 pl-4 pb-3">
          <a
            href=""
            className="flex gap-2 text-white text-xl items-center hover:bg-zinc-700 p-2 pr-56  hover:rounded-md hover:text-amber-500"
          >
            <IoLogInOutline size={25} /> Sair
          </a>
        </footer>
      </section>
      <div className="border-1 border-slate-700"></div>
      <section className=" w-full">
        <div className="p-6 pl-20 bg-blue-950 flex justify-between items-center">
          <div>
            <IoSearchOutline
              className="fixed top-10 left-[26.5rem] "
              size={20}
              color="#4F4F4F"
            />
            <input
              className="border-0 p-1 pl-9 pr-18 bg-slate-300 rounded-sm outline-0 text-lg"
              type="text"
              placeholder="Buscar.."
            />
          </div>
          <div className="flex items-center gap-4 mr-10">
            
            <img src={Users} className="w-12 h-12 rounded-4xl" />
            <div className="flex flex-col">
              <label htmlFor="" className="text-white font-semibold">Jefferson Silva </label>
              <p className="text-zinc-400 mb-1">user@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
