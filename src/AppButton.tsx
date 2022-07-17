import { MouseEventHandler } from 'react'

export default function AppButton({
  title,
  children,
  onClick,
}: {
  title: string
  children?: JSX.Element
  onClick?: MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <button
      className="flex justify-center gap-2 rounded-md border border-transparent bg-primary-light py-2 px-4 align-middle font-medium text-white focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2"
      onClick={onClick}
    >
      {title}
      {children}
    </button>
  )
}
