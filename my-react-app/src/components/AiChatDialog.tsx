
import React, { useState, useRef } from 'react';
import { Bot, SendHorizontal, X, Mic, MicOff } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const AiChatDialog = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<{ role: 'user' | 'ai'; content: string }>>([]);
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const { toast } = useToast();

  const handleSendMessage = () => {
    if (!message.trim()) return;

    // Add user message to chat
    setChatHistory(prev => [...prev, { role: 'user', content: message }]);
    setMessage('');

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      setChatHistory(prev => [...prev, {
        role: 'ai',
        content: "Hello! I'm your AI assistant. I can help you find products, answer questions, and provide recommendations. How can I help you today?"
      }]);
    }, 1000);
  };

  // Speech recognition handlers
  const startListening = () => {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      toast({
        title: "Voice not supported",
        description: "Sorry, your browser does not support speech recognition.",
        variant: "destructive",
      });
      return;
    }
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!recognitionRef.current) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.lang = 'en-US';
      recognitionRef.current.interimResults = false;
      recognitionRef.current.maxAlternatives = 1;

      recognitionRef.current.onresult = (event: SpeechRecognitionEvent) => {
        const transcript = event.results[0][0].transcript;
        setMessage(m => (m ? `${m} ${transcript}` : transcript));
      };
      recognitionRef.current.onerror = (event: any) => {
        toast({
          title: "Voice Error",
          description: "Could not recognize your speech.",
          variant: "destructive",
        });
        setListening(false);
      };
      recognitionRef.current.onend = () => setListening(false);
    }
    setListening(true);
    recognitionRef.current.start();
  };

  const stopListening = () => {
    if (recognitionRef.current && listening) {
      recognitionRef.current.stop();
    }
    setListening(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-purple-600" />
            AI Assistant
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col h-[400px]">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {chatHistory.map((chat, index) => (
              <div
                key={index}
                className={`flex ${
                  chat.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`rounded-lg p-3 max-w-[80%] ${
                    chat.role === 'user'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {chat.content}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t p-4">
            <div className="flex gap-2 items-end">
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                disabled={listening}
              />
              <Button
                type="button"
                onClick={listening ? stopListening : startListening}
                variant={listening ? "secondary" : "ghost"}
                size="icon"
                className={`mb-1 ${listening ? 'animate-pulse bg-purple-100' : ''}`}
                aria-label={listening ? "Stop Recording" : "Start Recording"}
              >
                {listening ? (
                  <MicOff className="h-5 w-5 text-purple-600" />
                ) : (
                  <Mic className="h-5 w-5 text-purple-600" />
                )}
              </Button>
              <Button onClick={handleSendMessage} className="self-end mb-1" disabled={listening}>
                <SendHorizontal className="h-4 w-4" />
              </Button>
            </div>
            {listening && (
              <div className="flex items-center gap-2 text-xs text-purple-700 mt-1 animate-pulse">
                <Mic className="h-3 w-3" />
                Listening... Speak now
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AiChatDialog;

