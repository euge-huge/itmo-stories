'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import { Input } from '@/shared/components/ui/input';
import { Button } from '@/shared/components/ui/button';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Простая проверка (для реальной авторизации нужно интегрировать с API)
    if (!email || !password) {
      setError('Пожалуйста, заполните все поля.');
      return;
    }
    // Тут можно добавить логику для отправки данных на сервер
    console.log('Авторизация:', { email, password });
    setError(null); // сбрасываем ошибку
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Заголовок формы */}
      <h1 className="text-center text-3xl font-extrabold text-gray-800">Войти</h1>

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

      {/* Ошибка при неправильных данных */}
      {error && <p className="text-sm text-red-500">{error}</p>}

      {/* Кнопка входа */}
      <Button type="submit" className="mt-4 w-full">
        Войти
      </Button>

      {/* Ссылка на регистрацию */}
      <p className="mt-4 text-center text-sm text-gray-600">
        Нет аккаунта?{' '}
        <Link href="/register" className="text-blue-600 hover:underline">
          Зарегистрируйтесь
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
