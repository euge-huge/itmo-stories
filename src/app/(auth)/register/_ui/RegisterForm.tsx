'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import { Input } from '@/shared/components/ui/input';
import { Button } from '@/shared/components/ui/button';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Простая валидация
    if (!email || !password || !confirmPassword) {
      setError('Пожалуйста, заполните все поля.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Пароли не совпадают.');
      return;
    }

    // Тут можно добавить логику для регистрации через API
    console.log('Регистрация:', { email, password });
    setError(null); // сбрасываем ошибку
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Заголовок формы */}
      <h1 className="text-center text-3xl font-extrabold text-gray-800">Регистрация</h1>

      {/* Поле для ввода email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Почта
        </label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Введите ваш email"
          className="mt-2"
        />
      </div>

      {/* Поле для ввода пароля */}
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Пароль
        </label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Введите ваш пароль"
          className="mt-2"
        />
      </div>

      {/* Поле для подтверждения пароля */}
      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
          Подтвердите пароль
        </label>
        <Input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Подтвердите ваш пароль"
          className="mt-2"
        />
      </div>

      {/* Ошибка при неправильных данных */}
      {error && <p className="text-sm text-red-500">{error}</p>}

      {/* Кнопка регистрации */}
      <Button type="submit" className="mt-4 w-full">
        Зарегистрироваться
      </Button>

      {/* Ссылка на страницу входа */}
      <p className="mt-4 text-center text-sm text-gray-600">
        Уже есть аккаунт?{' '}
        <Link href="/login" className="text-blue-600 hover:underline">
          Войдите
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
