import AppButton from './AppButton'
import { LoginIcon } from '@heroicons/react/outline'

export default function PageHome() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-8">
      <h2 className="text-5xl font-bold text-primary">Simple Chat</h2>
      <AppButton title="Sign in" onClick={() => console.log('click sign in')}>
        <LoginIcon className="h-6 w-6" />
      </AppButton>
      <AppButton title="Register" onClick={() => console.log('click register')}>
        <LoginIcon className="h-6 w-6" />
      </AppButton>
    </div>
  )
}
