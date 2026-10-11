import React from 'react';
import { Play, Pause, SkipForward, RotateCcw, Zap, Sparkles, TrendingUp, ShieldAlert, Award } from 'lucide-react';

export default function ScoreboardHeader({
  matchInfo,
  currentBall,
  isPlaying,
  setIsPlaying,
  playbackSpeed,
  setPlaybackSpeed,
  onNextBall,
  onPrevBall,
  onReset,
  onOpenCatchMeUp,
  onJumpToTurningPoint
}) {
  const isMatchFinished = currentBall.ballsLeft <= 0;

  return (
    <header className="glass-panel" style={{ padding: '20px 24px', marginBottom: '24px' }}>
      {/* Top Meta Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span className="brand-badge">
            <Sparkles size={13} /> Dream11 AI Labs
          </span>
          <span className="live-indicator">
            <span className="live-dot"></span> {isMatchFinished ? "MATCH CONCLUDED" : "LIVE SIMULATOR"}
          </span>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>
            {matchInfo.title}
          </span>
        </div>

        {/* Quick Action: Catch Me Up Button */}
        <button
          onClick={onOpenCatchMeUp}
          className="btn-primary"
          style={{
            background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
            boxShadow: '0 4px 14px rgba(245, 158, 11, 0.35)',
            fontSize: '0.85rem',
            padding: '6px 14px'
          }}
        >
          <Zap size={15} fill="#fff" />
          ⚡ Catch Me Up (30s Fan Recap)
        </button>
      </div>

      {/* Main Score & Teams Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', alignItems: 'center' }}>
        
        {/* Teams and Score Display */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          {/* Bowling Team */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '2rem' }}>{matchInfo.teamBowling.flag}</span>
            <div>
              <div style={{ fontWeight: 800, fontSize: '1.2rem', color: matchInfo.teamBowling.color }}>
                {matchInfo.teamBowling.shortName}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>176/7 (20 ov)</div>
            </div>
          </div>

          <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-dim)' }}>VS</div>

          {/* Batting Team (Chasing) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '2rem' }}>{matchInfo.teamBatting.flag}</span>
            <div>
              <div style={{ fontWeight: 800, fontSize: '1.2rem', color: matchInfo.teamBatting.color }}>
                {matchInfo.teamBatting.shortName}
              </div>
              <div style={{ fontWeight: 900, fontSize: '1.6rem', color: '#fff', letterSpacing: '-0.03em' }}>
                {currentBall.score}
              </div>
            </div>
          </div>

          {/* Equation Box */}
          <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '8px 14px', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Equation</div>
            <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#fef08a' }}>
              {isMatchFinished ? "IND won by 7 runs!" : `${currentBall.needed} off ${currentBall.ballsLeft} balls`}
            </div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>
              Req. RR: {currentBall.reqRate} • Ov: {currentBall.over}
            </div>
          </div>
        </div>

        {/* Live Simulation Player Controls */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '10px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(0,0,0,0.3)', padding: '4px 8px', borderRadius: '12px' }}>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="btn-primary"
              style={{ padding: '8px 14px', borderRadius: '8px' }}
              title={isPlaying ? "Pause Simulation" : "Play Simulation"}
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              <span style={{ fontSize: '0.8rem' }}>{isPlaying ? "Pause" : "Play"}</span>
            </button>

            <button
              onClick={onNextBall}
              className="btn-secondary"
              disabled={isMatchFinished}
              style={{ padding: '8px 12px' }}
              title="Next Ball"
            >
              <SkipForward size={15} />
            </button>

            <button
              onClick={onReset}
              className="btn-secondary"
              style={{ padding: '8px 12px' }}
              title="Reset to 14.1 ov"
            >
              <RotateCcw size={15} />
            </button>
          </div>

          {/* Speed toggles */}
          <div style={{ display: 'flex', gap: '4px', background: 'rgba(255, 255, 255, 0.05)', padding: '3px', borderRadius: '8px' }}>
            {[1, 2, 5].map((spd) => (
              <button
                key={spd}
                onClick={() => setPlaybackSpeed(spd)}
                style={{
                  background: playbackSpeed === spd ? 'var(--accent-red)' : 'transparent',
                  color: playbackSpeed === spd ? '#fff' : 'var(--text-muted)',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '4px 8px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                {spd}x
              </button>
            ))}
          </div>

          {/* Key Moment Jumpers */}
          <button
            onClick={() => onJumpToTurningPoint("15.5")}
            className="btn-secondary"
            style={{ fontSize: '0.72rem', padding: '6px 10px', borderColor: 'rgba(234, 179, 8, 0.4)' }}
          >
            Over 15.5 (Klaasen 24)
          </button>
          <button
            onClick={() => onJumpToTurningPoint("17.1")}
            className="btn-secondary"
            style={{ fontSize: '0.72rem', padding: '6px 10px', borderColor: 'rgba(225, 29, 72, 0.4)' }}
          >
            Over 17.1 (Klaasen Wkt)
          </button>
          <button
            onClick={() => onJumpToTurningPoint("20.1")}
            className="btn-secondary"
            style={{ fontSize: '0.72rem', padding: '6px 10px', borderColor: 'rgba(56, 189, 248, 0.4)' }}
          >
            Over 20.1 (Sky Catch)
          </button>
        </div>
      </div>

      {/* Win Probability Bar */}
      <div style={{ marginTop: '18px', paddingTop: '14px', borderTop: '1px solid var(--border-subtle)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 700, marginBottom: '6px' }}>
          <span style={{ color: 'var(--color-india)' }}>
            🇮🇳 INDIA {currentBall.indWinProb}%
          </span>
          <span style={{ color: 'var(--text-muted)' }}>
            AI LIVE WIN PROBABILITY
          </span>
          <span style={{ color: 'var(--color-sa)' }}>
            SOUTH AFRICA {currentBall.saWinProb}% 🇿🇦
          </span>
        </div>
        <div style={{ height: '8px', width: '100%', background: 'rgba(255,255,255,0.06)', borderRadius: '999px', overflow: 'hidden', display: 'flex' }}>
          <div
            style={{
              width: `${currentBall.indWinProb}%`,
              background: 'linear-gradient(90deg, #0284c7, #38bdf8)',
              transition: 'width 0.4s ease'
            }}
          />
          <div
            style={{
              width: `${currentBall.saWinProb}%`,
              background: 'linear-gradient(90deg, #10b981, #059669)',
              transition: 'width 0.4s ease'
            }}
          />
        </div>
      </div>
    </header>
  );
}
