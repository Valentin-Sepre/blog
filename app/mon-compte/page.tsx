"use client";
import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { FaUser, FaEdit, FaHeart, FaUserFriends, FaCamera } from 'react-icons/fa'; // Icônes pour la photo et les amis

const MonCompte = () => {
    const [profilePicture, setProfilePicture] = useState('https://via.placeholder.com/150'); // Image par défaut
    const [activeTab, setActiveTab] = useState('profile'); // Onglet actif par défaut

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            // Pour l'exemple, on utilise un URL object pour prévisualiser l'image
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePicture(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    // Exemple de données de l'utilisateur (à remplacer par des données réelles)
    const user = {
        name: 'Jean Dupont',
        email: 'jean.dupont@example.com',
        coverPicture: 'https://via.placeholder.com/1200x400', // Photo de couverture
        friends: ['Marie Curie', 'Pierre Martin'],
        likedPosts: ['Post Title 1', 'Post Title 2'],
    };

    return (
        <div className="min-h-screen flex flex-col bg-black text-white">
            <Navbar />
            <main className="flex-grow">
                {/* Section de couverture et photo de profil */}
                <div className="relative">
                    <img
                        src={user.coverPicture}
                        alt="Cover Picture"
                        className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                        <img
                            src={profilePicture}
                            alt="Profile Picture"
                            className="w-32 h-32 rounded-full border-2 border-yellow-500"
                        />
                        <button
                            className="absolute bottom-0 right-0 bg-yellow-500 text-gray-900 rounded-full p-2 hover:bg-yellow-600 transition duration-300 ease-in-out"
                            onClick={() => document.getElementById('fileInput')?.click()}
                        >
                            <FaCamera />
                        </button>
                        <input
                            id="fileInput"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleFileChange}
                        />
                    </div>
                </div>

                {/* Onglets */}
                <div className="container mx-auto px-4 py-12">
                    <div className="flex space-x-4 border-b border-gray-700 mb-8">
                        <button
                            className={`py-2 px-4 text-lg font-semibold ${activeTab === 'profile' ? 'border-b-2 border-yellow-500 text-yellow-500' : 'text-gray-400'}`}
                            onClick={() => setActiveTab('profile')}
                        >
                            Profil
                        </button>
                        <button
                            className={`py-2 px-4 text-lg font-semibold ${activeTab === 'friends' ? 'border-b-2 border-yellow-500 text-yellow-500' : 'text-gray-400'}`}
                            onClick={() => setActiveTab('friends')}
                        >
                            Mes Soldats
                        </button>
                        <button
                            className={`py-2 px-4 text-lg font-semibold ${activeTab === 'likes' ? 'border-b-2 border-yellow-500 text-yellow-500' : 'text-gray-400'}`}
                            onClick={() => setActiveTab('likes')}
                        >
                            Posts Aimés
                        </button>
                    </div>

                    {/* Contenu des onglets */}
                    {activeTab === 'profile' && (
                        <div className="border border-white p-6 rounded-lg shadow-lg mb-8">
                            <h2 className="text-3xl font-bold text-yellow-500 mb-4">{user.name}</h2>
                            <p className="text-lg text-gray-300 mb-4">{user.email}</p>
                            <button className="bg-yellow-500 text-gray-900 rounded-full px-6 py-3 text-lg hover:bg-yellow-600 transition duration-300 ease-in-out">
                                <FaEdit /> Modifier mes informations
                            </button>
                        </div>
                    )}

                    {activeTab === 'friends' && (
                        <div className="border border-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold text-yellow-500 mb-4">Mes Soldats</h3>
                            <ul className="list-disc pl-5">
                                {user.friends.map((friend, index) => (
                                    <li key={index} className="text-lg text-gray-300 mb-2">
                                        <FaUserFriends /> {friend}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === 'likes' && (
                        <div className="border border-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold text-yellow-500 mb-4">Posts Aimés</h3>
                            <ul className="list-disc pl-5">
                                {user.likedPosts.map((post, index) => (
                                    <li key={index} className="text-lg text-gray-300 mb-2">
                                        <FaHeart /> {post}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default MonCompte;
