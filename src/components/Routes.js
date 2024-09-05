import Products from './Products.js';
import Product from './Product.js';
import { Route, Routes } from "react-router-dom";


/**RoutesList: handles routing
 *
 *Props:
 * - none
 *
 *State:
 * - none
 *
 * App -> RoutesList -> LoggedOutProtection & LoggedInProtextion-> Component
 */
function RoutesList(){
    return (
        <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/products/:category" element={<Products />} />
            <Route path="/product/:name" element={<Product />}/>
        </Routes>
    );
}


export default RoutesList;