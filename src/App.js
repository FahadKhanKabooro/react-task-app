import Form1 from "./components/Form1";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import Practice from "./components/practice/practice";

function App() {
  return (
    <div className="app">
      <Logo />
      <Form1 />
      <PackingList />
      <Stats />
      {/* <Practice /> */}
    </div>
  );
}

export default App;
