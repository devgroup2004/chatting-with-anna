// import logo from './logo.svg';
import Layout from './components/layout';
import './App.css';
import "./globals.css";

//import pages
import SignIn from './pages/auth/signin';
import SignUp from './pages/auth/signup';
import ChangePass from './pages/auth/changepass';
import Chat from './pages/chat';
import BuyProduct from './pages/product/BuyProduct';

const routes = [
  {path: '/auth/signin', component: SignIn},
  {path: '/auth/signup', component: SignUp},
  {path: '/auth/changepass', component: ChangePass},
  {path: '/mainboard', component: Chat},

  {path: '/product/buy', component: BuyProduct}
]

function App() {
  return (
    <div className="App h-[100vh]">
      <Layout routes = {routes} />
    </div>
  );
}

export default App;
