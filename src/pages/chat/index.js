import './style.scss';

//import components
import { Message, CategoryBtnList, ProductList} from '../../components/ui/chat';

const ChatPage = () => {

    //type: 0 message
    //type: 1 category
    //type: 2 products
    const messages  = [
        {who: 'anna', content: 'Hi, I am Anna. Welcome to our business. May I know help you?', type: 0},
        {type: 1},
        {who: 'anna', content: 'Which product do you want to search?I am a student', type: 0},
        {who: 'me', content: 'I want to buy some nutraceutical.', type: 0},
        {who: 'anna', content: 'Great! Thanks for your question. You can buy the several types of nutraceutical as you need. Which brand do you like?', type: 0},
        {who: 'anna', content: 'According to your requirement, maybe these are fit you!', type: 0},
        {type: 2},
        {who: 'me', content: 'Dear Anna. Thank you very much.', type: 0},
        {who: 'anna', content: 'You are welcome! Please ask me if you need else.', type: 0},
        {type: 1}
    ]
    return(
        <div className='chat-container'>
            <div className='message-list'>
                {
                    messages.map((message, index) => (
                        message.type === 0 ?<Message data={message} key={index}/> 
                        : message.type === 1 ? <CategoryBtnList /> : <ProductList />
                    ))
                }
            </div>
            <div className='bottom-section'>
                <input type='text' className='text-input' placeholder='Message to Anna'/>
                <div className='btn'>Send</div>
            </div>
        </div>
    )
}

export default ChatPage;

