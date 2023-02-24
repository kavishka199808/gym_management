import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTrainer from "./pages/AddTrainer";
import TrainerAdminView from "./pages/TrainerAdminView";
import AddClient from "./pages/AddClient";
import ClientAdminView from "./pages/ClientAdminView";

function App() {
  return (
  <BrowserRouter>    
    <Routes>
    <Route path="/" element={<TrainerAdminView/>} />
      <Route path="/add-trainer" element={<AddTrainer/>} />
      <Route path="/dash-view-trainer" element={<TrainerAdminView/>} />
      <Route path="/add-client" element={<AddClient/>} />
      <Route path="/dash-view-client" element={<ClientAdminView/>} />
      
    

    </Routes>
  </BrowserRouter>
  );
}

export default App;

