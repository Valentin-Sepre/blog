"use client";

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Connexion = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Redirection en cas de succès
        router.push('/accueil'); 
      } else {
        const data = await response.json();
        setErrorMessage(data.message || 'An error occurred during login.');
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
      setErrorMessage('An error occurred during login. Please try again.');
    }
  };

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
            <h2 className="text-4xl font-bold text-yellow-500">Connexion</h2>
            <form onSubmit={handleSubmit} className="mt-6">
              <div className="mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Adresse email"
                  className="w-full px-4 py-3 rounded-lg bg-black border border-white text-white outline-none"
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Mot de passe"
                  className="w-full px-4 py-3 rounded-lg bg-black border border-white text-white outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="mt-3 w-full bg-yellow-500 text-gray-900 rounded-full px-6 py-3 hover:bg-yellow-700 transition duration-300 ease-in-out"
              >
                Se connecter
              </button>
              {errorMessage && <div className="mt-4 text-red-500">{errorMessage}</div>}
              <div className='mt-5'>
                <Link href="/">
                  <div className='text-gray-200 hover:text-yellow-500'>Retour à la page principale</div>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Connexion;
