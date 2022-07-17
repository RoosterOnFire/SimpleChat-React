import { useNavigate } from 'react-router-dom'
import AppButton from './AppButton'

export default function PageLogin() {
  const navigate = useNavigate()

  return (
    <>
      <p>Sign in</p>
      <AppButton title="Go back" onClick={() => navigate(-1)}></AppButton>
    </>
  )
}
