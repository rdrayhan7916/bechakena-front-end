import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Commponents/Home/Home/Home';
import AllProducts from './Commponents/GamingProducts/AllProducts/AllProducts';
import Registration from './Commponents/User/Registration/Registration';
import Login from './Commponents/User/Login/Login';
import SingleProduct from './Commponents/GamingProducts/SingleProduct/SingleProduct';
import Header from './Commponents/Shared/Header/Header';
import Footer from './Commponents/Shared/Footer/Footer';
import DashBoard from './Commponents/DashBoard/DashBoard/DashBoard';
import User from './Commponents/DashBoard/User/User';
import Cart from './Commponents/Cart/Cart';
import CheckOut from './Commponents/CheckOut/CheckOut';
import VendorForm from './Commponents/User/VendorForm/VendorForm';
import GadgetsAllProducts from './Commponents/GadgetsProducts/GadgetsAllProducts/GadgetsAllProducts';
import KitchenProducts from './Commponents/KitchenProducts/KitchenProducts';
import HomeAppilianceProducts from './Commponents/HomeAppilianceProducts/HomeAppilianceProducts';
import VendorRequest from './Commponents/DashBoard/VendorRequest/VendorRequest';
import VerifiedVendor from './Commponents/DashBoard/VerifiedVendor/VerifiedVendor';
import UserProfile from './Commponents/User/UserProfile/UserProfile/UserProfile';
import UserOrders from './Commponents/User/UserProfile/UserOrders/UserOrders.js';
import AccountInfo from './Commponents/User/UserProfile/AccountInfo/AccountInfo';
import OrderTimeline from './Commponents/User/UserProfile/UserOrders/OrderTimeline/OrderTimeline';
import VendorDashboard from './Commponents/VendorDashboard/VendorDashboard';
import OrderList from './Commponents/VendorDashboard/OrderList/OrderList';
import ProductList from './Commponents/VendorDashboard/ProductList/ProductList';
import AddProduct from './Commponents/VendorDashboard/ProductList/AddProduct';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/gamingproducts" element={<AllProducts />} />
          <Route path="/gadgetsproducts" element={<GadgetsAllProducts />} />
          <Route path="/kitchenproducts" element={<KitchenProducts />} />
          <Route path="/homeproducts" element={<HomeAppilianceProducts />} />
          <Route path="/account" element={<UserProfile />} >
            <Route path='' element={<UserOrders />} />
            <Route path='order' element={<UserOrders />} />
            <Route path='accountinfo' element={<AccountInfo />} />
            <Route path="timeline" element={<OrderTimeline />} />
            <Route path="order/timeline" element={<OrderTimeline />} />
          </Route>
          <Route path="/registration" element={<Registration />} />
          <Route path="/singin" element={<Login />} />
          <Route path="/vendorform" element={<VendorForm />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/dashboard" element={<DashBoard />} >
            <Route path='' element={<User />} />
            <Route path='user' element={<User />} />
            <Route path='vendorrequest' element={<VendorRequest />} />
            <Route path='verifiedvendor' element={<VerifiedVendor />} />
          </Route>
          <Route path="/Vendordashboard" element={<VendorDashboard />} >
            <Route path='' element={<ProductList />} />
            <Route path='productlist' element={<ProductList />} />
            <Route path='orderlist' element={<OrderList />} />
            <Route path='addproduct' element={<AddProduct />} />

          </Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
