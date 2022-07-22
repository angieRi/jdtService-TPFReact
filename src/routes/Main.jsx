import React from 'react'
import Home from "../pages/Home";
import Register from "../pages/Register";
import NewProduct from "../pages/NewProduct";
import Products from "../pages/Products";
import Login from "../pages/Login";
import {
    Routes,
    Route
} from "react-router-dom"
import Details from "../pages/Details";
import ListProductsJdt from "../pages/ListProductsJdt";
import ProductUpdate from "../pages/ProductUpdate";
import AuthContext from '../context/AuthContext';
import NotFound from "../pages/NotFound";

function Main() {
    return (
        <AuthContext.Consumer>
            {
                context=>
                <Routes>
                    <Route path='/' element={< Home/>}/>
                    {
                        !context.isLogin &&
                        <>
                            <Route path='/ingresar' element={< Login/>}/>
                            <Route path='/registrar' element={< Register/>}/>
                        </>
                    }
                    {
                        context.isLogin &&
                        <>
                            <Route path='/producto/lista' element={< ListProductsJdt/>}/>
                            <Route path='/producto/crear' element={< NewProduct/>}/>
                            <Route path='/producto/editar/:id' element={< ProductUpdate/>}/>
                            <Route path='/producto/eliminar' element={< NewProduct/>}/>
                        </>
                    }

                    <Route path='/productos' element={< Products/>}/>
                    <Route path='/producto/detalle/:id' element={< Details/>}/>
                    <Route path='*' element={<NotFound />} />
                </Routes>
            }
            </AuthContext.Consumer>
    );
}

export default Main;
