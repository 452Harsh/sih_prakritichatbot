import Image from 'next/image'
import ChatBot from '../../components/ChatBot'

export default function Home() {
  return (
    <div>
      <div className='text-5xl'>PrakritiChatbot</div>
      <ChatBot />
    </div>

  )
}
