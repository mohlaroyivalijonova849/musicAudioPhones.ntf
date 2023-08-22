// react-router-dom
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
// pages // v6...
import Home from "./pages/home/Home";
import Earphones from "./pages/earphons/Earphones";
import Speakers from "./pages/speakers/Speakers";
import Headphones from "./pages/headphones/Headphones";
import Headphones1 from "./producti-details/Headphones1";

// layout
import RootLayout from "./layout/RootLayout";
import HeadphonesLayout from "./layout/HeadphonesLayout";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="earphones" element={<Earphones />} />
        <Route path="speakers" element={<Speakers />} />
        <Route path="headphones" element={<HeadphonesLayout />}>
          <Route index element={<Headphones />} />
          <Route path="headphones1" element={<Headphones1 />} />
        </Route>
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
