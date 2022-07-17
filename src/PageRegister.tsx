import { useNavigate } from 'react-router-dom'
import AppButton from './AppButton'

export default function PageRegister() {
  const navigate = useNavigate()

  return (
    <>
      <p>Register</p>
      <AppButton title="Go back" onClick={() => navigate(-1)}></AppButton>
    </>
  )
}
