import "./styles/App.css";
import { Navbar } from "./components";
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
