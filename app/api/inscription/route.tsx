import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import clientPromise from '../../lib/mongodb';

export async function POST(request: Request) {
  try {
    const { username, email, password } = await request.json();

    const client = await clientPromise;
    const db = client.db('together');
    const collection = db.collection('users');

    // Vérifiez si l'utilisateur existe déjà
    const existingUser = await collection.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    // Hash du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insérez l'utilisateur
    const result = await collection.insertOne({
      username,
      email,
      password: hashedPassword,
    });

    if (result.acknowledged) {
      return NextResponse.json({ message: 'Registration successful' }, { status: 200 });
    } else {
      return NextResponse.json({ message: 'Failed to register user' }, { status: 500 });
    }
  } catch (error) {
    console.error('An error occurred during registration:', error);
    return NextResponse.json({ message: 'Internal Server Error', error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}
