import counter from "./store/counter";
import { observer } from "mobx-react-lite"
import "./App.css";

const App = observer(() => {
	return  (
			<div className="card">
				<button onClick={()=>counter.increment()}>count is {counter.count}</button>
			</div>
	)
})
export default App;
