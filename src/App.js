import './App.css';
import Counter from './Counter';
import CountUp from './CountUp';

function App() {
  return (
    <div className="App">
      <input type='text' />
      {/* <Counter from='100' to='5000' duration='3' /> */}
      <CountUp start={100} end={5000} timer={30} />
    </div>
  );
}

export default App;
