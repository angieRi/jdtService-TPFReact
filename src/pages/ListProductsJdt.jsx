import React, {useState,useEffect} from "react";
import {getProductsFirebase} from "../services/productsService";
import {Card, Table} from "react-bootstrap";
import TableJdt from "../components/TableJdt";
import "../styles/listProducts.css"

function ListProductsJdt() {
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

                <Card className="list-prod">
                    <Card.Body>
                        <Card.Title>Lista de Productos</Card.Title>
                        <Card.Text >
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Precio</th>
                                        <th>Descripción</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>

                                <tbody>
                                {products?.map((dataProduct,index)=><TableJdt  key={dataProduct.id} data={dataProduct.data()} id={dataProduct.id} />)}

                                </tbody>
                            </Table>
                        </Card.Text>
                    </Card.Body>
                </Card>

        )
    }
}
export default  ListProductsJdt