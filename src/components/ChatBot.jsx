import { useState, useRef, useEffect } from "react";
import { BotMessageSquare, X, SendHorizontal } from "lucide-react";
import avatar from '../assets/avatar.jpg';

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: "bot", text: "Hey! I'm Dipankar.👋\nFeel free to ask me anything about me." }
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    const chatRef = useRef();

    useEffect(() => {
        chatRef.current?.scrollTo(0, chatRef.current.scrollHeight);
    }, [messages]);

    const sendMessage = async () => {
        if (!input.trim() || isTyping) return;

        const userMsg = { role: "user", text: input };
        setMessages((prev) => [...prev, userMsg]);

        setInput("");

        // typing
        setIsTyping(true);

        try {
            const res = await fetch(`${import.meta.env.VITE_NODE_URI}/chat`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ message: input })
            });

            const data = await res.json();

            setMessages((prev) => [
                ...prev,
                { role: "bot", text: data.reply }
            ]);
        } catch (err) {
            console.log(err);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(prev => !prev)}
                className="group fixed bottom-4 sm:bottom-6 right-6 z-50
                flex items-center justify-center
                w-14 h-14 rounded-full 
                bg-[#1e2540] border-t border-white/10 border-x border-white/5
                shadow-[0_10px_20px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)]
                hover:bg-[#252d4d] hover:scale-105 active:scale-95
                transition-all duration-300 ease-out cursor-pointer
                animate-soft-breathe"
            >
                <BotMessageSquare className="text-white/90 w-6 h-6 group-hover:text-white transition-colors" />

                {/* Tooltip */}
                <span className="absolute right-16 px-3 py-1.5 rounded-xl
                   bg-[#1e2540] text-white/80 text-xs font-medium
                   border border-white/5 shadow-xl
                   opacity-0 group-hover:opacity-100 group-hover:-translate-x-2
                   transition-all duration-300 pointer-events-none whitespace-nowrap">
                    Chat with me
                </span>
            </button>

            {/* Chat Modal */}
            {isOpen && (
                <div className="fixed bottom-22 right-5 w-80 h-[480px] 
                    backdrop-blur-xl bg-white/5 border border-white/10 
                    shadow-2xl rounded-2xl flex flex-col overflow-hidden
                    animate-[fadeIn_0.3s_ease]">

                    {/* Header */}
                    <div className="flex justify-between items-center px-4 py-3 
      border-b border-white/10 bg-white/5">

                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <img
                                    src={avatar}
                                    alt="Dipankar"
                                    className="w-9 h-9 pt-[2px] rounded-full object-contain border border-white/20"
                                />
                                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border border-black"></span>
                            </div>

                            {/* Text */}
                            <div>
                                <p className="text-white text-sm font-semibold">
                                    Dipankar_049
                                </p>
                                <p className="text-xs text-gray-400">
                                    AI Assistant
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-gray-400 hover:text-white transition"
                        >
                            <X size={20} className="text-gray-400 cursor-pointer" />
                        </button>
                    </div>

                    {/* Messages */}
                    <div
                        ref={chatRef}
                        className="flex-1 overflow-y-auto p-3 space-y-3 text-sm no-scrollbar"
                    >
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`whitespace-pre-line max-w-[75%] px-3 py-2 rounded-xl ${msg.role === "user"
                                    ? "ml-auto bg-blue-500/80 text-white backdrop-blur-md"
                                    : "bg-white/10 text-gray-200 backdrop-blur-md"
                                    }`}
                            >
                                {msg.text}
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex items-center gap-1 bg-white/10 px-3 py-2 rounded-xl w-fit">
                                <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" />
                            </div>
                        )}
                    </div>

                    {/* Input */}
                    <div className="flex items-center gap-2 p-2 border-t border-white/10 bg-white/5">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                            placeholder="Ask about me..."
                            className="flex-1 px-3 py-2 rounded-lg bg-white/10 text-white 
        placeholder-gray-400 outline-none text-sm"
                        />

                        <button
                            onClick={sendMessage}
                            className="px-3 py-2 rounded-lg bg-blue-500/80 text-white 
        hover:bg-blue-500 transition text-sm"
                        >
                            <SendHorizontal size={18} className="cursor-pointer" />
                        </button>
                    </div>
                    <p className="text-[10px] text-gray-400 text-center px-2 py-1">
                        * This chatbot is in development and may give incorrect answers.
                    </p>
                </div>
            )}
        </>
    );
}