# Dream11 | Forward Deployed Engineer Internship Assignment Submission

**Candidate Name:** Ayush Khaitan  
**Email:** ayushkhaitan2004@gmail.com  
**Role:** Forward Deployed Engineer Intern  
**Project Title:** MatchPulse AI — Live Match Narrative & Turning-Point Companion  
**Live Demo / Artifact Repository:** Included in this submission package (`MatchPulse_AI_Dream11_Submission.zip`) and runnable locally via `npm run dev` or deployed to Vercel/GitHub.

---

## 📝 Required Short Note (174 Words / Max 200 Words)

### **What fan problem are you solving?**
During live matches, millions of sports and fantasy fans tune in midway or between overs. Standard broadcast apps bombard them with passive, fragmented data (raw scorecards, dry text commentary) without answering the single biggest question fans actually care about: *"Why did the game just swing, and what tactical decision created this moment?"* Furthermore, fantasy managers experience severe anxiety tracking how sudden in-match events impact their contest ranks.

### **How does your solution help?**
MatchPulse AI acts as a real-time tactical companion delivering:
1. **"Catch Me Up in 30 Seconds"**: An instant executive recap of recent momentum shifts, tactical battles, and win probabilities for fans joining late.
2. **Turning-Point Radar**: Interactive win-probability curves revealing the exact strategic rationale behind critical deliveries.
3. **PulseBot**: A contextual conversational analyst answering real-time captaincy questions.
4. **Counterfactual "What-If" Simulator**: Allowing fans to simulate alternate bowling/batting tactics.
5. **Dream11 Fantasy Volatility Meter**: Live tracking of captaincy rank impact.

### **Which AI tools did you use?**
Google Gemini 1.5 Flash API for context-augmented tactical sports reasoning, custom client-side heuristics inference engine, and predictive win-probability state modeling.

---

## 🚀 Working Artifact Overview

### Key Features Implemented:
1. **Live Match Simulation & Delivery Reel**:
   - Replays the historic **ICC T20 World Cup Final 2024 (IND vs SA)** death overs thriller (Overs 14 to 20: 30 needed off 30 balls, Bumrah's spell, Hardik's Klaasen wicket, Suryakumar Yadav's miracle boundary catch).
   - Dynamic playback controls: Play/Pause, 1x/2x/5x speed, step-by-step ball stepper, and instant jumpers to turning points.
2. **"Catch Me Up" (30s Fan Recap Modal)**:
   - 1-click modal summarizing the active situation, tactical battle, turning point, and fantasy implications.
3. **Interactive Momentum Radar**:
   - SVG Win Probability curve with clickable golden turning point markers explaining the tactical shift.
4. **PulseBot Live Conversational AI**:
   - Tactical chat with built-in cricket knowledge and optional custom Gemini API key integration.
5. **🔮 What-If Scenario Simulator**:
   - Simulates alternative match decisions (e.g., bowling Bumrah in over 15, Klaasen playing for singles, missed catches) and calculates win probability deltas.
6. **🎯 Dream11 Live Fantasy Tracker**:
   - Real-time fantasy points leaderboard with rank volatility indicators and captaincy multiplier impact.

---

## 🛠️ How to Run Locally

```bash
# 1. Unzip the project folder and navigate inside
cd Dream11

# 2. Install dependencies (if running from source)
npm install

# 3. Start the application
npm run dev

# 4. Open http://localhost:5173/ in your browser
```

---

## 🎙️ Virtual Demo Round — Talking Points & Approach
When walking through MatchPulse AI during the interview:
1. **Fan-Centric Philosophy:** Emphasize that live cricket isn't just numbers; it's drama and tactical decisions. Fans don't want another scorecard—they want context and answers.
2. **Forward Deployed Mindset:** Built a high-velocity, production-grade interactive prototype that combines sports data telemetry with LLM intelligence.
3. **Dream11 Business Value:** Directly enhances user engagement on the second screen, reduces churn during commercial breaks, and drives deeper fantasy contest retention.
