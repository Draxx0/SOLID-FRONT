import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CreateOrderPage from './order/presentation/page/CreateOrderPage';
import OrdersPage from './order/presentation/page/OrdersPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/create-order" element={<CreateOrderPage />} />
        <Route path="/history" element={<OrdersPage />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
