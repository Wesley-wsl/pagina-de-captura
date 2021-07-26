import { useEffect, useState } from 'react';
import './styles/App.scss';
import List from './components/List'
import TodoForm from './components/TodoForm'
import Item from './components/item';

const SAVE_ITEMS = 'savedItems'

function App() {
    const [items, setItems] = useState([])

    useEffect(() => {
        let savedItems = JSON.parse(localStorage.getItem(SAVE_ITEMS))
        if(savedItems) {
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

    return (
        <div className="container">
            <h1>Todo</h1>

            <TodoForm onAddItem={onAddItem}></TodoForm>
            <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>

        </div>
    );
}

export default App;
