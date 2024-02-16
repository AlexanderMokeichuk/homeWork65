import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter} from "react-router-dom";

const app = (
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById("root")!).render(app);
