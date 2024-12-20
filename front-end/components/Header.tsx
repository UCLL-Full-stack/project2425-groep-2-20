import { User } from '@types';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [loggedInUser, setLoggedInUser] = useState<User>(null);

  useEffect(() => {
    setLoggedInUser(JSON.parse(sessionStorage.getItem('loggedInUser')));
  }, []);

  const handleClick = () => {
    sessionStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
  };

  return (
    <header className="p-3 mb-3 border-bottom bg-gray-600 flex flex-col">
      <a className="flex justify-center mb-2">
        Simple Workout Planner
      </a>
      <nav className="flex justify-center">
        <Link href="/" className="px-4 text-white hover:bg-blue-400 rounded-md">
          Home
        </Link>
        <Link href="/exercises" className="px-4 text-white hover:bg-blue-400 rounded-md">
          Exercises
        </Link>
        {!loggedInUser && (
          <Link
            href="/login"
            className="px-4 text-white hover:bg-blue-400 rounded-md"
          >
            {t('header.nav.login')}
          </Link>
        )}
        {loggedInUser && (
          <Link
            href="/login"
            onClick={handleClick}
            className="px-4 text-white hover:bg-blue-400 rounded-md"
          >
            {t('header.nav.logout')}
          </Link>
        )}
        {loggedInUser && (
          <div className="px-4 text-white">
            Welcome, {loggedInUser.fullname}!
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;