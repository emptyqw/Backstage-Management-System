/* App > List + Edit + Means
    Login
    Register
*/
import App from "../App";
import ListTable from "../pages/ListTable";
import ListList from "../pages/ListList";
import Edit from "../pages/Edit";
import Means from "../pages/Means";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const BaseRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
      <Route path="/table" element={<ListTable />}></Route>
        <Route path="/list" element={<ListList />}></Route>
        <Route path="/edit" element={<Edit />}></Route>
        <Route path="/means" element={<Means />}></Route>
      </Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  </BrowserRouter>
);
export default BaseRouter;
