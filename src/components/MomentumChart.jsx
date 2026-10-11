import React, { useState } from 'react';
import { Activity, Flame, Shield, ArrowUpRight, ArrowDownRight, Info, AlertTriangle } from 'lucide-react';

export default function MomentumChart({ allBalls, currentIndex, onSelectBall }) {
  const [selectedPoint, setSelectedPoint] = useState(null);

  // SVG dimensions
  const width = 800;
  const height = 220;
  const paddingX = 40;
  const paddingY = 30;

  // Calculate coordinates for all balls
  const points = allBalls.map((b, idx) => {
    const x = paddingX + (idx / (allBalls.length - 1)) * (width - 2 * paddingX);
    // Win prob is 0 to 100, y maps 100% to top, 0% to bottom
    const y = (height - paddingY) - (b.indWinProb / 100) * (height - 2 * paddingY);
    return { x, y, ball: b, index: idx };
  });

  // Construct SVG Path
  const linePath = points.reduce((acc, p, idx) => {
    return `${acc} ${idx === 0 ? 'M' : 'L'} ${p.x} ${p.y}`;
  }, '');

  // Area path for gradient fill below line
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${height - paddingY} L ${points[0].x} ${height - paddingY} Z`;

  // Active turning point to highlight in the card
  const activeDetail = selectedPoint || allBalls[currentIndex]?.turningPoint
    ? (selectedPoint || { ball: allBalls[currentIndex], index: currentIndex })
    : null;

  return (
    <div className="glass-panel" style={{ padding: '20px 24px', marginBottom: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Activity size={18} color="var(--accent-red)" />
          <h2 style={{ fontSize: '1.1rem', fontWeight: 700 }}>AI Live Momentum & Turning Point Radar</h2>
        </div>
        <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '14px' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: 10, height: 10, background: '#38bdf8', borderRadius: '50%' }}></span>
            IND Win Probability
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: 10, height: 10, background: '#f59e0b', borderRadius: '50%', boxShadow: '0 0 6px #f59e0b' }}></span>
            Turning Point Marker
          </span>
        </div>
      </div>

      {/* SVG Chart */}
      <div style={{ width: '100%', overflowX: 'auto', position: 'relative' }}>
        <svg
          viewBox={`0 0 ${width} ${height}`}
          style={{ width: '100%', height: 'auto', minHeight: '190px' }}
        >
          <defs>
            <linearGradient id="probGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.0" />
            </linearGradient>
            <radialGradient id="turningGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="1" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Background grid lines */}
          <line x1={paddingX} y1={paddingY} x2={width - paddingX} y2={paddingY} stroke="rgba(255,255,255,0.08)" strokeDasharray="4 4" />
          <line x1={paddingX} y1={(height - paddingY) / 2 + paddingY / 2} x2={width - paddingX} y2={(height - paddingY) / 2 + paddingY / 2} stroke="rgba(255,255,255,0.08)" strokeDasharray="4 4" />
          <line x1={paddingX} y1={height - paddingY} x2={width - paddingX} y2={height - paddingY} stroke="rgba(255,255,255,0.15)" />

          {/* 50% parity baseline text */}
          <text x={paddingX - 5} y={paddingY + 5} fill="rgba(255,255,255,0.4)" fontSize="10" textAnchor="end">100%</text>
          <text x={paddingX - 5} y={(height - paddingY) / 2 + paddingY / 2 + 3} fill="rgba(255,255,255,0.4)" fontSize="10" textAnchor="end">50%</text>
          <text x={paddingX - 5} y={height - paddingY + 3} fill="rgba(255,255,255,0.4)" fontSize="10" textAnchor="end">0%</text>

          {/* Area Fill */}
          <path d={areaPath} fill="url(#probGradient)" />

          {/* Main Curve Line */}
          <path
            d={linePath}
            fill="none"
            stroke="#38bdf8"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Ball nodes & Turning Point nodes */}
          {points.map((p) => {
            const isTurningPoint = p.ball.turningPoint !== null;
            const isCurrent = p.index === currentIndex;
            const isSelected = selectedPoint && selectedPoint.index === p.index;

            return (
              <g
                key={p.index}
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setSelectedPoint(p);
                  onSelectBall(p.index);
                }}
              >
                {/* Current Playhead Pulse */}
                {isCurrent && (
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r="12"
                    fill="none"
                    stroke="#e11d48"
                    strokeWidth="2"
                    style={{ animation: 'live-blink 1s infinite' }}
                  />
                )}

                {/* Turning Point Glow Halo */}
                {isTurningPoint && (
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r="14"
                    fill="url(#turningGlow)"
                    opacity="0.8"
                  />
                )}

                {/* Circle Marker */}
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={isTurningPoint ? 6 : (isCurrent ? 5 : 3)}
                  fill={isTurningPoint ? '#fbbf24' : (isCurrent ? '#e11d48' : '#38bdf8')}
                  stroke={isSelected ? '#fff' : 'rgba(0,0,0,0.6)'}
                  strokeWidth={isSelected ? 3 : 1.5}
                />

                {/* Over label on key turns */}
                {isTurningPoint && (
                  <text
                    x={p.x}
                    y={p.y - 12}
                    fill="#fef08a"
                    fontSize="10"
                    fontWeight="700"
                    textAnchor="middle"
                  >
                    {p.ball.over}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Interactive Turning Point Insight Card */}
      {activeDetail && activeDetail.ball.turningPoint && (
        <div
          style={{
            marginTop: '16px',
            background: 'rgba(245, 158, 11, 0.08)',
            border: '1px solid rgba(245, 158, 11, 0.25)',
            borderRadius: '12px',
            padding: '14px 18px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '6px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="turning-point-badge">
                <Flame size={12} fill="#fef08a" /> TURNING POINT • OVER {activeDetail.ball.over}
              </span>
              <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#fff' }}>
                {activeDetail.ball.turningPoint.title}
              </span>
            </div>
            <div style={{ fontWeight: 800, fontSize: '0.85rem', color: '#38bdf8', background: 'rgba(56, 189, 248, 0.15)', padding: '2px 8px', borderRadius: '6px' }}>
              Shift: {activeDetail.ball.turningPoint.winProbShift}
            </div>
          </div>

          <p style={{ fontSize: '0.84rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
            <strong>💡 AI Tactical Rationale:</strong> {activeDetail.ball.turningPoint.tacticalInsight}
          </p>

          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            <strong>🏏 Dream11 Fantasy Ripple:</strong> {activeDetail.ball.turningPoint.fantasyImpact}
          </p>
        </div>
      )}
    </div>
  );
}
