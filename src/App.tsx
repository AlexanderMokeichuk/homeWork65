import Header from "./conponents/Header/Header";
import {Route, Routes} from "react-router-dom";
import Page from "./container/Page/Page";
import Admin from "./container/Admin/Admin";

function App() {

  return (
    <div className={"min-vh-100 bg-black d-flex flex-column"}>
      <Header/>
      <main className={"mt-3"}>
        <div className={"container"}>
          <Routes>
            <Route path={"/pages/:id"} element={(<Page/>)}/>
            <Route path={"/pages/admin"} element={(<Admin/>)}/>
            <Route path={"*"} element={
              <h1 className={"text-white text-center mt-5"}>Not found 404</h1>
            }/>
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
