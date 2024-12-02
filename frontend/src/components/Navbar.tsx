'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl">
            PLM System
          </Link>
          
          <div className="flex space-x-4">
            <Link 
              href="/projects/list"
              className={`px-3 py-2 rounded-md ${
                pathname.startsWith('/projects') ? 'bg-gray-900' : 'hover:bg-gray-700'
              }`}
            >
              Projets
            </Link>
            <Link 
              href="/projects/create"
              className={`px-3 py-2 rounded-md ${
                pathname === '/projects/create' ? 'bg-gray-900' : 'hover:bg-gray-700'
              }`}
            >
              Nouveau Projet
            </Link>
            <Link 
              href="/auth/register"
              className={`px-3 py-2 rounded-md ${
                pathname === '/auth/register' ? 'bg-gray-900' : 'hover:bg-gray-700'
              }`}
            >
              Inscription
            </Link>
            <Link 
              href="/auth/login"
              className={`px-3 py-2 rounded-md ${
                pathname === '/auth/login' ? 'bg-gray-900' : 'hover:bg-gray-700'
              }`}
            >
              Connexion
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 