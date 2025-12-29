import { useState} from 'react'
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import './App.css'

function App(){
        const [chatMessages,setChatMessages]= useState([{
                message: 'hello chatbot',
                sender: 'user',
                id: 'id1'
            },{
                message: 'How cHelloan I help you?',
                sender: 'robot',
                id: 'id2'
            },{
                message: 'can you get me todays date?',
                sender: 'user',
                id: 'id3'
            },{
                message: 'Today is September 27',
                sender: 'robot',
                id: 'id4'
            }]
            );
            // const chatMessages=array[0];
            // const setChatMessages= array[1];
            //Array Destructuring
            // const {chatMessages,setChatMessages}=array;
            
            return(
                <div className="app-container">
                    <ChatMessages 
                        chatMessages={chatMessages}

                    /> 
                    <ChatInput
                        chatMessages={chatMessages}
                        setChatMessages={setChatMessages}   
                    />
                </div>

            );
        }

export default App
