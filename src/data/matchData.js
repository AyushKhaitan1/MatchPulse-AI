// MatchPulse AI - Real-time Match Data & Turning Point Intelligence Engine

export const MATCH_INFO = {
  id: "t20wc-2024-final",
  title: "ICC Men's T20 World Cup 2024 - Final",
  subTitle: "India vs South Africa • Kensington Oval, Bridgetown, Barbados",
  innings: 2,
  target: 177,
  teamBatting: {
    name: "South Africa",
    shortName: "SA",
    color: "#10b981",
    flag: "🇿🇦"
  },
  teamBowling: {
    name: "India",
    shortName: "IND",
    color: "#38bdf8",
    flag: "🇮🇳"
  },
  firstInningsSummary: "India: 176/7 (20.0 ov) - Virat Kohli 76 (59), Axar Patel 47 (31), Keshav Maharaj 2/23"
};

export const INITIAL_FANTASY_LEADERBOARD = [
  { id: "bumrah", name: "Jasprit Bumrah", team: "IND", role: "BOWL", pts: 89, selectedBy: "88%", rankImpact: "+12,400", captaincy: "32%" },
  { id: "hardik", name: "Hardik Pandya", team: "IND", role: "AR", pts: 78, selectedBy: "76%", rankImpact: "+18,900", captaincy: "18%" },
  { id: "kohli", name: "Virat Kohli", team: "IND", role: "BAT", pts: 104, selectedBy: "94%", rankImpact: "Stable", captaincy: "42%" },
  { id: "klaasen", name: "Heinrich Klaasen", team: "SA", role: "WK-BAT", pts: 92, selectedBy: "68%", rankImpact: "+8,200", captaincy: "12%" },
  { id: "axar", name: "Axar Patel", team: "IND", role: "AR", pts: 65, selectedBy: "54%", rankImpact: "-4,100", captaincy: "5%" },
  { id: "miller", name: "David Miller", team: "SA", role: "BAT", pts: 42, selectedBy: "71%", rankImpact: "Volatile", captaincy: "8%" },
  { id: "arshdeep", name: "Arshdeep Singh", team: "IND", role: "BOWL", pts: 62, selectedBy: "62%", rankImpact: "+6,500", captaincy: "4%" }
];

export const BALL_BY_BALL_DATA = [
  // Over 14
  {
    over: "14.1",
    bowler: "Kuldeep Yadav",
    batsman: "Heinrich Klaasen",
    nonStriker: "David Miller",
    runs: 1,
    isWicket: false,
    isBoundary: false,
    score: "124/4",
    needed: 53,
    ballsLeft: 35,
    reqRate: "9.08",
    indWinProb: 48,
    saWinProb: 52,
    commentary: "Kuldeep floats one on middle, Klaasen pushes down to long-on for a single.",
    turningPoint: null
  },
  {
    over: "14.2",
    bowler: "Kuldeep Yadav",
    batsman: "David Miller",
    nonStriker: "Heinrich Klaasen",
    runs: 2,
    isWicket: false,
    isBoundary: false,
    score: "126/4",
    needed: 51,
    ballsLeft: 34,
    reqRate: "9.00",
    indWinProb: 45,
    saWinProb: 55,
    commentary: "Short and pulled wide of deep midwicket, sharp running between the wickets.",
    turningPoint: null
  },
  {
    over: "14.6",
    bowler: "Kuldeep Yadav",
    batsman: "Heinrich Klaasen",
    nonStriker: "David Miller",
    runs: 4,
    isWicket: false,
    isBoundary: true,
    score: "134/4",
    needed: 43,
    ballsLeft: 30,
    reqRate: "8.60",
    indWinProb: 38,
    saWinProb: 62,
    commentary: "FOUR! Rocked back and punched past extra cover. South Africa in complete control.",
    turningPoint: null
  },

  // Over 15: The Carnage Over (Axar Patel)
  {
    over: "15.1",
    bowler: "Axar Patel",
    batsman: "Heinrich Klaasen",
    nonStriker: "David Miller",
    runs: 4,
    isBoundary: true,
    isWicket: false,
    score: "138/4",
    needed: 39,
    ballsLeft: 29,
    reqRate: "8.06",
    indWinProb: 26,
    saWinProb: 74,
    commentary: "FOUR! Flat on off, Klaasen bludgeons it over mid-off with ferocity.",
    turningPoint: null
  },
  {
    over: "15.3",
    bowler: "Axar Patel",
    batsman: "Heinrich Klaasen",
    nonStriker: "David Miller",
    runs: 6,
    isBoundary: false,
    isSix: true,
    isWicket: false,
    score: "145/4",
    needed: 32,
    ballsLeft: 27,
    reqRate: "7.11",
    indWinProb: 14,
    saWinProb: 86,
    commentary: "SIX! Colossal strike! Smashed high and deep into the stands beyond long-on!",
    turningPoint: null
  },
  {
    over: "15.5",
    bowler: "Axar Patel",
    batsman: "Heinrich Klaasen",
    nonStriker: "David Miller",
    runs: 6,
    isBoundary: false,
    isSix: true,
    isWicket: false,
    score: "151/4",
    needed: 26,
    ballsLeft: 25,
    reqRate: "6.24",
    indWinProb: 6,
    saWinProb: 94,
    commentary: "SIX AGAIN! 24 runs off the over! SA need just 30 runs from 30 balls with 6 wickets in hand.",
    turningPoint: {
      type: "DANGER_SURGE",
      title: "Klaasen's 24-Run Explosion",
      winProbShift: "-32% for IND",
      tacticalInsight: "Axar fired into Klaasen's arc without taking pace off. With only 30 needed from 30 balls, South Africa have a 94% win probability.",
      fantasyImpact: "Klaasen captaincy picks spike to +45 pts. Axar economy deduction hurts fantasy users."
    }
  },

  // Over 16: Jasprit Bumrah's Masterclass Squeeze
  {
    over: "16.1",
    bowler: "Jasprit Bumrah",
    batsman: "Heinrich Klaasen",
    nonStriker: "David Miller",
    runs: 0,
    isWicket: false,
    isBoundary: false,
    score: "151/4",
    needed: 26,
    ballsLeft: 24,
    reqRate: "6.50",
    indWinProb: 9,
    saWinProb: 91,
    commentary: "Dot ball. Fiery 142kph reverse swing yorker on leg stump. Squeezed to midwicket.",
    turningPoint: null
  },
  {
    over: "16.4",
    bowler: "Jasprit Bumrah",
    batsman: "David Miller",
    nonStriker: "Heinrich Klaasen",
    runs: 1,
    isWicket: false,
    isBoundary: false,
    score: "154/4",
    needed: 23,
    ballsLeft: 21,
    reqRate: "6.57",
    indWinProb: 15,
    saWinProb: 85,
    commentary: "Inswinging back of a length, tapped to cover point for a tight single.",
    turningPoint: null
  },
  {
    over: "16.6",
    bowler: "Jasprit Bumrah",
    batsman: "Heinrich Klaasen",
    nonStriker: "David Miller",
    runs: 1,
    isWicket: false,
    isBoundary: false,
    score: "155/4",
    needed: 22,
    ballsLeft: 20,
    reqRate: "6.60",
    indWinProb: 19,
    saWinProb: 81,
    commentary: "Only 4 runs off Bumrah's over! Laser precision bowling keeps India alive in the contest.",
    turningPoint: {
      type: "PRESSURE_BUILD",
      title: "Bumrah Chokes the Flow (4 Runs)",
      winProbShift: "+13% for IND",
      tacticalInsight: "Bumrah bowled 4 yorkers targeting off and middle stumps, denying both batters boundary access. Created desperation for the next over.",
      fantasyImpact: "Bumrah economy bonus secured (+6 pts). Fantasy rank momentum swings."
    }
  },

  // Over 17: Hardik Pandya strikes Klaasen!
  {
    over: "17.1",
    bowler: "Hardik Pandya",
    batsman: "Heinrich Klaasen",
    nonStriker: "David Miller",
    runs: 0,
    isWicket: true,
    wicketDetail: "c Pant b Pandya",
    score: "156/5",
    needed: 21,
    ballsLeft: 17,
    reqRate: "7.41",
    indWinProb: 44,
    saWinProb: 56,
    commentary: "OUT!! EDGED AND CAUGHT! HARDIK PANDYA GETS KLAASEN! A wide, slower cutter outside off, Klaasen chases and feathers it through to Pant!",
    turningPoint: {
      type: "MEGA_TURNING_POINT",
      title: "Massive Breakthrough: Klaasen Falls!",
      winProbShift: "+25% for IND",
      tacticalInsight: "Rohit & Hardik planned the wide off-cutter trap. By taking the ball away from Klaasen's power hitting V, Hardik induced the outside edge.",
      fantasyImpact: "Huge +25 pts wicket bonus for Hardik Pandya. Captaincy owners climb thousands of ranks."
    }
  },
  {
    over: "17.6",
    bowler: "Hardik Pandya",
    batsman: "David Miller",
    nonStriker: "Marco Jansen",
    runs: 1,
    isWicket: false,
    score: "159/5",
    needed: 18,
    ballsLeft: 14,
    reqRate: "7.71",
    indWinProb: 49,
    saWinProb: 51,
    commentary: "Just 4 runs and the prized wicket of Klaasen from Hardik's over. The game is hanging on a knife's edge!",
    turningPoint: null
  },

  // Over 18: Jasprit Bumrah rattles Marco Jansen
  {
    over: "18.1",
    bowler: "Jasprit Bumrah",
    batsman: "David Miller",
    nonStriker: "Marco Jansen",
    runs: 1,
    isWicket: false,
    score: "160/5",
    needed: 17,
    ballsLeft: 13,
    reqRate: "7.84",
    indWinProb: 54,
    saWinProb: 46,
    commentary: "Miller works it to square leg for one. Jansen on strike now facing the world's best bowler.",
    turningPoint: null
  },
  {
    over: "18.3",
    bowler: "Jasprit Bumrah",
    batsman: "Marco Jansen",
    nonStriker: "David Miller",
    runs: 0,
    isWicket: true,
    wicketDetail: "b Bumrah",
    score: "160/6",
    needed: 17,
    ballsLeft: 11,
    reqRate: "9.27",
    indWinProb: 73,
    saWinProb: 27,
    commentary: "BOWLED HIM!! ABSOLUTE UNPLAYABLE BEAUTY FROM JASPRIT BUMRAH! Shapes back in off the deck, crashes through Jansen's defense and hits off stump!",
    turningPoint: {
      type: "GENIUS_STRIKE",
      title: "Bumrah Cleans Up Jansen (2 Runs + 1 Wicket)",
      winProbShift: "+19% for IND",
      tacticalInsight: "Bumrah finished his 4 overs with 2/18 at an economy of 4.5 in a 177 chase! Tail exposed, David Miller isolated.",
      fantasyImpact: "Bumrah crosses 100 fantasy points! Instant Dream11 Dream Team lock."
    }
  },
  {
    over: "18.6",
    bowler: "Jasprit Bumrah",
    batsman: "Keshav Maharaj",
    nonStriker: "David Miller",
    runs: 1,
    isWicket: false,
    score: "161/6",
    needed: 16,
    ballsLeft: 12,
    reqRate: "8.00",
    indWinProb: 71,
    saWinProb: 29,
    commentary: "Just 2 runs from the 18th over! 16 needed off 12 balls.",
    turningPoint: null
  },

  // Over 19: Arshdeep Singh's Discipline
  {
    over: "19.2",
    bowler: "Arshdeep Singh",
    batsman: "David Miller",
    nonStriker: "Keshav Maharaj",
    runs: 1,
    isWicket: false,
    score: "163/6",
    needed: 14,
    ballsLeft: 10,
    reqRate: "8.40",
    indWinProb: 76,
    saWinProb: 24,
    commentary: "Full wide yorker, dug out to long-off. Miller denies the second run to keep strike.",
    turningPoint: null
  },
  {
    over: "19.6",
    bowler: "Arshdeep Singh",
    batsman: "Keshav Maharaj",
    nonStriker: "David Miller",
    runs: 1,
    isWicket: false,
    score: "165/6",
    needed: 16,
    ballsLeft: 6,
    reqRate: "16.00",
    indWinProb: 82,
    saWinProb: 18,
    commentary: "Only 4 runs off Arshdeep's over! South Africa need 16 runs off the final 6 balls to win the World Cup!",
    turningPoint: {
      type: "DEATH_HOLD",
      title: "Arshdeep Concedes Only 4 in the 19th",
      winProbShift: "+11% for IND",
      tacticalInsight: "Arshdeep nailed 4 out of 6 balls outside the off-stump tramline, forcing Miller to hit against the larger boundary pocket.",
      fantasyImpact: "Arshdeep registers 62 fantasy points with sub-6.0 economy."
    }
  },

  // Over 20: The Historic Final Over (Hardik Pandya)
  {
    over: "20.1",
    bowler: "Hardik Pandya",
    batsman: "David Miller",
    nonStriker: "Keshav Maharaj",
    runs: 0,
    isWicket: true,
    wicketDetail: "c Suryakumar Yadav b Pandya",
    score: "165/7",
    needed: 16,
    ballsLeft: 5,
    reqRate: "19.20",
    indWinProb: 97,
    saWinProb: 3,
    commentary: "OUT!! SURYAKUMAR YADAV HAS TAKEN THE CATCH OF THE CENTURY! Wide full toss, Miller drills it down the ground, Suryakumar plucks it inches from the boundary rope, throws it up as he steps over, steps back in and completes the catch!",
    turningPoint: {
      type: "HISTORIC_MOMENT",
      title: "Suryakumar Yadav's Iconic Boundary Catch",
      winProbShift: "+15% for IND (to 97%)",
      tacticalInsight: "The definitive turning point of the ICC T20 World Cup 2024. Miller was SA's last recognized finisher.",
      fantasyImpact: "Suryakumar gains +16 catching pts. Hardik Pandya adds +25 pts. Dramatic leaderboard shift."
    }
  },
  {
    over: "20.2",
    bowler: "Hardik Pandya",
    batsman: "Kagiso Rabada",
    nonStriker: "Keshav Maharaj",
    runs: 4,
    isBoundary: true,
    score: "169/7",
    needed: 12,
    ballsLeft: 4,
    reqRate: "18.00",
    indWinProb: 94,
    saWinProb: 6,
    commentary: "FOUR! Outside edge flies over short third man. 12 needed off 4 balls.",
    turningPoint: null
  },
  {
    over: "20.5",
    bowler: "Hardik Pandya",
    batsman: "Kagiso Rabada",
    nonStriker: "Keshav Maharaj",
    runs: 0,
    isWicket: true,
    wicketDetail: "c Suryakumar Yadav b Pandya",
    score: "171/8",
    needed: 10,
    ballsLeft: 1,
    reqRate: "60.00",
    indWinProb: 99.9,
    saWinProb: 0.1,
    commentary: "OUT!! Rabada slices to long-off, Suryakumar catches again! India are World Champions in seconds!",
    turningPoint: null
  },
  {
    over: "20.6",
    bowler: "Hardik Pandya",
    batsman: "Anrich Nortje",
    nonStriker: "Keshav Maharaj",
    runs: 1,
    isWicket: false,
    score: "172/8",
    needed: 9,
    ballsLeft: 0,
    reqRate: "-",
    indWinProb: 100,
    saWinProb: 0,
    commentary: "INDIA HAVE WON THE T20 WORLD CUP 2024 BY 7 RUNS! Hardik falls to his knees in tears! Rohit Sharma kisses the Barbados pitch! Pure euphoria!",
    turningPoint: {
      type: "CHAMPIONS",
      title: "India Crowned World Champions (by 7 Runs)",
      winProbShift: "100% IND Victory",
      tacticalInsight: "Defended 30 off 30 with reverse swing, slower off-cutters, and boundary-riding athletic fielding under maximum psychological pressure.",
      fantasyImpact: "Hardik Pandya ends on 103 pts (3/20), Bumrah 89 pts (2/18). Fantasy champion teams solidified!"
    }
  }
];

// Tactical What-If Scenarios
export const WHAT_IF_SCENARIOS = [
  {
    id: "sc-1",
    title: "What if Rohit bowled Bumrah in over 15 instead of Axar?",
    question: "What if Bumrah was brought on in the 15th over to break Klaasen's rhythm before the 24-run explosion?",
    predictedWinRateIND: 78,
    summary: "High Probability of early wicket. Klaasen was aggressively pre-meditating spin. Facing Bumrah's inward angling yorkers at that juncture would have starved SA of boundary momentum.",
    tacticalShift: "Bumrah would have eliminated the 24-run over entirely, likely limiting SA to 5-6 runs, forcing Miller to take risks against reverse swing.",
    fantasyShift: "Axar economy would have stayed positive; Bumrah would have had 3+ wickets."
  },
  {
    id: "sc-2",
    title: "What if Klaasen played for singles in over 17?",
    question: "South Africa needed only 22 runs from 20 balls. What if Klaasen didn't chase Hardik's wide off-cutter?",
    predictedWinRateIND: 12,
    summary: "South Africa would have comfortably won with 8 balls to spare. At run-a-ball equation, rotating strike would have neutralized India's death bowling traps.",
    tacticalShift: "Hardik bowled 3 consecutive slower balls wide of off-stump baiting Klaasen into hitting towards the wind. A defensive dab to third man would have preserved SA's 90%+ win rate.",
    fantasyShift: "Klaasen finishes not out on 68*, winning Player of the Match and topping all fantasy leaderboards."
  },
  {
    id: "sc-3",
    title: "What if Miller cleared the boundary at 19.1?",
    question: "If Suryakumar Yadav was 2 inches deeper or stepped on the rope, that was a SIX (10 needed off 5 balls).",
    predictedWinRateIND: 22,
    summary: "Equation shifts to 10 needed off 5 balls with set batsman Miller on strike. SA win probability would have jumped back to 78%.",
    tacticalShift: "Hardik would have been forced to bowl defensive yorkers under immense boundary pressure with Miller targeting the leg side.",
    fantasyShift: "Miller earns +18 boundary bonus; Hardik's points drop by -30."
  }
];
