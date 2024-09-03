import React from 'react';
import Navbar from '../components/navbar';

const Messages = () => {
    // Exemple de données de messages
    const messages = [
        { id: 1, sender: 'Batman', content: 'Salut, zoulette ?', timestamp: '10:00 AM' },
        { id: 2, sender: 'Emmanuel Macron', content: 'Bonjour jeune swaggeur !', timestamp: '10:05 AM' },
        { id: 3, sender: 'Néo', content: 'Wesh la cité !', timestamp: '10:10 AM' },
        { id: 4, sender: 'Valentin', content: 'TG', timestamp: '10:15 AM' },
    ];

    return (
        <div>
            <Navbar />
            <main className="min-h-screen bg-black flex items-center justify-center text-white">
                <div className="container mx-auto px-4 py-12">
                    <div className="border border-white rounded-lg shadow-lg p-4">
                        <h2 className="text-2xl font-bold text-yellow-500 mb-4 text-center">Liste des Messages</h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y ">
                                <thead>
                                    <tr className="bg-yellow-600">
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Expéditeur</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Contenu</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Heure</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-700">
                                    {messages.map((message) => (
                                        <tr key={message.id} className="hover:bg-yellow-500 transition duration-300 ease-in-out">
                                            <td className="px-6 py-4 whitespace-nowrap">{message.sender}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{message.content}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{message.timestamp}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>

    );
};

export default Messages;
