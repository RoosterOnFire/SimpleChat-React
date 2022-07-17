import { Path, UseFormRegister } from 'react-hook-form'
import { IFormValues } from './LoginTypes'

type InputProps = {
  label: Path<IFormValues>
  register: UseFormRegister<IFormValues>
  options: Object
}

export default function LoginInput({ label, register, options }: InputProps) {
  return (
    <input
      {...register(label, options)}
      className="mx-auto block w-full appearance-none rounded-md border-2 px-3 py-2 focus:z-10 focus:outline-none focus:ring-2 focus:ring-primary-light sm:text-sm"
    />
  )
}
