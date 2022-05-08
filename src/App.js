import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';

import Register from './components/Register/Register';
import Login from './components/Login/Login';
import RequireAuth from './components/RequireAuth/RequireAuth';
import DetailInventory from './components/DetailInventory/DetailInventory';
import Header from './components/Header/Header';
import ManageInventory from './components/ManageInventory/ManageInventory';
import AddProduct from './components/AddProduct/AddProduct';
import Myitems from './components/Myitems/Myitems';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Blogs from './components/Blogs/Blogs';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Products></Products>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>

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

        <Route path="/addproduct" element={
          <RequireAuth>
            <AddProduct />
          </RequireAuth>
        } />

        <Route path="/myitems" element={
          <RequireAuth>
            <Myitems />
          </RequireAuth>
        } />

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div >
  );
}

export default App;
