import binImg from '../assets/bin.png'
import offImg from '../assets/off.png'
import onImg from '../assets/on.png'
import Card from '../components/Card'
import {useDispatch} from 'react-redux'
import {changeDone, deleteItem} from '../actions/listAction'

function DoneImg(props) {
    if (props.done) {
        return (<img src={onImg} alt='Concluído.'></img>)
    } else {
        return (<img src={offImg} alt='Não concluído.'></img>)
    }
}

function ListItem(props) {

    const dispatch = useDispatch()


    return (
        <li>
            <Card className={props.item.done ? 'done item' : 'item'}>
                {props.item.text}
                <div>
                    <button onClick={() => { dispatch(changeDone(props.item.id)) }}> <DoneImg done={props.item.done}></DoneImg> </button>
                    <button><img src={binImg} alt='Delete' onClick={() => { dispatch(deleteItem(props.item.id)) }}></img></button>
                </div>
            </Card>
        </li>)
}




export default ListItem
