import { LoginIcon } from '@heroicons/react/outline'
import { Link, Outlet, useLocation } from 'react-router-dom'
import AppButton from './App/AppButton'

export default function PageHome() {
  const location = useLocation()

  const isHome = location.pathname === '/'

  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-8">
      <h2 className="text-5xl font-bold text-primary">Simple Chat</h2>
      {isHome && (
        <>
          <Link to="/login">
            <AppButton title="Sign in">
              <LoginIcon className="h-6 w-6" />
            </AppButton>
          </Link>
          <Link to="/register">
            <AppButton title="Register">
              <LoginIcon className="h-6 w-6" />
            </AppButton>
          </Link>
        </>
      )}
      <Outlet />
    </div>
  )
}
