import { useState } from "react";

export const useForm = (initialValue = {}) => {
  
    const [formState, setFormState] = useState(initialValue)

    const onInputChange = ({target}) => {
        
        const {name,value} = target;

        setFormState({
            //!Desestructuramos el formstate para mantener todos los valores del form
            ...formState,
            //!Propiedades computadas en los objetos ( [elegimos el dato] y en el value le cambiamos el valor a ese dato )
            //*Coge el valor del nombre y lo reemplaza por el nuevo
            [name]: value

        });


    }

    const onResetForm = () => {
        setFormState(initialValue);
    }


  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm
  }
}
