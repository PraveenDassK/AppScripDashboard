import { Routes, Route, BrowserRouter } from "react-router-dom";
import Clinical from "../pages/Clinical";
const RoutesPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Clinical />}>
          {/* for nested route under clinical  */}
          {/* <Route path="tasks" element={<Clinical />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default RoutesPage;
