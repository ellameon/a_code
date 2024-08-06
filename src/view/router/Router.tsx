import { BrowserRouter, Route, Routes } from "react-router-dom";
import { paths } from "../../utils";
import { AuthComponent } from "../auth";
import { MainComponent } from "../tree-view/MainComponent";

export const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.indexPath} element={<AuthComponent/>}/>
        <Route path={paths.loginPath} element={<AuthComponent/>}/>
        <Route path={paths.objectsPath.list} element={<MainComponent/>}/>
      </Routes>
    </BrowserRouter>
  )
}