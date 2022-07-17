import { LoginIcon } from '@heroicons/react/outline'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import AppButton from '../App/AppButton'
import LoginError from './LoginError'
import LoginInput from './LoginInput'
import { IFormValues } from './LoginTypes'

export default function PageLogin() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>()

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    alert(JSON.stringify(data))
  }

  return (
    <>
      <form
        className="flex w-2/3 flex-col gap-4 md:w-1/3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          {errors.username && <LoginError message={errors.username.message} />}
          <LoginInput
            label="username"
            register={register}
            options={{ required: 'Username is required', min: 4 }}
          />
        </div>
        <div>
          {errors.password && <LoginError message={errors.password.message} />}
          <LoginInput
            label="password"
            register={register}
            options={{ required: 'Password is required' }}
          />
        </div>
        <AppButton title="Sign in">
          <LoginIcon className="h-6 w-6" />
        </AppButton>
      </form>
      <AppButton title="Go back" onClick={() => navigate(-1)}></AppButton>
    </>
  )
}
