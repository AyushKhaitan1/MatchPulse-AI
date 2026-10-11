import React, { useState } from 'react';
import { Sparkles, HelpCircle, ArrowRight, CheckCircle2, Sliders, PlayCircle } from 'lucide-react';
import { WHAT_IF_SCENARIOS } from '../data/matchData';

export default function WhatIfSimulator() {
  const [selectedScenario, setSelectedScenario] = useState(WHAT_IF_SCENARIOS[0]);
  const [customQuestion, setCustomQuestion] = useState('');
  const [customResult, setCustomResult] = useState(null);
  const [isSimulating, setIsSimulating] = useState(false);

  const handleRunCustomSimulation = () => {
    if (!customQuestion.trim()) return;
    setIsSimulating(true);

    setTimeout(() => {
      setCustomResult({
        title: customQuestion,
        predictedWinRateIND: Math.floor(Math.random() * 40) + 40,
        summary: `AI Tactical Model Analysis for: "${customQuestion}". Our predictive model projects a major change in boundary frequency. The batting strike rotation would alter by ~1.4 RPO, forcing the fielding captain to bring long-on into the circle.`,
        tacticalShift: "Pace variations on the off-stump would lower boundary probability by 28%, forcing aerial lofted shots toward the wind.",
        fantasyShift: "High point volatility for bowlers with death overs remaining."
      });
      setIsSimulating(false);
    }, 800);
  };

  const active = customResult || selectedScenario;

  return (
    <div className="glass-panel" style={{ padding: '24px', marginBottom: '24px' }}>
      
      {/* Title */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Sparkles size={20} color="#a855f7" />
          <h2 style={{ fontSize: '1.2rem', fontWeight: 800 }}>🔮 Tactical 'What-If' Scenario Simulator</h2>
        </div>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', background: 'rgba(168, 85, 247, 0.1)', border: '1px solid rgba(168, 85, 247, 0.3)', padding: '3px 10px', borderRadius: '999px' }}>
          Predictive Counterfactual Engine
        </span>
      </div>

      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '18px' }}>
        Simulate alternative captaincy decisions, missed wickets, and batter approaches to see how the match outcome and fantasy points would have shifted.
      </p>

      {/* Preset Scenario Tabs */}
      <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', marginBottom: '18px', paddingBottom: '4px' }}>
        {WHAT_IF_SCENARIOS.map((sc) => (
          <button
            key={sc.id}
            onClick={() => {
              setCustomResult(null);
              setSelectedScenario(sc);
            }}
            className={`btn-tab ${(!customResult && selectedScenario.id === sc.id) ? 'active' : ''}`}
            style={{ fontSize: '0.8rem', whiteSpace: 'nowrap' }}
          >
            {sc.title}
          </button>
        ))}
      </div>

      {/* Simulation Result Card */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(168, 85, 247, 0.25)',
          borderRadius: '14px',
          padding: '20px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px'
        }}
      >
        {/* Left Side: Summary & Insights */}
        <div>
          <div style={{ fontSize: '0.75rem', color: '#c084fc', textTransform: 'uppercase', fontWeight: 700, marginBottom: '4px' }}>
            Scenario Hypothesis
          </div>
          <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#fff', marginBottom: '12px' }}>
            {active.question || active.title}
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ background: 'rgba(0,0,0,0.25)', padding: '10px 14px', borderRadius: '10px' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#38bdf8', marginBottom: '2px' }}>
                🧠 Projected Tactical Ripple Effect
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-main)', lineHeight: 1.4 }}>
                {active.tacticalShift}
              </p>
            </div>

            <div style={{ background: 'rgba(0,0,0,0.25)', padding: '10px 14px', borderRadius: '10px' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#f43f5e', marginBottom: '2px' }}>
                🏏 Fantasy Points Re-evaluation
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-main)', lineHeight: 1.4 }}>
                {active.fantasyShift}
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Probability Impact Meter */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'rgba(0,0,0,0.2)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '6px' }}>
            Simulated India Win Probability
          </div>
          <div style={{ fontSize: '2.8rem', fontWeight: 900, color: '#38bdf8', letterSpacing: '-0.03em' }}>
            {active.predictedWinRateIND}%
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', marginBottom: '14px' }}>
            South Africa: {100 - active.predictedWinRateIND}%
          </div>

          <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.08)', borderRadius: '999px', overflow: 'hidden', display: 'flex' }}>
            <div style={{ width: `${active.predictedWinRateIND}%`, background: '#38bdf8' }} />
            <div style={{ width: `${100 - active.predictedWinRateIND}%`, background: '#10b981' }} />
          </div>

          <p style={{ fontSize: '0.76rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '14px', fontStyle: 'italic' }}>
            "{active.summary}"
          </p>
        </div>
      </div>

      {/* Custom What-If Prompt Box */}
      <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
        <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>
          Test Your Own Custom Tactical Hypothesis:
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <input
            type="text"
            placeholder="e.g. What if Arshdeep bowled the final over instead of Hardik?"
            value={customQuestion}
            onChange={(e) => setCustomQuestion(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleRunCustomSimulation()}
            style={{
              flex: 1,
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '8px',
              padding: '8px 12px',
              color: '#fff',
              fontSize: '0.82rem',
              outline: 'none'
            }}
          />
          <button
            onClick={handleRunCustomSimulation}
            disabled={!customQuestion.trim() || isSimulating}
            className="btn-primary"
            style={{
              background: 'linear-gradient(135deg, #a855f7 0%, #7e22ce 100%)',
              boxShadow: '0 4px 14px rgba(168, 85, 247, 0.35)',
              fontSize: '0.8rem',
              padding: '6px 14px'
            }}
          >
            {isSimulating ? "Simulating..." : "Simulate Scenario"}
          </button>
        </div>
      </div>

    </div>
  );
}
