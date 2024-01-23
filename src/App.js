// import logo from './logo.svg';
import Layout from './components/layout';
import './App.css';

//import pages
import SignIn from './pages/auth/signin';
import SignUp from './pages/auth/signup';
import ChangePassword from './pages/auth/changepass';
import Chat from './pages/chat';
import Buy from './pages/product/purchase';
import Home from './pages';
import ProductDetail from './pages/product/product-detail';

const routes = [
  {path: '/auth/signin', component: SignIn, isAuthRoute : false},
  {path: '/auth/signup', component: SignUp, isAuthRoute : false},
  {path: '/auth/changepass', component: ChangePassword, isAuthRoute : false},
  {path: '/mainboard', component: Chat, isAuthRoute : true},
  {path: '/purchase', component: Buy, isAuthRoute : true},
  {path: '/product-detail', component: ProductDetail, isAuthRoute : true},
  {path: '/', component: Home, isAuthRoute : false}
]

function App() {
  return (
    <div className="App h-[100vh]">
      <Layout routes = {routes} />
    </div>
  );
}

export default App;
