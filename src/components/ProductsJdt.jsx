import React, {useState,useEffect} from "react";
import ProductJdt from "../components/ProductJdt";
import {getProductsFirebase} from "../services/productsService";
import {Container} from "react-bootstrap";
import "../styles/home.css";

function ProductsJdt() {

    const [loading, setLoding] = useState(true)
    const [products, setProducts] = useState([])
    useEffect(
        () => {
            const request = async ()=>{
                try{
                    const response = await getProductsFirebase()
                    setProducts(response)
                    setLoding(false)

                } catch (e) {
                    console.log(e)
                }
            }
            request()
        },
    )

    if(loading){
        return(<div>Cargando...</div>)
    }else{
        return (
            <Container>
                {products?.map((dataProduct,index)=><ProductJdt  key={dataProduct.id}  data={dataProduct.data()} id={dataProduct.id} />)}

            </Container>
        )
    }

}
export default ProductsJdt
