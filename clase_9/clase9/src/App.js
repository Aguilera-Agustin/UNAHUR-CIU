import DrinkMenu from "./components/DrinkMenu/DrinkMenu";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import PizzaMenu from "./components/PizzaMenu/PizzaMenu";

function App() {
  return (
    <main>
      <Header />
      <MainContent />
      <PizzaMenu />
      <DrinkMenu />
      <Footer/>
    </main>
  );
}

export default App;
