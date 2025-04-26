
import React, { useState } from 'react';
import { Package, Star, PackageCheck, Bot } from 'lucide-react';
import AiChatDialog from '../components/AiChatDialog';
import { Button } from "@/components/ui/button";

const AISuggestionPage = () => {
  const [chatOpen, setChatOpen] = useState(false);

  const suggestions = [
    {
      title: "Best Value Bundle",
      description: "GPU + PSU + Cabinet combo for optimal performance",
      icon: <Package className="w-6 h-6" />,
      rating: 4.8
    },
    {
      title: "Popular Choice",
      description: "Most frequently purchased by similar users",
      icon: <Star className="w-6 h-6" />,
      rating: 4.9
    },
    {
      title: "Recommended Upgrade",
      description: "Based on your current hardware configuration",
      icon: <PackageCheck className="w-6 h-6" />,
      rating: 4.7
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 relative min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-purple-600">AI-Powered Suggestions</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {suggestions.map((suggestion, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 p-3 rounded-full">
                {suggestion.icon}
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-lg">{suggestion.title}</h3>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm text-gray-600">{suggestion.rating}</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600">{suggestion.description}</p>
            <button className="mt-4 w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors">
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Floating Chat with AI Button */}
      <Button
        variant="default"
        onClick={() => setChatOpen(true)}
        className="fixed bottom-8 right-8 flex items-center gap-2 rounded-full px-5 py-3 bg-purple-600 text-white shadow-lg hover:bg-purple-700 z-50"
        style={{ boxShadow: "0 6px 24px 2px #9b87f533" }}
      >
        <Bot className="h-5 w-5" />
        Chat with AI
      </Button>
      <AiChatDialog open={chatOpen} onOpenChange={setChatOpen} />
    </div>
  );
};

export default AISuggestionPage;

