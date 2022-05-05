import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import RequireAuth from './components/RequireAuth/RequireAuth';
import DetailInventory from './components/DetailInventory/DetailInventory';
import Header from './components/Header/Header';
import ManageInventory from './components/ManageInventory/ManageInventory';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>

        <Route path="/inventory/:productId" element={
          <RequireAuth>
            <DetailInventory />
          </RequireAuth>
        } />

        <Route path="/manageinventories" element={
          <RequireAuth>
            <ManageInventory />
          </RequireAuth>
        } />
      </Routes>

    </div >
  );
}

export default App;
