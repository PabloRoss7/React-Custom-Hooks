import {useState, type SyntheticEvent } from 'react'

export const useForm = (initialForm: any = {}) => {

    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({target}: SyntheticEvent) => {
        const {name, value} = target as HTMLInputElement;
        setFormState({
            ... formState,
            [name] : value
        })
    }



    return {
        ... formState,
        onInputChange
    }
}
