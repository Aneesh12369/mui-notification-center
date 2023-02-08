import React from "react";
import ReactDOM from "react-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import Demo from "./demo";

import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <Demo />
    <ToastContainer position="bottom-right" newestOnTop />
  </StyledEngineProvider>,
  document.querySelector("#root")
);
