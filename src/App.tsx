import { Header } from "./components";
import { useFetchedData } from "./hooks/useFetchedData";
function App() {
  const { coordinate, location, weather, loading, error } = useFetchedData();
  console.log(loading);
  return loading ? (
    <h1>Is loading......</h1>
  ) : (
    <>
      <Header />
    </>
  );
}

export default App;
