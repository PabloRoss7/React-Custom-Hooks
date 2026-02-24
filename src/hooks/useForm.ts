import {useState, type SyntheticEvent } from 'react'

export const useForm = (initialForm: any = {}) => {

    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({target}: SyntheticEvent) => {
        const {name, value, type, checked} = target as HTMLInputElement;
        setFormState({
            ... formState,
            [name] : type === 'checkbox' ? checked : value
        })
    }



    return {
        ... formState,
        onInputChange
    }
}
