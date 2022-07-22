import React from "react"
import { useForm } from "react-hook-form";
import {Form, Button, Card} from 'react-bootstrap';
import firebase from "../config/firebase";
import Input from "../components/Input";
import "../styles/forms.css"
import {useNavigate} from "react-router-dom";

function NewProduct() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()

    const onSubmit = async (data)=>{
        try {
            const document = await  firebase.db.collection("productos")
                .add({
                    name:data.name,
                    price:data.price,
                    link:data.link,
                    description:data.description
            })
            navigate('/')
        }catch (e){
            console.log(e)
        }
    }
    return(

                <Card className="card-uppdate">

                    <Card.Body>
                        <Card.Title className="title" >Nuevo Producto</Card.Title>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Input label="Nombre" name="name" register={{...register("name", { required: true })}} placeholder="Escriba el nombre del producto"  />
                                <div>
                                    {errors.name && <span>El campo es obligatorio</span>}
                                </div>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Input label="Precio" type="text" name="price" register={{...register("price", { required: true })}} placeholder="Escriba el precio"  />
                                <div>
                                    {errors.precio  && <span>El campo es obligatorio</span>}
                                </div>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Input label="Link" type="text" name="link" register={{...register("link", { required: true })}} placeholder="Escriba la ubicación de la imagen"  />
                                <div>
                                    {errors.link && <span>Es obligatorio escribir el link</span>}
                                </div>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Input label="Descripción" type="text" name="description" register={{...register("description", { required: true })}} placeholder="Escriba su correo"  />
                                <div>
                                    {errors.description && <span>Es obligatorio escribir una descripción</span>}
                                </div>
                            </Form.Group>
                            <Button variant="outline-secondary" type="submit">
                                Guardar
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>

    )
}
export default NewProduct