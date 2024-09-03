import React from 'react';
import Navbar from '../components/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/footer';

// Exemple de données de posts (à remplacer par des données réelles récupérées depuis une API ou une base de données)
const posts = [
  {
    id: 1,
    author: 'Jean Dupont',
    content: 'Aujourd\'hui a été une journée incroyable ! Nous avons eu un événement fantastique.',
    createdAt: '2024-07-20T14:48:00.000Z',
  },
  {
    id: 2,
    author: 'Marie Curie',
    content: 'J\'ai découvert un nouveau café en ville, il est super !',
    createdAt: '2024-07-19T09:30:00.000Z',
  },
  {
    id: 3,
    author: 'Pierre Martin',
    content: 'L\'exposition d\'art moderne que j\'ai visitée était très inspirante.',
    createdAt: '2024-07-18T16:00:00.000Z',
  },
  // Ajoutez plus de posts ici
];

const Accueil = () => {
  return (
    <div className=" min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">

        <section className=" text-white py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl text-yellow-500 font-bold text-center mb-8">Dernières merdes</h2>
            <div className="space-y-8">
              {posts.map(post => (
                <div key={post.id} className="border border-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 font-bold">{post.author}</div>
                    <span className="ml-2 text-gray-400 text-sm">{new Date(post.createdAt).toLocaleDateString()}</span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    {post.content}
                  </p>
                  <div className="flex items-center ">
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="text-red-500 w-6 cursor-pointer hover:text-red-300 transition duration-300 ease-in-out"
                      title="J'aime"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Footer/>
      </main>
    </div>
  );
};

export default Accueil;
