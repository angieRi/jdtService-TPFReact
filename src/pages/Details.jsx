import React,{useState,useEffect} from "react"
import {useParams} from "react-router-dom"
import {getByIdProduct} from "../services/productsService"
import Menu from "../components/Menu";
import { Card, Container} from "react-bootstrap";
import "../styles/details.css"
import Footer from "../components/Footer";

function Details() {
    const {id} = useParams()
    const [product,setProduct] = useState({})
    useEffect(
        ()=>{
            try{
                const request = async ()=>{
                    const response = await getByIdProduct(id)
                    setProduct(response)
                }
                request()
            }catch(e){
                console.log(e)
            }

        },
        [id]
    )
    return(
            <Container>
                <Menu />
                <Card className="card-details">
                    <Card.Img variant="top" src={product.thumbnail} className="img-details" />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>
                                <p>Precio: ${product.price}</p>
                                <p>Moneda: {product.currency_id}</p>
                            </Card.Text>
                    </Card.Body>
                </Card>
                <Footer/>
            </Container>

    )
}
export default Details