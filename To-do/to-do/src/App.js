import { useEffect, useState } from 'react';
import './styles/App.scss';
import List from './components/List'
import TodoForm from './components/TodoForm'
import Item from './components/item';
import Modal from './components/Modal'

const SAVE_ITEMS = 'savedItems'

function App() {
    const [items, setItems] = useState([])
    const [showModal, setShowModal] = useState(false)


    useEffect(() => {
        let savedItems = JSON.parse(localStorage.getItem(SAVE_ITEMS))
        if (savedItems) {
            setItems(savedItems)
        }
    }, [])


    useEffect(() => {
        localStorage.setItem(SAVE_ITEMS, JSON.stringify(items))
    }, [items])


    function onAddItem(text) {
        let item = new Item(text)
        item.id = items.length * Math.random()
        setItems([...items, item])
        onHideModal()
    }

    function onItemDeleted(item) {
        let filteredItems = items.filter(it => it.id !== item.id)

        setItems(filteredItems)
    }

    function onDone(item) {
        let updatedItems = items.map(it => {
            if (it.id === item.id) {
                it.done = !it.done
            }

            return it
        })
        setItems(updatedItems)
    }

    function onHideModal() {
        setShowModal(false)
    }

    return (
        <div className="container">
            <header className='header'>
                <h1>Todo</h1>
                <button className='addButton' onClick={() => {setShowModal(true)}}>+</button>
            </header>

            <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>
            <Modal show={showModal} onHideModal={onHideModal}>
                <TodoForm onAddItem={onAddItem}></TodoForm>
            </Modal>
        </div>
    );
}

export default App;
