import { Route, Routes } from "react-router-dom";
import Layout from "./components/commanLayout/Layout";
import HomePage from "./pages/Home/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
