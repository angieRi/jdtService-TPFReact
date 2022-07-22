import React,{useContext} from "react"
import { useForm } from "react-hook-form";
import {Form,Button,Card} from 'react-bootstrap'
import Input from "../components/Input";
import firebase from "../config/firebase";
import AuthContext from "../context/AuthContext";
import "../styles/forms.css"
import {useNavigate} from "react-router-dom";

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const context = useContext(AuthContext)
    const navigate = useNavigate()

    const onSubmit = async (data)=>{
        try{
            const responseUser = await firebase.auth.signInWithEmailAndPassword(data.email,data.password)
            if(responseUser.user.uid){
                const user = await firebase.db.collection("usuarios")
                    .where("userId","==",responseUser.user.uid)
                    .get()
                context.loginUser(user.docs[0].data())
                context.loginUser()
                navigate("/")
            }
        }catch(e){
            console.log(e)
        }

    }
    return(
            <Card className="card-uppdate">
                <Card.Body>
                    <Card.Title className="title" >Ingresar</Card.Title>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3">
                            <Input label="Correo" type="email" name="email" register={{...register("email", { required: true })}} placeholder="Escriba su correo"  />
                            <div>
                                {errors.email && <span>Es obligatorio escribir un correo</span>}

                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Input label="Contraseña" type="password" name="password" register={{...register("password", { required: true, minLength:6 })}} placeholder="Escriba su correo"  />
                            <div>
                                {errors.password && <span>Es obligatorio escribir una contraseña</span>}
                                {errors.password?.type==="minLength" && <span>Debe introducir al menos 6 caracteres</span>}
                            </div>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Ingresar
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
    )
}
export default Login;