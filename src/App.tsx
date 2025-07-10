import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Enterotp, LoginSignup, SetupProfile } from "./routes";
import { Home } from "./screens/Home";
import { IntroCarousel } from "./screens/IntroCarousel";
import { SplashScreen } from "./screens/SplashScreen";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <SplashScreen />,
  },
  {
    path: "/splash",
    element: <SplashScreen />,
  },
  {
    path: "/intro",
    element: <IntroCarousel />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginSignup />,
  },
  {
    path: "/enterotp",
    element: <Enterotp />,
  },
  {
    path: "/setup-profile",
    element: <SetupProfile />,
  }
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
