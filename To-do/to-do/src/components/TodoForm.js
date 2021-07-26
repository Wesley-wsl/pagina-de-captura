import {useState} from 'react'


function TodoForm(props) {
    const [text, setText] = useState('')

    function handleChange(event) {
        let t = event.target
        setText(t.value)
    }

    function addItem(event) {
        event.preventDefault()

        if (text.trim()) {
            props.onAddItem(text)
            setText('')
        }
    }

    return (
        <form action="">
            <input type="text" onChange={handleChange} value={text} />
            <button onClick={addItem}>Add</button>
        </form>
    )
}

export default TodoForm