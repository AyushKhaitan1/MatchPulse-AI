// MatchPulse AI Service
// Handles Live Fan Catch-Ups, Tactical Q&A, and What-If Simulations

/**
 * Generates an executive 30-second "Catch Me Up" brief for fans tuning in right now.
 */
export function generateCatchMeUpBrief(currentBall, allBalls, ballIndex) {
  const needed = currentBall.needed;
  const ballsLeft = currentBall.ballsLeft;
  const score = currentBall.score;
  const indProb = currentBall.indWinProb;
  const saProb = currentBall.saWinProb;

  // Find recent turning point
  const recentTurningPoints = allBalls
    .slice(0, ballIndex + 1)
    .filter(b => b.turningPoint !== null);
  const latestTP = recentTurningPoints.length > 0 ? recentTurningPoints[recentTurningPoints.length - 1] : null;

  let momentumStatus = "Tense Deadlock";
  if (indProb >= 70) momentumStatus = "🇮🇳 Heavy India Dominance";
  else if (saProb >= 70) momentumStatus = "🇿🇦 Strong South Africa Advantage";
  else momentumStatus = "🔥 Razor-Thin Contested Thriller";

  let situationNarrative = "";
  if (ballsLeft <= 0) {
    situationNarrative = "Match Concluded! India has won the ICC Men's T20 World Cup 2024 by 7 runs in a historic death-over defence!";
  } else {
    situationNarrative = `South Africa need ${needed} runs from ${ballsLeft} balls (${currentBall.reqRate} RPO). Score is ${score} with ${currentBall.batsman} facing ${currentBall.bowler}.`;
  }

  let turningPointHighlight = latestTP
    ? `Pivot Event (${latestTP.over} ov): ${latestTP.turningPoint.title} — Shift: ${latestTP.turningPoint.winProbShift}.`
    : "No major shock event in the immediate window; standard tactical accumulation.";

  let tacticalBattle = "";
  if (currentBall.bowler === "Jasprit Bumrah") {
    tacticalBattle = "Bumrah executing pinpoint inswinging yorkers and cutters on the stumps, denying batsmen room to extend their arms.";
  } else if (currentBall.bowler === "Hardik Pandya") {
    tacticalBattle = "Hardik utilizing wide off-cutters and taking pace off, forcing hitters to drag balls into the deeper boundary pockets.";
  } else if (currentBall.bowler === "Axar Patel") {
    tacticalBattle = "Axar attacking middle stump, but Klaasen capitalized with clean bat-swing down the ground.";
  } else {
    tacticalBattle = "Bowlers executing death-over discipline against aggressive strike-rotation.";
  }

  return {
    momentumStatus,
    winProbability: { ind: indProb, sa: saProb },
    situationNarrative,
    turningPointHighlight,
    tacticalBattle,
    fantasyImpact: latestTP ? latestTP.turningPoint.fantasyImpact : "Fantasy points tracking stable with steady strike rotation."
  };
}

/**
 * Evaluates a fan question against current match state.
 * Supports direct OpenAI/Gemini API calls if user provides a key, or high-fidelity domain reasoning engine.
 */
export async function askMatchPulseAI(question, currentBall, apiKey = "") {
  // If user provided a Gemini API Key, attempt live LLM call
  if (apiKey && apiKey.trim().length > 10) {
    try {
      const prompt = `You are MatchPulse AI, an elite live cricket tactical analyst and fan companion for Dream11.
Current match state:
- Match: ICC T20 World Cup Final 2024 (IND vs SA)
- Score: South Africa ${currentBall.score}
- Equation: ${currentBall.needed} runs needed from ${currentBall.ballsLeft} balls
- Striker: ${currentBall.batsman}, Bowler: ${currentBall.bowler}
- Win Probabilities: India ${currentBall.indWinProb}%, South Africa ${currentBall.saWinProb}%
- Last commentary: "${currentBall.commentary}"

Answer this fan's question with deep tactical clarity, excitement, and fan empathy in under 3 concise paragraphs:
"${question}"`;

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      });

      if (response.ok) {
        const data = await response.json();
        const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) return text;
      }
    } catch (e) {
      console.warn("API call failed, falling back to built-in tactical engine:", e);
    }
  }

  // Built-in intelligent sports analytics reasoning engine:
  const q = question.toLowerCase();
  const bowler = currentBall.bowler;
  const batsman = currentBall.batsman;
  const score = currentBall.score;
  const needed = currentBall.needed;
  const ballsLeft = currentBall.ballsLeft;
  const indProb = currentBall.indWinProb;

  if (q.includes("bumrah") || q.includes("hold") || q.includes("death")) {
    return `🎯 **Tactical Captaincy Masterclass:** Rohit Sharma strategically held Jasprit Bumrah's final overs for the 16th and 18th overs. 
When South Africa needed just 30 runs from 30 balls, bringing Bumrah choked their run-rate to only 6 runs conceded across two overs while claiming the crucial wicket of Marco Jansen. This escalated South Africa's required rate from 6.00 to 16.00, pushing them into forced boundary hitting.`;
  }

  if (q.includes("turning point") || q.includes("pivot") || q.includes("swung")) {
    return `⚡ **The Definitive Game Swing:**
1. **The Trap at 17.1:** Hardik Pandya removed Klaasen (52 off 27) with a wide, slower cutter outside off stump. India's win probability leaped from 6% to 44%.
2. **Bumrah's In-Cutter at 18.3:** Flattened Jansen's off-stump, restricting SA to 2 runs in the 18th over.
3. **The Miracle Catch at 19.1:** Suryakumar Yadav's balancing act on the long-off boundary cordoned off David Miller and sealed the 97% victory path.`;
  }

  if (q.includes("fantasy") || q.includes("dream11") || q.includes("points") || q.includes("captain")) {
    return `🏏 **Dream11 Fantasy Strategy Breakdown:**
- **Jasprit Bumrah & Hardik Pandya:** The ultimate game-changers. Bumrah's 2/18 (4.50 econ) racked up +89 pts with huge economy bonuses. Hardik's 3-wicket haul (including Klaasen & Miller) delivered over +100 fantasy points.
- **Captaincy Impact:** Users who captained Hardik or Bumrah experienced massive positive rank jumps (+15,000 to +25,000 ranks in grand leagues) over players who stuck with Axar or Miller.`;
  }

  if (q.includes("why") && (q.includes("axar") || q.includes("24 runs") || q.includes("six"))) {
    return `🔍 **Why Did Klaasen Target Axar in the 15th Over?**
Klaasen is statistically the most dominant batter against left-arm spin in T20s. With the shorter boundary towards long-on, Axar bowled slightly full and flat into Klaasen's hitting slot without variation in pace. Klaasen exploited the angle with two towering sixes and two fours, bringing SA down to 30 needed from 30.`;
  }

  if (q.includes("what if") || q.includes("scenario") || q.includes("simulate")) {
    return `🔮 **Scenario Simulation Engine:**
At the current stage (${needed} needed off ${ballsLeft} balls, score ${score}):
- **Boundary Scenario:** A boundary on the next ball drops SA's target significantly and swings win probability by +12% towards South Africa.
- **Dot Ball Scenario:** Every dot ball escalates the required rate by +1.8 RPO, compounding pressure onto the tailenders.
- **Wicket Scenario:** A dismissal here exposes South Africa's lower order (Rabada/Nortje) and immediately pushes India's win probability above 85%.`;
  }

  // Default contextual sports response
  return `📊 **MatchPulse Live Tactical Assessment (${currentBall.over} ov):**
South Africa are currently at **${score}**, needing **${needed} runs from ${ballsLeft} balls** against **${bowler}**.
India holds a **${indProb}% win probability**. The tactical battle hinges on boundary prevention: India is protecting the larger straight boundaries while using pace-off cutters outside the off-stump line to prevent power-hitters like ${batsman} from generating clean leverage.`;
}
