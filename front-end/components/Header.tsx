import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="p-3 mb-3 border-bottom bg-gray-600 flex flex-col">
      <a className="flex justify-center mb-2">
        {' '}
        Simple Workout Planner
      </a>
      <nav className="flex justify-center">
        <Link href="/" className="nav-link px-4 fs-5 text-white">
          Home
        </Link>
        <Link href="/exercises" className="nav-link px-4 fs-5 text-white">
          Exercises
        </Link>
      </nav>
    </header>
  );
};

export default Header;