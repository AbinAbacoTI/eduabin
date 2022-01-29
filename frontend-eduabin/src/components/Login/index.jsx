import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return(
    <div className="border border-2 w-96 h-96 p-5">
        <div className="flex flex-col items-center">
            <div className="w-64 h-32 mb-5 flex justify-center">
              <Image src={'https://edu.abin.world/wp-content/uploads/2019/06/LOGOS-PARA-PNG_Mesa-de-trabajo-1.png'}
                width={250}
                height={60}
              />
            </div>
            <div className="w-64 p-3">
              <div>
                <input type="email"
                  className="bg-gray-200 appearance-none h-10 w-full px-4 border border-2 border-gray-200 focus:outline-none focus:bg-white focus:border-orange-500"
                  placeholder="Email"/>
              </div>
              <div>
                <input type="password"
                className="bg-gray-200 appearance-none h-10 w-full px-4 my-2 border border-2 border-gray-200 focus:outline-none focus:bg-white focus:border-orange-500"
                placeholder="Password"/>
              </div>
            </div>
            <div className="w-64">
                <button
                className="bg-orange-400 hover:bg-orange-500 text-white w-full h-9 font-semibold">
                  Log In
                </button>
            </div>
            <div className="">
                <span className="text-black">
                  ¿No tienes cuenta?
                  </span>
                <Link href={''}>
                  <a className="text-orange-500 hover:text-orange-400 font-semibold ml-1">
                    Registrate
                  </a>
                </Link>
            </div>
        </div>
    </div>
  )
}