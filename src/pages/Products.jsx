import React, {useState,useEffect} from "react";
import Product from "../components/Product";
import {getAllProduct} from "../services/productsService";
import {Form} from "react-bootstrap";
import "../styles/products.css"

function Products() {

    const [loading, setLoding] = useState(true)
    const [products, setProducts] = useState([])
    const [buscar, setBuscar]= useState('Accesorios')

    useEffect(
        () => {
            const request = async ()=>{
                try{
                    const response = await getAllProduct(buscar)
                    setProducts(response.results)
                    setLoding(false)
                } catch (e) {
                    console.log(e)
                }
            }
            request()
        },
        [buscar]
    )
    const handleChange = (event)=>{
            const value = event.target.value
            setBuscar(value)
    }
    if(loading){
        return(<div>Cargando...</div>)
    }else{
        const title = "Lista de Productos"
        return (
                <div className="products">
                    <h1>{title}</h1>
                    <Form.Control type="text" placeholder="Buscar producto" value={buscar} onChange={handleChange}  className="buscador" />
                    <div className="container_products">

                        {products.map((dataProduct,index)=><Product key={dataProduct.id} data={dataProduct} />)}
                    </div>

                 </div>
        )
    }

}
export default Products
