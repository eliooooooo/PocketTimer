import Header from "./components/header";
import Container from "./components/container";
import TimeInput from "./components/timeinput";

function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 300); // 5 minutes timer

  return (
    <div>
      <Header />
      <Container expiryTimestamp={time} />
      <TimeInput />
    </div>
  );
}

export default App;
