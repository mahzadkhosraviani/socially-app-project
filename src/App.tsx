import "./App.css";
import Navbar from "./components/Navbar";
import WelcomeBack from "./components/WelcomeBack";

function App() {
  return (
    <>
      <div className="dark:bg-black w-screen h-screen">
        <Navbar />
        <WelcomeBack />
      </div>
    </>
  );
}

export default App;
