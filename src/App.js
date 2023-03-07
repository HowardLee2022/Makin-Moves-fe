import {BrowserRouter, Routes,Route} from "react-router-dom";
import MyTrip from "./pages/mytrip";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/mytrip" element={<MyTrip/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
