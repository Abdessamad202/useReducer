import {useSelector} from 'react-redux'
import { userSelector } from '../redux/selectors/userSelector'
const UserForm = () => {
  const selector = useSelector(userSelector)
  return (
    <>{JSON.stringify(selector)}</>
  )
}
export {UserForm}