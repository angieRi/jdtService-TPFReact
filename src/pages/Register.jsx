import React from "react"
import { useForm } from "react-hook-form";
import {Form, Button, Card} from 'react-bootstrap';
import firebase from "../config/firebase";
import Input from "../components/Input";
import {useNavigate} from "react-router-dom";

function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()

    const onSubmit = async (data)=>{
      //  console.log("data",data)
        try {
           const responseUser = await firebase.auth.createUserWithEmailAndPassword(data.email, data.password)//devuelve una promesa
            console.log(responseUser.user.uid)
            if(responseUser.user.uid){
                await firebase.db.collection("usuarios")
                    .add({
                        name:data.name,
                        lastname:data.lastname,
                        userId:responseUser?.user?.uid
                    })
                navigate("/ingresar")
            }
        }catch (e){

        }
    }
    return(
            <Card className="card-uppdate">
                <Card.Body>
                    <Card.Title className="title" >Registro</Card.Title>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" >
                            <Input label="Nombre" name="name" register={{...register("name", { required: true })}} placeholder="Escriba su nombre"  />
                        <div>
                            {errors.name && <span>El campo es obligatorio</span>}
                        </div>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Input label="Apellidos" name="lastname" register={{...register("lastname", { required: true })}} placeholder="Escriba su apellido"  />
                            <div>
                                {errors.lastname && <span>El campo es obligatorio</span>}
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Input label="Correo" type="email" name="email" register={{...register("email", { required: true })}} placeholder="Escriba su correo"  />
                            <div>
                                {errors.email && <span>Es obligatorio escribir un correo</span>}
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Input label="Contraseña" type="password" name="password" register={{...register("password", { required: true })}} placeholder="Escriba su correo"  />
                            <div>
                                {errors.password && <span>Es obligatorio escribir una contraseña</span>}
                            </div>
                        </Form.Group>
                        <Button variant="outline-secondary" type="submit">
                            Registrar
                        </Button>
                    </Form>
                </Card.Body>
            </Card>

    )
}
export default Register