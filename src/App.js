import { AppContextProvider } from "./context/AppContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WeatherOverview from "./pages/WeatherOverview";
import WeatherDetail from "./pages/WeatherDetail";
import ScrollToTop from "./ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  return (
    <main>
      <AppContextProvider>
        <BrowserRouter>
          <ScrollToTop>
            <Header />
            <Routes>
              <Route path="/" element={<WeatherOverview />} />
              <Route path="/detail/:dayDate" element={<WeatherDetail />} />
            </Routes>
            <Footer />
          </ScrollToTop>
        </BrowserRouter>
      </AppContextProvider>
    </main>
  );
};

export default App;
