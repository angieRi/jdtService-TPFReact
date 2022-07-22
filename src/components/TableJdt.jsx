import React from "react";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {deleteProduct} from "../services/productsService";

function TableJdt(props){
    const {data,id} = props;
    const handleDelete = async ()=>{
        await deleteProduct(id)
    }
    return(
            <tr>
                <td>{data.name}</td>
                <td>$ {data.price}</td>
                <td>{data.description}</td>
                <td>
                    <Button variant="outline-info" className="btnE">
                        <Link to={'/producto/editar/'+id} className="lk">Editar</Link>
                    </Button>
                    <Button variant="outline-danger" onClick={handleDelete} className="lk">Eliminar</Button>
                </td>
            </tr>
    )
}
export default TableJdt;
