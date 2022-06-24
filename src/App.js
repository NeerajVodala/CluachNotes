import "./styles/App.css";
import { Navbar, Sidebar } from "./components";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
    </>
  );
}

export default App;
