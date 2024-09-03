import NotFound from '../main/NotFound.tsx'
import Products from './Products.js';
import Product from './Product.js';


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
            <Route path="/products" element={<LoggedInProtection><Products /></LoggedInProtection>} />
            <Route path="/products/:category" element={<LoggedInProtection><Products /></LoggedInProtection>} />
            <Route path="/products/:name" element={<Product productId={productId}} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}


export default RoutesList;