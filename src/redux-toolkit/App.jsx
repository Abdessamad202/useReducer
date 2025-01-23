import {Provider} from 'react-redux'
import {store} from './store/store'
import {User} from './User'
const App = () => {
  return (
    <Provider store={store}>
      <User/>
    </Provider>

  )
}
export {App}