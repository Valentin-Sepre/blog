// lib/users.ts

import { MongoClient, Db, Collection } from 'mongodb';
import clientPromise from './mongodb';

// Définition des types localement
interface User {
  _id?: string; // Optionnel pour les nouveaux utilisateurs, mais requis pour les opérations existantes
  username: string;
  email: string;
  password: string;
  // Ajoutez d'autres champs selon les besoins
}

interface UpdateUserFields {
  username?: string;
  email?: string;
  password?: string;
  // Ajoutez d'autres champs que vous pouvez mettre à jour
}

async function getDb(): Promise<Db> {
  const client = await clientPromise;
  return client.db('together');
}

export async function getUser(userId: string): Promise<User | null> {
  const db = await getDb();
  return db.collection<User>('users').findOne({ _id: userId });
}

export async function updateUser(userId: string, newFields: UpdateUserFields): Promise<void> {
  const db = await getDb();
  await db.collection<User>('users').updateOne(
    { _id: userId },
    { $set: newFields }
  );
}

export async function createUser(user: User): Promise<void> {
  const db = await getDb();
  await db.collection<User>('users').insertOne(user);
}
