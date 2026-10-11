import React from 'react';
import { X, Zap, Target, TrendingUp, ShieldCheck, Flame, MessageSquare } from 'lucide-react';
import { generateCatchMeUpBrief } from '../services/aiService';

export default function CatchMeUpModal({ isOpen, onClose, currentBall, allBalls, currentIndex, onSwitchToChat }) {
  if (!isOpen) return null;

  const brief = generateCatchMeUpBrief(currentBall, allBalls, currentIndex);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(8px)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel"
        style={{
          maxWidth: '650px',
          width: '100%',
          background: 'rgba(15, 23, 42, 0.95)',
          border: '1px solid rgba(245, 158, 11, 0.4)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(245, 158, 11, 0.2)',
          padding: '28px',
          position: 'relative',
          borderRadius: '18px'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(255, 255, 255, 0.1)',
            border: 'none',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            color: '#fff',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <div style={{ background: '#f59e0b', padding: '6px', borderRadius: '10px', display: 'flex' }}>
            <Zap size={20} fill="#fff" color="#fff" />
          </div>
          <div>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 800 }}>⚡ 30-Second Fan Catch-Up</h2>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Missed the last few overs? Here's everything you need to know right now.
            </p>
          </div>
        </div>

        {/* Momentum Indicator Pill */}
        <div style={{ margin: '16px 0', display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 255, 255, 0.06)', padding: '6px 14px', borderRadius: '999px', border: '1px solid var(--border-subtle)' }}>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 700 }}>Momentum:</span>
          <span style={{ fontSize: '0.88rem', fontWeight: 800, color: '#fef08a' }}>{brief.momentumStatus}</span>
        </div>

        {/* 4 Core Briefing Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          
          {/* Card 1: Situation */}
          <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '12px 16px', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', color: '#38bdf8', fontWeight: 700, fontSize: '0.85rem' }}>
              <Target size={15} /> Current Situation
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-main)', lineHeight: 1.4 }}>
              {brief.situationNarrative}
            </p>
          </div>

          {/* Card 2: Turning Point */}
          <div style={{ background: 'rgba(245, 158, 11, 0.05)', padding: '12px 16px', borderRadius: '12px', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', color: '#fbbf24', fontWeight: 700, fontSize: '0.85rem' }}>
              <Flame size={15} /> Why The Match Swung
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-main)', lineHeight: 1.4 }}>
              {brief.turningPointHighlight}
            </p>
          </div>

          {/* Card 3: Tactical Battle */}
          <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '12px 16px', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', color: '#a855f7', fontWeight: 700, fontSize: '0.85rem' }}>
              <ShieldCheck size={15} /> Active Tactical Battle
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-main)', lineHeight: 1.4 }}>
              {brief.tacticalBattle}
            </p>
          </div>

          {/* Card 4: Dream11 Fantasy Alert */}
          <div style={{ background: 'rgba(225, 29, 72, 0.06)', padding: '12px 16px', borderRadius: '12px', border: '1px solid rgba(225, 29, 72, 0.25)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', color: '#f43f5e', fontWeight: 700, fontSize: '0.85rem' }}>
              <TrendingUp size={15} /> Dream11 Fantasy Impact
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-main)', lineHeight: 1.4 }}>
              {brief.fantasyImpact}
            </p>
          </div>

        </div>

        {/* Footer Actions */}
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
          <button
            onClick={() => {
              onClose();
              if (onSwitchToChat) onSwitchToChat();
            }}
            className="btn-secondary"
            style={{ fontSize: '0.85rem' }}
          >
            <MessageSquare size={14} /> Ask AI More Questions
          </button>
          <button
            onClick={onClose}
            className="btn-primary"
            style={{ fontSize: '0.85rem' }}
          >
            Got it, back to match
          </button>
        </div>

      </div>
    </div>
  );
}
