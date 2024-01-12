// App.jsx
import { atom, useRecoilState, useRecoilValue } from "recoil";
import "./App.css";

const CountState = atom({
  key: "count",
  default: 0,
});

function App() {
  const [count, setCount] = useRecoilState(CountState);

  const increase = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className="card">
      <button onClick={increase}>Increase</button>
      <Count />
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

function Count() {
  const count = useRecoilValue(CountState);
  return <p data-testid="display_count">{count}</p>;
}

export default App;
