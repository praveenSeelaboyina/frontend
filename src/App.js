import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewUserRegister from "./NewUserRegister/NewUserRegister.js";
import NewUserLogin from "./NewUserLogin/NewUserLogin";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NewUserRegister />} />
          <Route path="/login" element={<NewUserLogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
