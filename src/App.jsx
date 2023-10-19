import { Provider } from "react-redux"
import appStore from './utils/Redux/appStore';
import Body from "./components/Body/Body";

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  )
}

export default App
