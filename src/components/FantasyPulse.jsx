import React from 'react';
import { Award, TrendingUp, Users, Zap, Shield, Crown } from 'lucide-react';
import { INITIAL_FANTASY_LEADERBOARD } from '../data/matchData';

export default function FantasyPulse({ currentBall }) {
  // Compute dynamic fantasy points adjustments based on current ball
  const players = INITIAL_FANTASY_LEADERBOARD.map((p) => {
    let dynamicPts = p.pts;
    let highlight = false;

    if (p.id === 'hardik' && parseFloat(currentBall.over) >= 17.1) {
      dynamicPts = parseFloat(currentBall.over) >= 20.1 ? 103 : 92;
      highlight = true;
    }
    if (p.id === 'bumrah' && parseFloat(currentBall.over) >= 18.3) {
      dynamicPts = 89;
      highlight = true;
    }

    return { ...p, currentPts: dynamicPts, highlight };
  });

  return (
    <div className="glass-panel" style={{ padding: '20px', height: '100%' }}>
      
      {/* Title */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ background: 'linear-gradient(135deg, #e11d48, #9f1239)', padding: '5px', borderRadius: '8px', display: 'flex' }}>
            <Award size={15} color="#fff" />
          </div>
          <h3 style={{ fontSize: '1rem', fontWeight: 800 }}>Dream11 Live Fantasy Tracker</h3>
        </div>
        <span style={{ fontSize: '0.72rem', color: '#f43f5e', fontWeight: 700, background: 'rgba(244, 63, 94, 0.1)', padding: '3px 8px', borderRadius: '6px' }}>
          Real-Time Volatility
        </span>
      </div>

      <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '14px' }}>
        Live fantasy point adjustments and captaincy rank swings based on the current match state ({currentBall.over} ov).
      </p>

      {/* Players List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '420px', overflowY: 'auto' }}>
        {players.map((p) => (
          <div
            key={p.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: p.highlight ? 'rgba(225, 29, 72, 0.12)' : 'rgba(255, 255, 255, 0.03)',
              border: p.highlight ? '1px solid rgba(225, 29, 72, 0.35)' : '1px solid var(--border-subtle)',
              padding: '10px 12px',
              borderRadius: '10px',
              transition: 'all 0.2s ease'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: p.team === 'IND' ? 'rgba(56, 189, 248, 0.2)' : 'rgba(16, 185, 129, 0.2)',
                  color: p.team === 'IND' ? '#38bdf8' : '#10b981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '0.75rem',
                  border: `1px solid ${p.team === 'IND' ? '#38bdf8' : '#10b981'}`
                }}
              >
                {p.team}
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontWeight: 700, fontSize: '0.86rem', color: '#fff' }}>{p.name}</span>
                  {parseInt(p.captaincy) > 25 && (
                    <Crown size={12} color="#fbbf24" fill="#fbbf24" title="High Captaincy Pick" />
                  )}
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>
                  {p.role} • C: {p.captaincy} • Sel: {p.selectedBy}
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#fef08a' }}>
                {p.currentPts} <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>pts</span>
              </div>
              <div
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  color: p.rankImpact.startsWith('+') ? '#4ade80' : (p.rankImpact.startsWith('-') ? '#f87171' : 'var(--text-dim)')
                }}
              >
                {p.rankImpact}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
