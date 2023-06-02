import { useState } from "react";
import { Button } from "@mui/material"
import TextField from '@mui/material/TextField';
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

function FormSignUp ({ handleSubmit }) {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [prom, setProm] = useState(true);
    const [nov, setNov] = useState(false);

    const [errors, setErrors] = useState({ 
        name: { //^ Object errors
            error: false,
            message:
                "Deben ser al menos 4 caracteres"
        },
        lastName: {
            error: false,
            message:
                "Deben ser al menos 4 caracteres"
        }
    })

    //^Validación de min 3 char para el nombre
    function validarNombre(nombre) {
        if(nombre.length >= 3)
            return { 
                name: { 
                    error: false, 
                    message: '', }, 
                }
        else 
            return { 
                name: { 
                    error: true, 
                    message: "Deben ser al menoos 3 caracteres", 
                }, 
            }  
    }

    return (
        <form 
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit({
                    name, 
                    lastName, 
                    email, 
                    prom, 
                    nov
                })
            }}
        >
            <TextField  
                id="name" 
                label="Nombre" 
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(e) => {
                    console.log(e.target.value);
                    setName(e.target.value);
                }}
                value={ name }
                error={ errors.name.error }
                helperText={ 
                    errors.name.error 
                    ? errors.name.message 
                    : ""
                }
                onBlur={(e) => { //func se llama al salir del iput
                    setErrors (
                            validarNombre(
                                e.target.value
                            )
                        )
                    }}
            />
            <TextField 
                id="lastName" 
                label="Apellidos" 
                variant="outlined"
                fullWidth
                margin="normal"
                value={lastName}
                onChange={(e) => 
                    setLastName(e.target.value)
                }
            />
            <TextField 
                id="email" 
                label="Email" 
                variant="outlined"
                fullWidth
                margin="normal"
                value={ email }
                onChange={(e) =>
                    setEmail(e.target.value)
                }
            />

            <FormGroup>
                <FormControlLabel 
                    control={ 
                        <Switch
                            checked={ prom }
                            onChange={(e) =>    setProm(
                                e.target.checked
                            ) 
                            }
                        />
                    } 
                    label="Promociones"    
                />

                <FormControlLabel
                    control={
                        <Switch 
                            checked={nov}
                            onChange={(e) =>
                                setNov(e.target.checked)
                            }
                        />
                    }
                    label="Novedades"
                />
            </FormGroup>
            <Button variant="contained" type="submit">
                Registrarse
            </Button>
        </form>
    )
}

function CrearHoook() {
    const [a, setA] = useState("a");
    return <></>
}

export default FormSignUp