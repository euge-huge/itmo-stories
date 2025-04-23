'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import ky from 'ky';

export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

interface AuthProviderProperties {
  children: ReactNode;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within an AuthProvider');
  }

  return context;
};

export const AuthProvider = ({ children }: AuthProviderProperties) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function loadUser() {
      try {
        const response = await ky<User>('http://localhost:3000/api/auth/me');

        if (response.ok) {
          const data = await response.json();

          setUser(data);
        }
      } catch {
        setUser(null);
      }
    }

    loadUser();
  }, []);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
