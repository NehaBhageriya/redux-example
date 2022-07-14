import Counter from "./Counter";
import "./styles.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducer from "./CombineReducer";
const store = createStore(allReducer);
export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}
