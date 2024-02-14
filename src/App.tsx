import Header from "./conponents/Header/Header";
import {Route, Routes} from "react-router-dom";
import Pages from "./container/Pages/Pages";

function App() {

  return (
    <div className={"min-vh-100 bg-black d-flex flex-column"}>
      <Header/>
      <main className={"mt-3"}>
        <div className={"container"}>
          <Routes>
            <Route path={"/pages/:id"} element={(<Pages/>)}/>
            <Route path={"*"} element={<h1 className={"text-white text-center mt-5"}>404</h1>}/>
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
