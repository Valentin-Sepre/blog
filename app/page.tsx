import Navbar from "./components/navbar";
import Link from 'next/link'


export default function Start() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center">
      <div className="container mx-auto px-4 py-12 grid grid-cols-2 gap-8">
        <div className="col-span-2 md:col-span-1 flex items-center justify-center text-white p-8 rounded-lg shadow-lg h-full">
          <div className="text-center">
            <h2 className="text-6xl md:text-8xl text-yellow-500 font-bold">TOGETHER</h2>
            <p className="mt-4 text-2xl md:text-3xl">Donnez de la force autour de vous !</p>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 flex flex-col items-center justify-center text-white p-8 rounded-lg shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold">Inscrivez-vous</h2>
            <p className="mt-7 text-lg">Rejoignez notre communauté dès aujourd'hui.</p>
            <Link href="inscription">
              <button className="mt-7 bg-yellow-500 text-gray-900 rounded-full px-6 py-3 hover:bg-yellow-700 transition duration-300 ease-in-out">
                Créer un compte
              </button>
            </Link>
          </div>
          <hr className="w-1/2 border-yellow-500 my-8" />
          <div className="text-center">
            <p className="text-lg ">Vous avez déjà un compte ?</p>
            <Link href="connexion">
              <button className="mt-7 bg-transparent border-2 border-yellow-500 text-yellow-500 rounded-full px-6 py-3 hover:bg-yellow-500 hover:text-black transition duration-300 ease-in-out">
                Se connecter
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
