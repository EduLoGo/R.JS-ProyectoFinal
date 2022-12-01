import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="container-fluid p-0">
      <NavBar />
      <ItemListContainer greeting={"Pronto todos nuestros productos"} />
    </div>
  );
}

export default App;
