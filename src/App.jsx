import Container from "./components/container";

function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 300); // 5 minutes timer

  return (
    <div>
      <Container expiryTimestamp={time} />
    </div>
  );
}

export default App;
