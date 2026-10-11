import React from 'react';
import { Target, ChevronRight, User } from 'lucide-react';

export default function BallTicker({ allBalls, currentIndex, onSelectBall }) {
  const currentBall = allBalls[currentIndex];

  const getBallClass = (ball) => {
    if (ball.isWicket) return 'ball-bubble ball-wicket';
    if (ball.isSix) return 'ball-bubble ball-six';
    if (ball.isBoundary) return 'ball-bubble ball-four';
    if (ball.runs === 0) return 'ball-bubble ball-dot';
    return 'ball-bubble ball-single';
  };

  const getBallLabel = (ball) => {
    if (ball.isWicket) return 'W';
    return ball.runs;
  };

  return (
    <div className="glass-panel" style={{ padding: '20px 24px', marginBottom: '24px' }}>
      
      {/* Top Striker & Bowler HUD */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '16px', paddingBottom: '14px', borderBottom: '1px solid var(--border-subtle)' }}>
        
        {/* Batsmen */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 700 }}>
            Batting
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#fff' }}>
              {currentBall.batsman}*
            </span>
            <span style={{ fontSize: '0.8rem', color: '#38bdf8', background: 'rgba(56, 189, 248, 0.1)', padding: '2px 6px', borderRadius: '4px' }}>
              Striker
            </span>
          </div>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            Non-striker: {currentBall.nonStriker}
          </div>
        </div>

        {/* Bowler */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 700 }}>
            Bowling
          </div>
          <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#fff' }}>
            {currentBall.bowler}
          </div>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            Over {currentBall.over} • Pace & Reverse Variation
          </div>
        </div>

        {/* Ball Outcome Badge */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '12px' }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 700 }}>
              This Delivery
            </div>
            <div style={{ fontWeight: 800, fontSize: '1rem', color: currentBall.isWicket ? '#f43f5e' : (currentBall.isBoundary || currentBall.isSix ? '#fbbf24' : '#fff') }}>
              {currentBall.isWicket ? "WICKET!" : (currentBall.isSix ? "SIX!" : (currentBall.isBoundary ? "FOUR!" : `${currentBall.runs} Run(s)`))}
            </div>
          </div>
          <div className={getBallClass(currentBall)} style={{ width: '42px', height: '42px', fontSize: '1rem' }}>
            {getBallLabel(currentBall)}
          </div>
        </div>

      </div>

      {/* Ball by Ball Reel Strip */}
      <div style={{ marginBottom: '14px' }}>
        <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '8px' }}>
          Match Delivery Reel (Click to jump to any ball):
        </div>
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '6px' }}>
          {allBalls.map((b, idx) => (
            <div
              key={idx}
              onClick={() => onSelectBall(idx)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                cursor: 'pointer',
                opacity: idx <= currentIndex ? 1 : 0.4,
                transform: idx === currentIndex ? 'scale(1.1)' : 'scale(1)',
                transition: 'all 0.15s ease'
              }}
            >
              <div className={getBallClass(b)}>
                {getBallLabel(b)}
              </div>
              <span style={{ fontSize: '0.65rem', color: idx === currentIndex ? 'var(--accent-red)' : 'var(--text-dim)', fontWeight: idx === currentIndex ? 800 : 500 }}>
                {b.over}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Live Ball Commentary */}
      <div style={{ background: 'rgba(0,0,0,0.35)', padding: '12px 16px', borderRadius: '10px', borderLeft: '4px solid var(--accent-red)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
          <span style={{ fontWeight: 800, fontSize: '0.85rem', color: '#fff' }}>
            Ball {currentBall.over}:
          </span>
          {currentBall.isWicket && (
            <span style={{ background: '#f43f5e', color: '#fff', fontSize: '0.7rem', fontWeight: 800, padding: '1px 6px', borderRadius: '4px' }}>
              {currentBall.wicketDetail}
            </span>
          )}
        </div>
        <p style={{ fontSize: '0.86rem', color: 'var(--text-main)', lineHeight: 1.45 }}>
          {currentBall.commentary}
        </p>
      </div>

    </div>
  );
}
