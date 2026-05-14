import { MainLayout } from "./components/layout/MainLayout";
import { SearchProvider } from "./context/useSearch";
function App() {
  return (
    <SearchProvider>
      <MainLayout />
    </SearchProvider>
  );
}

export default App;
