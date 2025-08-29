import React from 'react'
import {StreamChat} from 'stream-chat'    
import {Chat} from 'stream-chat-react'
import Cookies from 'universal-cookie'

import { ChannelList,ChannelListContext } from './components'

const apiKey = '1417421'

const client=StreamChat.getInstance(apiKey);

const app = () => {
  return (
    <div>
        
        <div className='app_wrapper'>
            <Chat client={client} theme='team light'>
                <ChannelListContainer

                />
                <ChannelContainer
                
                />
            </Chat>
        </div>

    </div>
  )
}

export default app