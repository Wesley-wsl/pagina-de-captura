import {useState} from 'react'
import {addItem} from '../actions/listAction'
import {useDispatch} from 'react-redux'

function TodoForm(props) {
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    function handleChange(event) {
        let t = event.target
        setText(t.value)
    }

    function addItemEvent(event) {
        event.preventDefault()

        if (text.trim()) {
            dispatch(addItem(text))
            setText('')
            props.onHideModal()
        }
    }

    return (
        <form action="">
            <input type="text" onChange={handleChange} value={text} />
            <button onClick={addItemEvent}>Add</button>
        </form>
    )
}

export default TodoForm