
import Footer from "./footer";
import Header from "./header";

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AuthProvider from '../../util/AuthProvider';

const Layout  = ({ routes }) => {
    return(
        <>
        <Router>
            <div className="flex flex-col h-full">
                <Header />
                <div className="flex-1">
                        <Routes>
                        {
                            routes.map((route, index) => (
                                <Route key = {index} path = {route.path} 
                                    element={!route.isAuthRoute ? <route.component /> 
                                    : <AuthProvider><route.component /></AuthProvider>}>
                                </Route>
                            ))
                        }
                        </Routes>
                </div>
                <Footer />
            </div>
        </Router>
        </>
    )
}

export default Layout;