import { ToastContainer } from "react-toastify";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <div className="container mx-auto">
      <MainLayout></MainLayout>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}

export default App;
