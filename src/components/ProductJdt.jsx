import React from "react";
import {Card} from "react-bootstrap";
import "../styles/home.css";


function ProductJdt(props){
    const {data} = props;
    return(
            <Card className="card-prodjdt">
                <Card.Body className="prodjdt-bd">
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text>
                        <h5>{data.price}</h5>
                        <p>{data.description}</p>
                    </Card.Text>
                </Card.Body>
                <Card.Img variant="bottom"  src={process.env.PUBLIC_URL+'/images/'+data.link} className="img-jdt"/>
            </Card>
        );
}
export default ProductJdt;
