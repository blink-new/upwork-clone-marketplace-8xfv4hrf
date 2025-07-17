import { useState, useEffect, useRef } from 'react'
import { Send, Search, MoreVertical, Paperclip, Smile } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Card, CardContent } from '../components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'
import { Badge } from '../components/ui/badge'

export default function MessagesPage() {
  const [selectedChatId, setSelectedChatId] = useState(1)
  const [newMessage, setNewMessage] = useState('')
  const [conversations, setConversations] = useState([])
  const [messages, setMessages] = useState([])
  const [user, setUser] = useState(null)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    const unsubscribe = blink.auth.onAuthStateChanged((state) => {
      setUser(state.user)
    })
    return unsubscribe
  }, [])

  useEffect(() => {
    // Mock conversations
    setConversations([
      {
        id: 1,
        name: 'TechCorp Inc.',
        avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop',
        lastMessage: 'Great progress on the project! Can we schedule a call?',
        time: '2h',
        unread: 2,
        online: true
      },
      {
        id: 2,
        name: 'StartupXYZ',
        avatar: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=150&h=150&fit=crop',
        lastMessage: 'The designs look amazing. Just a few minor changes needed.',
        time: '5h',
        unread: 1,
        online: false
      },
    ])
  }, [])

  useEffect(() => {
    if (!selectedChatId) return

    const channel = blink.realtime.channel(`chat-${selectedChatId}`)

    const setupRealtime = async () => {
      await channel.subscribe()

      channel.onMessage((message) => {
        setMessages((prev) => [...prev, message.data])
      })

      const history = await channel.getMessages({ limit: 50 })
      setMessages(history.map(m => m.data))
    }

    setupRealtime()

    return () => {
      channel.unsubscribe()
    }
  }, [selectedChatId])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const selectedConversation = conversations.find(conv => conv.id === selectedChatId)

  const handleSendMessage = async () => {
    if (newMessage.trim() && user) {
      const channel = blink.realtime.channel(`chat-${selectedChatId}`)
      await channel.publish('message', {
        id: Date.now(),
        sender: user.id,
        content: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        avatar: user.avatar_url
      })
      setNewMessage('')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden" style={{ height: 'calc(100vh - 8rem)' }}>
          <div className="flex h-full">
            {/* Conversations Sidebar */}
            <div className="w-1/3 border-r border-gray-200 flex flex-col">
              {/* Header */}
              <div className="p-4 border-b border-gray-200">
                <h1 className="text-xl font-semibold text-gray-900 mb-4">Messages</h1>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    type="text"
                    placeholder="Search conversations..."
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Conversations List */}
              <div className="flex-1 overflow-y-auto">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    onClick={() => setSelectedChatId(conversation.id)}
                    className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                      selectedChatId === conversation.id ? 'bg-primary/5 border-r-2 border-r-primary' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={conversation.avatar} />
                          <AvatarFallback>
                            {conversation.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        {conversation.online && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium text-gray-900 truncate">
                            {conversation.name}
                          </h3>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs text-gray-500">{conversation.time}</span>
                            {conversation.unread > 0 && (
                              <Badge className="bg-primary text-white text-xs px-2 py-1 rounded-full">
                                {conversation.unread}
                              </Badge>
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 truncate mt-1">
                          {conversation.lastMessage}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col">
              {selectedConversation ? (
                <>
                  {/* Chat Header */}
                  <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={selectedConversation.avatar} />
                          <AvatarFallback>
                            {selectedConversation.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        {selectedConversation.online && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                        )}
                      </div>
                      <div>
                        <h2 className="font-semibold text-gray-900">{selectedConversation.name}</h2>
                        <p className="text-sm text-gray-600">
                          {selectedConversation.online ? 'Online' : 'Last seen 2h ago'}
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`flex items-end space-x-2 max-w-xs lg:max-w-md ${
                          message.sender === 'me' ? 'flex-row-reverse space-x-reverse' : ''
                        }`}>
                          {message.sender === 'client' && (
                            <Avatar className="w-8 h-8">
                              <AvatarImage src={message.avatar} />
                              <AvatarFallback>C</AvatarFallback>
                            </Avatar>
                          )}
                          <div
                            className={`px-4 py-2 rounded-lg ${
                              message.sender === 'me'
                                ? 'bg-primary text-white'
                                : 'bg-gray-100 text-gray-900'
                            }`}
                          >
                            <p className="text-sm">{message.content}</p>
                            <p className={`text-xs mt-1 ${
                              message.sender === 'me' ? 'text-primary-foreground/70' : 'text-gray-500'
                            }`}>
                              {message.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Message Input */}
                  <div className="p-4 border-t border-gray-200">
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Paperclip className="w-4 h-4" />
                      </Button>
                      <div className="flex-1 relative">
                        <Input
                          type="text"
                          placeholder="Type a message..."
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                          className="pr-10"
                        />
                        <Button variant="ghost" size="sm" className="absolute right-1 top-1/2 transform -translate-y-1/2">
                          <Smile className="w-4 h-4" />
                        </Button>
                      </div>
                      <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No conversation selected</h3>
                    <p className="text-gray-600">Choose a conversation from the sidebar to start messaging</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}