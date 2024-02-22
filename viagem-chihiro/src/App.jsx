import Navbar from "./components/header/navbar";
import "./App.css";
import "./App_Media.css";
import Article from "./components/article/article";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section>
        <Article />
      </section>
    </>
  );
}

export default App;
