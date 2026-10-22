import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import BackgroundMusic from "./BackgroundMusic.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(<><App /><BackgroundMusic /></>);
