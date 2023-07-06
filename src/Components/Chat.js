import { addDoc,collection, onSnapshot, query, serverTimestamp, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase-config'


import "../styles/Chat.css";





export const Chat = (props) => {
    const {room}=props
    const [newMessage,setNewMessage]=useState("")
    const [messages,setMessages]=useState([])
    const messagesRef=collection(db,"messages")
    useEffect(()=>{
        const queryMessages=query(messagesRef,where("room","==",room))
        const unsubscribe=onSnapshot(queryMessages,(snapshot)=>{
            let messages=[]
            snapshot.forEach((doc)=>{
                messages.push({...doc.data(),id:doc.id})

            })
            setMessages(messages)
            
        })
        return ()=>unsubscribe();

    },[])
    const handleSubmit=async(e)=>{
        e.preventDefault()
        if(newMessage==="") return
         await addDoc(messagesRef,{
            text:newMessage,
            createdAt:serverTimestamp(),
            user:auth.currentUser.displayName,
            room


        })
        setNewMessage("")

    }
  return (
    <div className='chat-app'>
        <div className='header'>
            Welcome To Room:{room.toUpperCase()}
        </div>
        <div className="messages" key={messages.id}>
            <span className='user'>{messages.user}</span>
            {/* {messages.map((message)=><h1>{message.text}</h1>)} */}
        </div>
        <form className='new-message-form' onSubmit={handleSubmit}>
            <input className='new-message-input' placeholder='Type Your Message Here...' onChange={(e)=>setNewMessage(e.target.value)} value={newMessage}/>
            <button type='submit' className='send-button'>Send</button>

        </form>
    </div>
  )
}
