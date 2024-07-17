import PaginaBase from '../pages/PaginaBase';
import Inicio from '../pages/Inicio';
import NovoVideo from '../pages/NovoVideo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PaginaBase />}>
                <Route index element={<Inicio />}></Route>
                <Route path='novo' element={<NovoVideo />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;