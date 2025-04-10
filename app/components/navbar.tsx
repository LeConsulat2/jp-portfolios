// app/components/navbar.tsx
import { NavLink } from 'react-router';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-filter backdrop-blur-lg bg-black/50 px-8 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <NavLink to="/" className="text-2xl font-bold text-white">
          Jonathan
        </NavLink>
        <nav className="space-x-6">
          {['Home', 'About', 'Projects', 'Contact'].map((label) => (
            <NavLink
              key={label}
              to={label === 'Home' ? '/' : `/${label.toLowerCase()}`}
              className={({ isActive }) =>
                isActive
                  ? 'border-b-2 border-white text-white pb-1'
                  : 'text-gray-300 hover:text-white pb-1 transition'
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
