import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Shop from "../pages/shop/Shop";
import PaymentRules from "../pages/PaymentRules";
import Contacts from "../pages/Contacts";
import PageNotFound from "../pages/PageNotFound";
import ProductDetail from "../pages/shop/Product/ProductDetail";
import Layout from "../pages/Layout";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products">
          <Route index element={<Shop />} />
          <Route path=":id" element={<ProductDetail />} />
        </Route>
        <Route path="paymentRules" element={<PaymentRules />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
