import { useState } from 'react';
import './styles/App.scss';
import List from './components/List'
import TodoForm from './components/TodoForm'
import Modal from './components/Modal'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import listReducer from './reducers/listReducer'




const SAVE_ITEMS = 'savedItems'

function persistState(state) {
    localStorage.setItem(SAVE_ITEMS, JSON.stringify(state))
}

function loadState() {
    const actualState = localStorage.getItem(SAVE_ITEMS)
    if (actualState) {
        return JSON.parse(actualState)
    } else {
        return []
    }

}

const store = createStore(listReducer, loadState())

store.subscribe(() => {
    persistState(store.getState())
})

function App() {
    const [showModal, setShowModal] = useState(false)


    function onHideModal() {
        setShowModal(false)
    }

    return (
        <div className="container">
            <Provider store={store}>
                <header className='header'>
                    <h1>Todo</h1>
                    <button className='addButton' onClick={() => { setShowModal(true) }}>+</button>
                </header>

                <List></List>
                <Modal show={showModal} onHideModal={onHideModal}>
                    <TodoForm onHideModal={onHideModal}></TodoForm>
                </Modal>

            </Provider>
        </div>
    );
}

export default App;
