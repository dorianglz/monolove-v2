import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className={clsx(
      'fixed inset-0 z-50 pl-[24px] sm:pl-[24px] pointer-events-none',
      {
        'text-white': isHome,
        'text-black': !isHome,
      }
    )}>
      <div className={clsx(
        'border-l flex flex-col justify-between w-full h-full p-2 sm:p-4',
        {
          'border-white': isHome,
          'border-black': !isHome,
        }
      )}>
        <div className="flex items-center sm:flex-col sm:items-start justify-between">
          <h1 className="font-[kodak] text-[34px] sm:text-[56px]">monolove.</h1>

          <Link
            to="/"
            className={clsx(
              'sm:mt-[10px] mt-[8px] text-[15px] pointer-events-auto',
              {
                'text-yellow-500': location.pathname === '/',
                'hover:text-yellow-500': location.pathname !== '/',
              }
            )}
          >
            work.
          </Link>

          <Link
            to="/contact"
            className={clsx(
              'sm:my-[-2px] mt-[8px] text-[15px] pointer-events-auto',
              {
                'text-green-500': location.pathname === '/contact',
                'hover:text-green-500': location.pathname !== '/contact',
              }
            )}
          >
            about.
          </Link>

          <Link
            to="/shop"
            className={clsx(
              'text-[15px] mt-[8px] sm:mt-0 pointer-events-auto',
              {
                'text-violet-500': location.pathname === '/shop',
                'hover:text-violet-500': location.pathname !== '/shop',
              }
            )}
          >
            shop.
          </Link>
        </div>

        <div>
          <p className="text-[12px] opacity-65">©2025 Monolove</p>
        </div>
      </div>
    </div>
  );
};

export default Header;