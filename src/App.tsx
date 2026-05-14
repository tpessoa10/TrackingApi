import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Pages/Home/Home";
import Layout from "./Layout";


export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Main/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}