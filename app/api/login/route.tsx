import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '../../lib/mongodb';
import bcrypt from 'bcryptjs';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();
    const client = await clientPromise;
    const db = client.db('together');

    // Cherche l'utilisateur par email
    const user = await db.collection('users').findOne({ email });
    if (!user) {
      return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
    }

    // Vérifie si le mot de passe est correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
    }

    // Connexion réussie
    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    console.error('An error occurred during login:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
