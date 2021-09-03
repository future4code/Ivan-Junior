import { useState } from "react"

const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)
    const [textarea, setTextArea] = useState("")

    const handleInputChange = (event) => {
        const {value, name} = event.target
        setForm({...form, [name]: value})
    }

    const handleTextAreaChange = (event) => {
        const area = event.target.value
        return area
    }

    const clear = () => {
        setForm(initialState)
        setTextArea("")
    }

    return [form, handleInputChange, clear, handleTextAreaChange]
}

export default useForm