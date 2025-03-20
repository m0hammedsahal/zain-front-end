import { motion } from 'framer-motion';
import { MessageSquare, RefreshCcw, Users } from 'lucide-react';
import { useState } from 'react';

const Collaboration = () => {
  // State for messages
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Designer', text: "I've updated the living room layout", time: '10:30 AM' },
    { id: 2, sender: 'Client', text: 'The new design looks great!', time: '10:32 AM' },
  ]);

  // State for the current message input
  const [inputMessage, setInputMessage] = useState('');

  // Function to handle sending a message
  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return; // Don't send empty messages

    // Create a new message object
    const newMessage = {
      id: messages.length + 1, // Generate a unique ID
      sender: 'Client', // Assume the current user is the Client
      text: inputMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), // Current time
    };

    // Add the new message to the messages array
    setMessages([...messages, newMessage]);

    // Clear the input field
    setInputMessage('');
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Real-Time Collaboration
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience seamless communication and instant design updates with our real-time collaboration tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Chat Interface Demo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black/40 rounded-2xl p-6 backdrop-blur-sm border border-amber-400/10"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <MessageSquare className="w-6 h-6 text-amber-400" />
                <h3 className="text-xl font-semibold text-white">Live Chat</h3>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-500 text-sm">Online</span>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="space-y-4 mb-6 h-64 overflow-y-auto">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex flex-col ${
                    message.sender === 'Designer' ? 'items-start' : 'items-end'
                  }`}
                >
                  <div
                    className={`px-4 py-2 rounded-2xl max-w-xs ${
                      message.sender === 'Designer'
                        ? 'bg-amber-400/10 text-white'
                        : 'bg-amber-400 text-black'
                    }`}
                  >
                    <p className="text-sm font-medium mb-1">{message.sender}</p>
                    <p>{message.text}</p>
                  </div>
                  <span className="text-xs text-gray-400 mt-1">{message.time}</span>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Type your message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSendMessage(); // Send message on Enter key
                }}
                className="flex-1 px-4 py-2 bg-black/20 border border-amber-400/20 rounded-lg focus:outline-none focus:border-amber-400/40 text-white placeholder-gray-400"
              />
              <button
                onClick={handleSendMessage}
                className="px-4 py-2 bg-amber-400 text-black rounded-lg hover:bg-amber-300 transition-colors"
              >
                Send
              </button>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-amber-400/10 rounded-lg flex items-center justify-center text-amber-400">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Client-Designer Communication
                </h3>
                <p className="text-gray-300">
                  Direct communication channel between clients and designers for instant feedback and updates.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-amber-400/10 rounded-lg flex items-center justify-center text-amber-400">
                <RefreshCcw className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Real-Time Design Updates
                </h3>
                <p className="text-gray-300">
                  See design changes as they happen with our real-time 3D visualization updates.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;