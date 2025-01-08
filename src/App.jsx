import { Route, Routes } from "react-router-dom";

import SideBar from "./components/common/SideBar";

import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import UsersPage from "./pages/UsersPage";
import "./index.css";
import SalesPage from "./pages/SalesPage";

function App() {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <SideBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/sales" element={<SalesPage />} />
      </Routes>
    </div>
  );
}

export default App;
