import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { ChakraProvider } from "@chakra-ui/react";
import { Auth0Provider } from "@auth0/auth0-react";
import { ProSidebarProvider } from "react-pro-sidebar";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
      <Auth0Provider
  domain="dev-zsfygzaheh2myp3z.us.auth0.com"
  clientId="wH9pncyO7j9DK6bFycs8wtdfsNNME1rM"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
  <Provider store={store}>
    <ChakraProvider>
 
      <BrowserRouter>
      <ProSidebarProvider>
        <App />
        </ProSidebarProvider>
      </BrowserRouter>
 
    </ChakraProvider>
  </Provider>
 </Auth0Provider>
  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
