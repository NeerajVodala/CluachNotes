import "./styles/App.css";
import { Navbar, Sidebar } from "./components";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    <>
      <Navbar />
      <div className="main-template">
        <Sidebar />
        <AppRoutes />
      </div>
    </>
  );
}

export default App;
