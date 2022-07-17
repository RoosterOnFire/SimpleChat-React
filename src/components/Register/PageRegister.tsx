import { useNavigate } from 'react-router-dom'
import AppButton from '../App/AppButton'

export default function PageRegister() {
  const navigate = useNavigate()

  return (
    <>
      <AppButton title="Go back" onClick={() => navigate(-1)}></AppButton>
    </>
  )
}
