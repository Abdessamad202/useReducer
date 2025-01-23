import {useSelector} from 'react-redux'
import { userSelector } from '../redux/selectors/userSelector'
const User = () => {
  const user = useSelector(userSelector)
  return (
    <>
      <h1>{user.name}</h1>
      <img src={`https://flagcdn.com/48x36/${user.country}.png`} alt="" />
      <h3>{user.age}</h3>
      
    </>
  )
}
export {User}