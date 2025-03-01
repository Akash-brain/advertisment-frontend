import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import CategoryScreen from "./Screens/CategoryScreen";
import Careers from "./Components/careers";
import CompanyRoutes from "./routes/CompanyRoutes";
import { CartProvider } from "./Components/CartContext";
import MainContent from "./Components/MainContent";
import Cart from "./Components/Cart";
import Joinus from "./Components/Company/joinus";
import Help from "./Components/Company/Help";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<MainContent />} />
            <Route path="cart" element={<Cart />} />
            <Route path="/join-us" element={<Joinus />} />
            <Route path="/help" element={<Help />} />
          </Route>
          <Route path="/services/:categoryId" element={<CategoryScreen />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/company/*" element={<CompanyRoutes />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
