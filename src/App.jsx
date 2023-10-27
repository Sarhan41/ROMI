import { BrowserRouter, Routes , Route } from "react-router-dom";
import { DashBoard, Earn, Footer, Header, Home } from "./sections";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/earn" element={<Earn />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
