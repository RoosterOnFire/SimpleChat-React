export default function LoginError({
  message,
}: {
  message: string | undefined
}) {
  return <span className="text-error">{message}</span>
}
