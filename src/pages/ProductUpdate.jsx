import React, {useEffect} from "react";
import { useForm } from "react-hook-form";
import {Form, Button, Card} from 'react-bootstrap';
import Input from "../components/Input";
import {useParams} from "react-router-dom";
import {getProductFb, updateProduct} from "../services/productsService";
import "../styles/listProducts.css"
import {useNavigate} from "react-router-dom";

function ProductUpdate() {
    const {id} = useParams()
    const { register, handleSubmit, setValue,formState: { errors } } = useForm();
    const navigate = useNavigate()

    const onSubmit = async (data)=>{
        try {
            await updateProduct(id,data)
            navigate('/')
        }catch (e){
            console.log(e)
        }
    }
    useEffect(
        ()=>{
            try{
                const request = async ()=>{
                    const response = await getProductFb(id)
                    setValue("name",response.data().name)
                    setValue("price",response.data().price)
                    setValue("link",response.data().link)
                    setValue("description",response.data().description)
                }
                request()
            }catch(e){
                console.log(e)
            }

        },
        [id,setValue]
    )

    return(

                <Card className="card-uppdate">
                    <Card.Body>
                        <Card.Title className="title" >Editar Producto</Card.Title>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group className="mb-3" >
                                <Input label="Nombre" name="name" register={{...register("name", { required: true })}}  />
                                <div>
                                    {errors.name && <span>El campo es obligatorio</span>}
                                </div>
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Input label="Precio"  type="text"  name="price" register={{...register("price", { required: true })}}  />
                                <div>
                                    {errors.precio  && <span>El campo es obligatorio</span>}
                                </div>
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Input label="Link" type="text" name="link" register={{...register("link", { required: true })}}  />
                                <div>
                                    {errors.link && <span>Es obligatorio escribir el link</span>}
                                </div>
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Input label="Descripción" type="text" name="description" register={{...register("description", { required: true })}}  />
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
export default ProductUpdate