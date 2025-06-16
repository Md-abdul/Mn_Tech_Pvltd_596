import React from "react";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { useAdminAuth } from "./context/AdminAuthContext";

function App() {
  const { admin } = useAdminAuth();
  return (
    <React.Fragment>
      {!admin && <Navbar />}
      <AllRoutes />
      {!admin && <Footer />}
    </React.Fragment>
  );
}

export default App;
