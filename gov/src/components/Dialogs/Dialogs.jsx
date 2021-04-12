import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'




const Dialogs = (props) => {
    
    // Создаем массив dialogsElements из dialogsData преобразовывая данные
    let dialogsElements = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />)

    // Аналогично
    let messagesElements = props.state.messagesData.map(m => <Message message={m.message} />
    )
    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>

        </div>

    )
}

export default Dialogs