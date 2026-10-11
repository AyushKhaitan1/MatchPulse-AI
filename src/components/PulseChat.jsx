import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, Key, Check } from 'lucide-react';
import { askMatchPulseAI } from '../services/aiService';

export default function PulseChat({ currentBall }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: `👋 Hey! I'm **MatchPulse AI**, your live match tactical analyst. 
Ask me anything about captaincy decisions, bowling changes, turning points, or live Dream11 fantasy point swings!`
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState(() => localStorage.getItem('matchpulse_gemini_key') || '');
  const [showKeyInput, setShowKeyInput] = useState(false);
  const messagesEndRef = useRef(null);

  const quickQuestions = [
    "Why was Bumrah held back for the death?",
    "What was the single biggest turning point?",
    "How does this swing Dream11 fantasy points?",
    "Why did Klaasen target Axar in the 15th over?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (questionText) => {
    const query = questionText || input;
    if (!query.trim() || isLoading) return;

    const userMessage = { id: Date.now(), sender: 'user', text: query };
    setMessages((prev) => [...prev, userMessage]);
    if (!questionText) setInput('');
    setIsLoading(true);

    try {
      const reply = await askMatchPulseAI(query, currentBall, apiKey);
      const aiMessage = { id: Date.now() + 1, sender: 'ai', text: reply };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (e) {
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, sender: 'ai', text: "Sorry, I ran into an error processing that tactical query. Please try again." }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveApiKey = (key) => {
    setApiKey(key);
    localStorage.setItem('matchpulse_gemini_key', key);
    setShowKeyInput(false);
  };

  return (
    <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', height: '560px', padding: '16px' }}>
      
      {/* Chat Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '12px', borderBottom: '1px solid var(--border-subtle)', marginBottom: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ background: 'linear-gradient(135deg, #e11d48, #9f1239)', padding: '6px', borderRadius: '8px', display: 'flex' }}>
            <Bot size={16} color="#fff" />
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: '0.95rem' }}>PulseBot • Tactical AI</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
              Live Match Context Aware ({currentBall.over} ov)
            </div>
          </div>
        </div>

        {/* API Key Modal Toggle */}
        <button
          onClick={() => setShowKeyInput(!showKeyInput)}
          className="btn-secondary"
          style={{ fontSize: '0.72rem', padding: '4px 8px' }}
          title="Configure optional Gemini API Key"
        >
          <Key size={12} /> {apiKey ? "Gemini Key: Active" : "Add Custom API Key"}
        </button>
      </div>

      {/* Optional API Key Input Box */}
      {showKeyInput && (
        <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '10px', borderRadius: '8px', marginBottom: '10px', border: '1px solid var(--border-subtle)' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
            Optional: Enter Google Gemini API Key for unbounded live LLM generation (Built-in high-fidelity sports reasoning works without a key!).
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <input
              type="password"
              placeholder="AIzaSy..."
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              style={{
                flex: 1,
                background: 'rgba(0,0,0,0.4)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '6px',
                padding: '6px 10px',
                color: '#fff',
                fontSize: '0.8rem'
              }}
            />
            <button
              onClick={() => handleSaveApiKey(apiKey)}
              className="btn-primary"
              style={{ padding: '6px 12px', fontSize: '0.75rem' }}
            >
              <Check size={14} /> Save
            </button>
          </div>
        </div>
      )}

      {/* Messages List */}
      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px', paddingRight: '4px' }}>
        {messages.map((m) => (
          <div
            key={m.id}
            style={{
              display: 'flex',
              gap: '8px',
              alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
              maxWidth: '88%'
            }}
          >
            {m.sender === 'ai' && (
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#e11d48', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                <Bot size={15} color="#fff" />
              </div>
            )}

            <div
              style={{
                background: m.sender === 'user' ? 'linear-gradient(135deg, #e11d48, #be123c)' : 'rgba(255, 255, 255, 0.06)',
                border: m.sender === 'user' ? 'none' : '1px solid var(--border-subtle)',
                color: '#fff',
                padding: '10px 14px',
                borderRadius: m.sender === 'user' ? '14px 14px 2px 14px' : '14px 14px 14px 2px',
                fontSize: '0.85rem',
                lineHeight: 1.5,
                whiteSpace: 'pre-line'
              }}
            >
              {m.text}
            </div>

            {m.sender === 'user' && (
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                <User size={15} color="#fff" />
              </div>
            )}
          </div>
        ))}

        {isLoading && (
          <div style={{ display: 'flex', gap: '8px', alignSelf: 'flex-start' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#e11d48', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Bot size={15} color="#fff" />
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.06)', padding: '10px 14px', borderRadius: '14px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              Analyzing live match telemetry and pitch data...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Quick Prompt Chips */}
      <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', padding: '8px 0', marginTop: '6px' }}>
        {quickQuestions.map((q, i) => (
          <button
            key={i}
            onClick={() => handleSend(q)}
            style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '999px',
              padding: '4px 10px',
              color: 'var(--text-muted)',
              fontSize: '0.72rem',
              whiteSpace: 'nowrap',
              cursor: 'pointer',
              transition: 'all 0.15s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = 'var(--text-muted)';
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
            }}
          >
            {q}
          </button>
        ))}
      </div>

      {/* Input Field */}
      <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
        <input
          type="text"
          placeholder="Ask anything about tactics, matchups, or turning points..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          style={{
            flex: 1,
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '10px',
            padding: '10px 14px',
            color: '#fff',
            fontSize: '0.85rem',
            outline: 'none'
          }}
        />
        <button
          onClick={() => handleSend()}
          className="btn-primary"
          disabled={!input.trim() || isLoading}
          style={{ padding: '0 16px', borderRadius: '10px' }}
        >
          <Send size={15} />
        </button>
      </div>

    </div>
  );
}
