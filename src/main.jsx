import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./styles/globals.css";
import "./styles/theme.css";
import { Home } from "./views/Home/Home.jsx";
import { Layout } from "./components/Layout/Layout.jsx";
import { ItemPage } from "./views/ItemPage/ItemPage.jsx";
import { Ranking } from "./views/Ranking/Ranking.jsx";
import { Favourites } from "./views/Favourites/Favourites.jsx";
import { Explore } from "./views/Explore/Explore.jsx";
import { SearchContextProvider } from "./contexts/SearchContext.jsx";
import { MyProfile } from "./views/MyProfile/MyProfile.jsx";
import { FavouritesContextProvider } from "./contexts/FavouritesContext.jsx";
import { Error } from "./views/Error/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Navigate to="/home" /> },
      { path: "/:itemId", element: <ItemPage /> },
      { path: "/best", element: <Ranking /> },
      { path: "/favourites", element: <Favourites /> },
      { path: "/explore", element: <Explore /> },
      { path: "/profile", element: <MyProfile /> },
      { path: "*", element: <Error /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SearchContextProvider>
      <FavouritesContextProvider>
        <RouterProvider router={router} />
      </FavouritesContextProvider>
    </SearchContextProvider>
  </React.StrictMode>
);
