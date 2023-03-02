import { AppContextProvider } from "./context/AppContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WeatherOverview from "./pages/WeatherOverview";
import WeatherDetail from "./pages/WeatherDetail";
import RootPage from "./pages/RootPage";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { path: "/", element: <WeatherOverview /> },
      { path: "/detail/:dayDate", element: <WeatherDetail /> },
    ],
  },
]);

const App = () => {
  return (
    <main>
      <AppContextProvider>
        <RouterProvider router={router} />
      </AppContextProvider>
    </main>
  );
};

export default App;
