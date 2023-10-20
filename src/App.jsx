import { Outlet } from "react-router-dom"
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Outlet />
    </div>
  );
}

export default App;
