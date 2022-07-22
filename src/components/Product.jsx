import React from "react";
import {Link} from "react-router-dom";
import {Card, Col,Button} from "react-bootstrap";
import "../styles/products.css"

function Product(props){
    const {data} = props;
    return(
        <Col  xs={6} md={10}>
            <Card className="product">
                <Card.Img variant="top" src={data.thumbnail} className="img-pd"/>
                <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>
                        <p>$ {data.price}</p>
                        <p>{data.currency_id}</p>
                        <Button variant="outline-dark" ><Link to={'/producto/detalle/'+data.id} className="lk">Ver Detalle</Link></Button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}
export default Product;