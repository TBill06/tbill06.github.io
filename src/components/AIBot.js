import { useState } from 'react';

const AIBot = () => {
  const [text, setText] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
  const handleClick = async () => {
    if (!text.trim()) return;
    
    setIsLoading(true);
    setError("");
    setResponse("");
    
    try {
      const res = await fetch("https://test-api-sooty-psi.vercel.app/api/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: text }),
      });
      
      if (!res.ok) {
        throw new Error(`Server responded with status: ${res.status}`);
      }
      
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      
      while (true) {
        const { done, value } = await reader.read();
        
        if (done) {
          break;
        }
        
        // Decode and process the chunk
        const chunk = decoder.decode(value, { stream: true });
        
        // Process all complete SSE messages
        const lines = chunk.split('\n\n').filter(Boolean);
        
        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const jsonString = line.slice(6).trim();
              const data = JSON.parse(jsonString);
              
              // Check for done message
              if (data.done) {
                console.log("Stream complete");
                continue;
              }
              
              // Check for error
              if (data.error) {
                setError(data.error);
                continue;
              }
              
              // Process text content
              if (data.text) {
                setResponse(prev => prev + data.text);
              }
            } catch (e) {
              console.error('Error parsing JSON:', e, 'Raw data:', line.slice(6));
            }
          }
        }
      }
    } catch (error) {
      console.error("Error fetching AI response: ", error);
      setError("Failed to get response. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <p className="text-white text-2xl font-mono">
        AI Bot
      </p>
      <p className="text-white text-lg font-mono">
        This is a simple AI bot that can answer questions and provide information.
      </p>
      <input
        type="text"
        value={text}
        placeholder="Ask me anything..."
        className="mt-4 p-2 rounded-md border border-gray-300 text-black w-full max-w-lg"
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleClick()}
      />
      <button 
        onClick={handleClick} 
        className="mt-2 p-2 bg-blue-500 text-white rounded-md"
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Ask'}
      </button>
      {error && <p className="mt-2 text-red-500">{error}</p>}
      <div className="mt-4 p-3 bg-gray-800 text-white rounded-md w-full max-w-lg min-h-[100px]">
        <p className="whitespace-pre-wrap">{response || "Response will be displayed here..."}</p>
      </div>
    </div>
  );
}

export default AIBot;