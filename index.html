import { useState, useEffect } from "react";

// ─── CONSTANTS ───────────────────────────────────────────────────────────────
const ADMIN_PASSWORD = "ODB2022!";
const STORAGE_KEYS = {
  matches: "wk_matches",
  participants: "wk_participants",
  predictions: "wk_predictions",
  bonuses: "wk_bonuses",
  settings: "wk_settings",
};

const PHASES = {
  group: { name: "Groepsfase", exact: 10, half: 5, participation: 1 },
  r32: { name: "Laatste 32", exact: 20, half: 10, participation: 2 },
  r16: { name: "Laatste 16", exact: 30, half: 15, participation: 3 },
  quarter: { name: "Kwartfinale", exact: 40, half: 20, participation: 4 },
  semi: { name: "Halve finale", exact: 50, half: 25, participation: 5 },
  final: { name: "Finale", exact: 100, half: 50, participation: 10 },
};

const DEFAULT_SETTINGS = {
  tournamentName: "WK Pronostiek 2026",
  topScorerExact: 50,
  topScorerInTop3: 20,
  winnerPoints: 100,
  runnerUpPoints: 50,
  thirdPlacePoints: 25,
  bonusDeadline: "2026-06-11T21:00", // ISO datetime string
};

// ─── STORAGE HELPERS ─────────────────────────────────────────────────────────
const load = async (key) => {
  try {
    const r = await window.storage.get(key, true);
    return r ? JSON.parse(r.value) : null;
  } catch {
    return null;
  }
};
const save = async (key, val) => {
  try {
    await window.storage.set(key, JSON.stringify(val), true);
  } catch (e) {
    console.error("Storage error", e);
  }
};

// ─── UTILS ────────────────────────────────────────────────────────────────────
const calcPoints = (pred, result, phase) => {
  if (!result || result.home === "" || result.away === "") return null;
  const ph = parseInt(pred.home), pa = parseInt(pred.away);
  const rh = parseInt(result.home), ra = parseInt(result.away);
  if (isNaN(ph) || isNaN(pa)) return null;
  
  const phaseConfig = PHASES[phase] || PHASES.group;
  
  // Exact score = volle punten
  if (ph === rh && pa === ra) return phaseConfig.exact;
  
  // Juiste winnaar/gelijkspel = helft van fase-punten
  const predWinner = ph > pa ? "home" : ph < pa ? "away" : "draw";
  const realWinner = rh > ra ? "home" : rh < ra ? "away" : "draw";
  
  if (predWinner === realWinner) return phaseConfig.half;
  
  // Fout maar wel ingevuld = 10% van fase-punten
  return phaseConfig.participation;
};

const totalPoints = (participantId, predictions, bonuses, matches) => {
  let total = 0;
  
  // Match points
  matches.forEach((m) => {
    const pred = predictions[participantId]?.[m.id];
    if (pred && m.result) {
      const pts = calcPoints(pred, m.result, m.phase);
      if (pts !== null) total += pts;
    }
  });
  
  // Bonus points
  const userBonus = bonuses[participantId];
  if (userBonus?.topScorer && bonuses.results?.topScorer) {
    if (userBonus.topScorer === bonuses.results.topScorer) {
      total += DEFAULT_SETTINGS.topScorerExact;
    } else if (bonuses.results.topScorerTop3?.includes(userBonus.topScorer)) {
      total += DEFAULT_SETTINGS.topScorerInTop3;
    }
  }
  
  if (userBonus?.winner && bonuses.results?.winner && userBonus.winner === bonuses.results.winner) {
    total += DEFAULT_SETTINGS.winnerPoints;
  }
  if (userBonus?.runnerUp && bonuses.results?.runnerUp && userBonus.runnerUp === bonuses.results.runnerUp) {
    total += DEFAULT_SETTINGS.runnerUpPoints;
  }
  if (userBonus?.third && bonuses.results?.third && userBonus.third === bonuses.results.third) {
    total += DEFAULT_SETTINGS.thirdPlacePoints;
  }
  
  return total;
};

// ─── STYLES ───────────────────────────────────────────────────────────────────
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@400;500;600;700&family=Barlow+Condensed:wght@600;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --green-dark: #0a2e1a;
    --green-mid: #1a5c32;
    --green-bright: #2d8a4e;
    --gold: #d4af37;
    --gold-light: #f0d060;
    --gold-dim: #9a7d1a;
    --white: #f5f0e8;
    --gray: #8a9a8a;
    --red: #c0392b;
    --shadow: 0 4px 24px rgba(0,0,0,0.4);
    --radius: 12px;
  }

  body {
    background: var(--green-dark);
    color: var(--white);
    font-family: 'Barlow', sans-serif;
    min-height: 100vh;
  }

  .app {
    max-width: 800px;
    margin: 0 auto;
    padding: 16px;
    min-height: 100vh;
  }

  /* ── HEADER ── */
  .header {
    text-align: center;
    padding: 32px 16px 24px;
    position: relative;
  }
  .header::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.15) 0%, transparent 70%);
    pointer-events: none;
  }
  .header-trophy { font-size: 48px; margin-bottom: 8px; filter: drop-shadow(0 0 12px rgba(212,175,55,0.6)); }
  .header-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(28px, 6vw, 52px);
    letter-spacing: 3px;
    background: linear-gradient(135deg, var(--gold-light), var(--gold), var(--gold-dim));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
    margin-bottom: 4px;
  }
  .header-sub {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 13px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: var(--gray);
  }
  .header-nav {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 20px;
    flex-wrap: wrap;
  }

  /* ── BUTTONS ── */
  .btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 10px 18px;
    border-radius: 8px;
    border: none;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.18s;
  }
  .btn-gold {
    background: linear-gradient(135deg, var(--gold-light), var(--gold));
    color: var(--green-dark);
  }
  .btn-gold:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(212,175,55,0.35); }
  .btn-outline {
    background: transparent;
    border: 1.5px solid rgba(212,175,55,0.4);
    color: var(--gold);
  }
  .btn-outline:hover { border-color: var(--gold); background: rgba(212,175,55,0.08); }
  .btn-ghost {
    background: rgba(255,255,255,0.07);
    color: var(--white);
    border: 1px solid rgba(255,255,255,0.1);
  }
  .btn-ghost:hover { background: rgba(255,255,255,0.12); }
  .btn-danger {
    background: rgba(192,57,43,0.15);
    color: #e74c3c;
    border: 1px solid rgba(192,57,43,0.3);
  }
  .btn-danger:hover { background: rgba(192,57,43,0.25); }
  .btn-sm { padding: 6px 12px; font-size: 12px; }
  .btn:disabled { opacity: 0.4; cursor: not-allowed; transform: none !important; }

  /* ── CARD ── */
  .card {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(212,175,55,0.12);
    border-radius: var(--radius);
    padding: 20px;
    margin-bottom: 12px;
    backdrop-filter: blur(4px);
  }
  .card-dark {
    background: rgba(0,0,0,0.25);
    border-color: rgba(255,255,255,0.06);
  }

  /* ── SECTION TITLE ── */
  .section-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 22px;
    letter-spacing: 2px;
    color: var(--gold);
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .section-title::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, rgba(212,175,55,0.4), transparent);
  }

  /* ── TABS ── */
  .tab-bar {
    display: flex;
    background: rgba(0,0,0,0.3);
    border-radius: 10px;
    padding: 4px;
    gap: 4px;
    margin-bottom: 20px;
    flex-wrap: wrap;
  }
  .tab {
    flex: 1;
    min-width: 80px;
    padding: 9px 12px;
    border-radius: 8px;
    border: none;
    background: transparent;
    color: var(--gray);
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.18s;
    text-align: center;
  }
  .tab.active {
    background: linear-gradient(135deg, var(--gold-light), var(--gold));
    color: var(--green-dark);
  }
  .tab:hover:not(.active) { color: var(--white); }

  /* ── FORM ELEMENTS ── */
  .form-group { margin-bottom: 14px; }
  .form-label {
    display: block;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--gray);
    margin-bottom: 6px;
  }
  .form-input {
    width: 100%;
    padding: 10px 14px;
    background: rgba(0,0,0,0.35);
    border: 1.5px solid rgba(255,255,255,0.1);
    border-radius: 8px;
    color: var(--white);
    font-family: 'Barlow', sans-serif;
    font-size: 15px;
    outline: none;
    transition: border-color 0.18s;
  }
  .form-input[type="password"] {
    font-size: 20px;
    letter-spacing: 8px;
    text-align: center;
  }
  .form-input:focus { border-color: var(--gold); }
  .form-input::placeholder { color: rgba(255,255,255,0.25); }
  .score-input {
    width: 60px;
    text-align: center;
    padding: 10px 6px;
    font-size: 20px;
    font-weight: 700;
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 1px;
  }

  /* ── MATCH CARD ── */
  .match-card {
    background: rgba(0,0,0,0.25);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: var(--radius);
    padding: 16px;
    margin-bottom: 10px;
    transition: border-color 0.18s;
  }
  .match-card:hover { border-color: rgba(212,175,55,0.25); }
  .match-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
  }
  .match-meta {
    font-size: 11px;
    color: var(--gray);
    font-family: 'Barlow Condensed', sans-serif;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  .match-badge {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 3px 10px;
    border-radius: 20px;
    font-size: 11px;
    font-weight: 700;
    font-family: 'Barlow Condensed', sans-serif;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  .badge-open { background: rgba(45,138,78,0.2); color: #4caf76; border: 1px solid rgba(76,175,80,0.3); }
  .badge-closed { background: rgba(192,57,43,0.15); color: #e57373; border: 1px solid rgba(229,115,115,0.3); }
  .badge-result { background: rgba(212,175,55,0.15); color: var(--gold); border: 1px solid rgba(212,175,55,0.3); }
  .teams-row {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .team-name {
    flex: 1;
    font-size: 16px;
    font-weight: 700;
    font-family: 'Barlow Condensed', sans-serif;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  .team-name.home { text-align: right; }
  .team-name.away { text-align: left; }
  .vs-sep {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 13px;
    color: var(--gray);
    letter-spacing: 2px;
    min-width: 20px;
    text-align: center;
  }
  .result-display {
    display: flex;
    align-items: center;
    gap: 6px;
    justify-content: center;
    min-width: 80px;
  }
  .result-score {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 28px;
    color: var(--gold-light);
    letter-spacing: 2px;
    line-height: 1;
  }
  .result-dash { font-size: 20px; color: var(--gray); }

  /* ── POINTS BADGE ── */
  .pts-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 16px;
    font-weight: 700;
    flex-shrink: 0;
  }
  .pts-exact { background: rgba(212,175,55,0.25); color: var(--gold); border: 1.5px solid var(--gold-dim); }
  .pts-winner { background: rgba(45,138,78,0.2); color: #4caf76; border: 1.5px solid rgba(76,175,80,0.4); }
  .pts-zero { background: rgba(192,57,43,0.12); color: #e57373; border: 1.5px solid rgba(229,115,115,0.25); }
  .pts-pending { background: rgba(255,255,255,0.06); color: var(--gray); border: 1.5px solid rgba(255,255,255,0.1); }

  /* ── RANKING ── */
  .rank-row {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    border-radius: 10px;
    background: rgba(0,0,0,0.2);
    margin-bottom: 8px;
    border: 1px solid rgba(255,255,255,0.05);
    transition: all 0.18s;
  }
  .rank-row:hover { background: rgba(212,175,55,0.06); border-color: rgba(212,175,55,0.15); }
  .rank-row.rank-1 { background: rgba(212,175,55,0.1); border-color: rgba(212,175,55,0.3); }
  .rank-row.rank-2 { background: rgba(192,192,192,0.07); border-color: rgba(192,192,192,0.2); }
  .rank-row.rank-3 { background: rgba(180,100,50,0.08); border-color: rgba(205,127,50,0.2); }
  .rank-num {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 22px;
    width: 32px;
    text-align: center;
    color: var(--gray);
  }
  .rank-1 .rank-num { color: var(--gold); }
  .rank-2 .rank-num { color: #c0c0c0; }
  .rank-3 .rank-num { color: #cd7f32; }
  .rank-medal { font-size: 20px; }
  .rank-name { flex: 1; font-size: 17px; font-weight: 600; }
  .rank-pts {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 26px;
    color: var(--gold-light);
    letter-spacing: 1px;
  }
  .rank-pts-label {
    font-size: 11px;
    color: var(--gray);
    font-family: 'Barlow Condensed', sans-serif;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  /* ── ALERT ── */
  .alert {
    padding: 12px 16px;
    border-radius: 8px;
    font-size: 14px;
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .alert-success { background: rgba(76,175,80,0.12); border: 1px solid rgba(76,175,80,0.3); color: #81c784; }
  .alert-error { background: rgba(229,115,115,0.12); border: 1px solid rgba(229,115,115,0.3); color: #ef9a9a; }
  .alert-info { background: rgba(212,175,55,0.1); border: 1px solid rgba(212,175,55,0.25); color: var(--gold); }

  /* ── MISC ── */
  .divider { height: 1px; background: rgba(255,255,255,0.06); margin: 16px 0; }
  .empty-state { text-align: center; padding: 48px 24px; color: var(--gray); }
  .empty-state .icon { font-size: 40px; margin-bottom: 12px; }
  .empty-state p { font-size: 15px; }
  .flex { display: flex; }
  .gap-8 { gap: 8px; }
  .gap-12 { gap: 12px; }
  .justify-between { justify-content: space-between; }
  .align-center { align-items: center; }
  .mt-8 { margin-top: 8px; }
  .mt-16 { margin-top: 16px; }
  .text-gold { color: var(--gold); }
  .text-gray { color: var(--gray); }
  .text-small { font-size: 13px; }
  .text-right { text-align: right; }
  .w-full { width: 100%; }
  .mb-0 { margin-bottom: 0; }

  /* ── SETTINGS GRID ── */
  .settings-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  @media (max-width: 480px) {
    .settings-grid { grid-template-columns: 1fr; }
    .teams-row { flex-wrap: wrap; }
    .team-name { min-width: 80px; }
  }

  /* ── PASSWORD SCREEN ── */
  .password-screen {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60vh;
  }
  .password-box {
    width: 100%;
    max-width: 360px;
    text-align: center;
  }
  .password-icon { font-size: 48px; margin-bottom: 16px; }

  /* ── SCROLLBAR ── */
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: rgba(212,175,55,0.3); border-radius: 3px; }

  /* ── LOADING ── */
  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
    flex-direction: column;
    gap: 16px;
    color: var(--gold);
  }
  .spinner {
    width: 40px;
    height: 40px;
    border: 3px solid rgba(212,175,55,0.2);
    border-top-color: var(--gold);
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }
  @keyframes spin { to { transform: rotate(360deg); } }

  /* ── PARTICIPANT SELECT ── */
  .participant-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 8px;
    margin-bottom: 16px;
  }
  .participant-pill {
    padding: 10px 14px;
    border-radius: 8px;
    border: 1.5px solid rgba(255,255,255,0.1);
    background: rgba(0,0,0,0.25);
    color: var(--white);
    cursor: pointer;
    font-family: 'Barlow', sans-serif;
    font-size: 14px;
    text-align: center;
    transition: all 0.15s;
  }
  .participant-pill:hover { border-color: var(--gold); color: var(--gold); }
  .participant-pill.selected { border-color: var(--gold); background: rgba(212,175,55,0.12); color: var(--gold-light); }
`;

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function App() {
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState("landing"); // landing | participant | admin | leaderboard | rules
  const [adminUnlocked, setAdminUnlocked] = useState(false);

  const [matches, setMatches] = useState([]);
  const [participants, setParticipants] = useState([]);
  const [predictions, setPredictions] = useState({});
  const [bonuses, setBonuses] = useState({ results: null }); // results = admin set, per participant = user predictions
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);

  // Participant session
  const [myId, setMyId] = useState(null);
  const [myName, setMyName] = useState("");
  const [adminTab, setAdminTab] = useState("matches");

  // Notifications
  const [toast, setToast] = useState(null);

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  // ── LOAD ──────────────────────────────────────────────────────────────────
  useEffect(() => {
    (async () => {
      const [m, p, pr, b, s] = await Promise.all([
        load(STORAGE_KEYS.matches),
        load(STORAGE_KEYS.participants),
        load(STORAGE_KEYS.predictions),
        load(STORAGE_KEYS.bonuses),
        load(STORAGE_KEYS.settings),
      ]);
      if (m) setMatches(m);
      if (p) setParticipants(p);
      if (pr) setPredictions(pr);
      if (b) setBonuses(b);
      else setBonuses({ results: null });
      if (s) setSettings({ ...DEFAULT_SETTINGS, ...s });
      setLoading(false);
    })();
  }, []);

  // ── PERSIST ───────────────────────────────────────────────────────────────
  const persistMatches = async (val) => { setMatches(val); await save(STORAGE_KEYS.matches, val); };
  const persistParticipants = async (val) => { setParticipants(val); await save(STORAGE_KEYS.participants, val); };
  const persistPredictions = async (val) => { setPredictions(val); await save(STORAGE_KEYS.predictions, val); };
  const persistBonuses = async (val) => { setBonuses(val); await save(STORAGE_KEYS.bonuses, val); };
  const persistSettings = async (val) => { setSettings(val); await save(STORAGE_KEYS.settings, val); };

  // ── LOADING SCREEN ────────────────────────────────────────────────────────
  if (loading) {
    return (
      <>
        <style>{css}</style>
        <div className="loading"><div className="spinner" /><span>Laden…</span></div>
      </>
    );
  }

  // ── LANDING ───────────────────────────────────────────────────────────────
  const Landing = () => (
    <div style={{ textAlign: "center", padding: "32px 16px" }}>
      <div className="card" style={{ maxWidth: 420, margin: "0 auto" }}>
        <div style={{ fontSize: 48, marginBottom: 12 }}>⚽</div>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 28, letterSpacing: 2, color: "var(--gold)", marginBottom: 8 }}>
          Welkom bij {settings.tournamentName}
        </h2>
        <p className="text-gray text-small" style={{ marginBottom: 24 }}>Kies wat je wilt doen</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <button className="btn btn-gold w-full" style={{ justifyContent: "center", padding: "14px" }}
            onClick={() => setView("participant")}>
            🏃 Ik doe mee / Prono invullen
          </button>
          <button className="btn btn-outline w-full" style={{ justifyContent: "center", padding: "14px" }}
            onClick={() => setView("leaderboard")}>
            🏆 Bekijk klassement
          </button>
          <button className="btn btn-outline w-full" style={{ justifyContent: "center", padding: "14px" }}
            onClick={() => setView("rules")}>
            📋 Spelregels
          </button>
          <button className="btn btn-ghost w-full" style={{ justifyContent: "center", padding: "14px" }}
            onClick={() => setView("admin")}>
            🔐 Admin (beheer)
          </button>
        </div>
      </div>
    </div>
  );

  // ── ADMIN LOGIN ────────────────────────────────────────────────────────────
  const AdminLogin = () => {
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleLogin = () => {
      if (password === ADMIN_PASSWORD) {
        setAdminUnlocked(true);
        setError(false);
      } else {
        setError(true);
      }
    };

    return (
      <div className="password-screen">
        <div className="password-box">
          <div className="password-icon">🔐</div>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 28, color: "var(--gold)", marginBottom: 8, letterSpacing: 2 }}>
            Admin Toegang
          </h2>
          <p className="text-gray text-small" style={{ marginBottom: 24 }}>Voer het beheerderswachtwoord in</p>
          <div className="form-group">
            <input
              key="admin-password-input"
              type="password"
              className="form-input"
              placeholder="Wachtwoord"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleLogin();
              }}
            />
            {error && <div className="alert alert-error mt-8">❌ Onjuist wachtwoord</div>}
          </div>
          <button className="btn btn-gold w-full" style={{ justifyContent: "center" }}
            onClick={handleLogin}>
            Inloggen
          </button>
          <button className="btn btn-ghost mt-8 w-full" style={{ justifyContent: "center" }}
            onClick={() => setView("landing")}>← Terug</button>
        </div>
      </div>
    );
  };

  // ── ADMIN PANEL ────────────────────────────────────────────────────────────
  const AdminPanel = () => {
    const [newMatch, setNewMatch] = useState({ home: "", away: "", date: "", group: "", phase: "group" });
    const [editResult, setEditResult] = useState({});
    const [bonusResults, setBonusResults] = useState(bonuses.results || { topScorer: "", topScorerTop3: [], winner: "", runnerUp: "", third: "" });

    const addMatch = async () => {
      if (!newMatch.home.trim() || !newMatch.away.trim()) return;
      const m = { ...newMatch, id: Date.now().toString(), result: null };
      await persistMatches([...matches, m]);
      setNewMatch({ home: "", away: "", date: "", group: "", phase: "group" });
      showToast("Wedstrijd toegevoegd ✓");
    };

    const removeMatch = async (id) => {
      await persistMatches(matches.filter((m) => m.id !== id));
      showToast("Wedstrijd verwijderd", "error");
    };

    const setResult = async (matchId) => {
      const r = editResult[matchId];
      if (!r || r.home === "" || r.away === "") return;
      const updated = matches.map((m) => m.id === matchId ? { ...m, result: r } : m);
      await persistMatches(updated);
      showToast("Uitslag opgeslagen ✓");
    };

    const clearResult = async (matchId) => {
      const updated = matches.map((m) => m.id === matchId ? { ...m, result: null } : m);
      await persistMatches(updated);
      showToast("Uitslag gewist", "error");
    };

    const saveBonusResults = async () => {
      await persistBonuses({ ...bonuses, results: bonusResults });
      showToast("Bonusuitslagen opgeslagen ✓");
    };

    const removeParticipant = async (id) => {
      await persistParticipants(participants.filter((p) => p.id !== id));
      const upd = { ...predictions };
      delete upd[id];
      await persistPredictions(upd);
      const updBonus = { ...bonuses };
      delete updBonus[id];
      await persistBonuses(updBonus);
      showToast("Deelnemer verwijderd", "error");
    };

    const resetPin = async (id) => {
      const updated = participants.map(p => p.id === id ? { ...p, pin: "0000" } : p);
      await persistParticipants(updated);
      showToast("Pincode gereset naar 0000", "success");
    };

    return (
      <div>
        <div className="tab-bar">
          {[["matches", "⚽ Wedstrijden"], ["results", "📋 Uitslagen"], ["bonuses", "🏆 Bonusvragen"], ["participants", "👥 Deelnemers"], ["settings", "⚙️ Instellingen"]].map(([key, label]) => (
            <button key={key} className={`tab${adminTab === key ? " active" : ""}`} onClick={() => setAdminTab(key)}>{label}</button>
          ))}
        </div>

        {adminTab === "matches" && (
          <div>
            <div className="section-title">Wedstrijd Toevoegen</div>
            <div className="card">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }}>
                <div className="form-group mb-0">
                  <label className="form-label">Thuisploeg</label>
                  <input className="form-input" placeholder="bijv. België" value={newMatch.home}
                    onChange={(e) => setNewMatch({ ...newMatch, home: e.target.value })} />
                </div>
                <div className="form-group mb-0">
                  <label className="form-label">Uitploeg</label>
                  <input className="form-input" placeholder="bijv. Nederland" value={newMatch.away}
                    onChange={(e) => setNewMatch({ ...newMatch, away: e.target.value })} />
                </div>
                <div className="form-group mb-0">
                  <label className="form-label">Datum & tijd</label>
                  <input className="form-input" type="datetime-local" value={newMatch.date}
                    onChange={(e) => setNewMatch({ ...newMatch, date: e.target.value })} />
                </div>
                <div className="form-group mb-0">
                  <label className="form-label">Groep / fase</label>
                  <input className="form-input" placeholder="bijv. Groep A" value={newMatch.group}
                    onChange={(e) => setNewMatch({ ...newMatch, group: e.target.value })} />
                </div>
              </div>
              <div className="form-group mb-0">
                <label className="form-label">Toernooi Fase (bepaalt punten)</label>
                <select className="form-input" value={newMatch.phase} onChange={(e) => setNewMatch({ ...newMatch, phase: e.target.value })}>
                  {Object.entries(PHASES).map(([key, val]) => (
                    <option key={key} value={key}>{val.name} (exact={val.exact}pt)</option>
                  ))}
                </select>
              </div>
              <button className="btn btn-gold mt-16" onClick={addMatch}>+ Toevoegen</button>
            </div>

            <div className="section-title">Wedstrijden ({matches.length})</div>
            {matches.length === 0 && <div className="empty-state"><div className="icon">📭</div><p>Nog geen wedstrijden toegevoegd</p></div>}
            {matches.map((m) => (
              <div key={m.id} className="match-card">
                <div className="teams-row">
                  <span className="team-name home">{m.home}</span>
                  <span className="vs-sep">vs</span>
                  <span className="team-name away">{m.away}</span>
                  <span className="text-small text-gray">{PHASES[m.phase]?.name || "Groep"}</span>
                  <button className="btn btn-danger btn-sm" onClick={() => removeMatch(m.id)}>✕</button>
                </div>
                <div className="text-gray text-small mt-8">{m.group && <span>{m.group} · </span>}{m.date && new Date(m.date).toLocaleString("nl-BE", { weekday: "short", day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}</div>
              </div>
            ))}
          </div>
        )}

        {adminTab === "results" && (
          <div>
            <div className="section-title">Uitslagen Invoeren</div>
            {matches.length === 0 && <div className="empty-state"><div className="icon">⚽</div><p>Voeg eerst wedstrijden toe</p></div>}
            {matches.map((m) => (
              <div key={m.id} className="match-card">
                <div className="match-header">
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15 }}>{m.home} — {m.away}</div>
                    <div className="match-meta">{m.group} · {PHASES[m.phase]?.name}</div>
                  </div>
                  <span className={`match-badge ${m.result ? "badge-result" : "badge-open"}`}>
                    {m.result ? `${m.result.home} – ${m.result.away}` : "Open"}
                  </span>
                </div>
                <div className="teams-row">
                  <div className="form-group mb-0" style={{ flex: 1, textAlign: "right" }}>
                    <input className="form-input score-input" type="number" min="0" max="99" placeholder="0"
                      value={editResult[m.id]?.home ?? m.result?.home ?? ""}
                      onChange={(e) => setEditResult({ ...editResult, [m.id]: { ...editResult[m.id], home: e.target.value } })} />
                  </div>
                  <span className="vs-sep" style={{ fontSize: 20 }}>–</span>
                  <div className="form-group mb-0" style={{ flex: 1 }}>
                    <input className="form-input score-input" type="number" min="0" max="99" placeholder="0"
                      value={editResult[m.id]?.away ?? m.result?.away ?? ""}
                      onChange={(e) => setEditResult({ ...editResult, [m.id]: { ...editResult[m.id], away: e.target.value } })} />
                  </div>
                  <div style={{ display: "flex", gap: 6 }}>
                    <button className="btn btn-gold btn-sm" onClick={() => setResult(m.id)}>✓ Opslaan</button>
                    {m.result && <button className="btn btn-danger btn-sm" onClick={() => clearResult(m.id)}>✕</button>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {adminTab === "bonuses" && (
          <div>
            <div className="section-title">Bonusvragen Uitslagen</div>
            <div className="card">
              <div className="form-group">
                <label className="form-label">Topscorer ({DEFAULT_SETTINGS.topScorerExact}pt exact)</label>
                <input className="form-input" placeholder="bijv. Kylian Mbappé" value={bonusResults.topScorer}
                  onChange={(e) => setBonusResults({ ...bonusResults, topScorer: e.target.value })} />
              </div>
              <div className="form-group">
                <label className="form-label">Top 3 topscorers (komma-gescheiden, {DEFAULT_SETTINGS.topScorerInTop3}pt als hierin)</label>
                <input className="form-input" placeholder="bijv. Mbappé, Kane, Messi" value={bonusResults.topScorerTop3?.join(", ") || ""}
                  onChange={(e) => setBonusResults({ ...bonusResults, topScorerTop3: e.target.value.split(",").map(s => s.trim()).filter(Boolean) })} />
              </div>
              <div className="form-group">
                <label className="form-label">Winnaar WK ({DEFAULT_SETTINGS.winnerPoints}pt)</label>
                <input className="form-input" placeholder="bijv. Frankrijk" value={bonusResults.winner}
                  onChange={(e) => setBonusResults({ ...bonusResults, winner: e.target.value })} />
              </div>
              <div className="form-group">
                <label className="form-label">Runner-up ({DEFAULT_SETTINGS.runnerUpPoints}pt)</label>
                <input className="form-input" placeholder="bijv. Brazilië" value={bonusResults.runnerUp}
                  onChange={(e) => setBonusResults({ ...bonusResults, runnerUp: e.target.value })} />
              </div>
              <div className="form-group">
                <label className="form-label">Derde plaats ({DEFAULT_SETTINGS.thirdPlacePoints}pt)</label>
                <input className="form-input" placeholder="bijv. Nederland" value={bonusResults.third}
                  onChange={(e) => setBonusResults({ ...bonusResults, third: e.target.value })} />
              </div>
              <button className="btn btn-gold w-full" onClick={saveBonusResults}>💾 Opslaan</button>
            </div>
          </div>
        )}

        {adminTab === "participants" && (
          <div>
            <div className="section-title">Deelnemers ({participants.length})</div>
            {participants.length === 0 && <div className="empty-state"><div className="icon">👥</div><p>Nog geen deelnemers</p></div>}
            {participants.map((p) => {
              const pts = totalPoints(p.id, predictions, bonuses, matches);
              const count = Object.keys(predictions[p.id] || {}).length;
              return (
                <div key={p.id} className="rank-row">
                  <span style={{ fontSize: 20 }}>👤</span>
                  <span className="rank-name">{p.name}</span>
                  <span className="text-gray text-small">{count} prono's</span>
                  <span className="rank-pts">{pts}</span>
                  <span className="rank-pts-label">pts</span>
                  <button className="btn btn-ghost btn-sm" onClick={() => resetPin(p.id)} title="Reset pincode naar 0000">🔑 Reset</button>
                  <button className="btn btn-danger btn-sm" onClick={() => removeParticipant(p.id)}>✕</button>
                </div>
              );
            })}
          </div>
        )}

        {adminTab === "settings" && (
          <div>
            <div className="section-title">Toernooi Instellingen</div>
            <div className="card">
              <div className="form-group">
                <label className="form-label">Toernooi Naam</label>
                <input className="form-input" value={settings.tournamentName}
                  onChange={(e) => persistSettings({ ...settings, tournamentName: e.target.value })} />
              </div>
              <div className="form-group">
                <label className="form-label">Bonusvragen Deadline</label>
                <input className="form-input" type="datetime-local" value={settings.bonusDeadline}
                  onChange={(e) => persistSettings({ ...settings, bonusDeadline: e.target.value })} />
                <div className="text-small text-gray" style={{ marginTop: 4 }}>
                  Na deze datum kunnen deelnemers geen bonusvragen meer wijzigen
                </div>
              </div>
            </div>
            <div className="section-title">Bonusvragen Punten</div>
            <div className="card">
              <div className="settings-grid">
                <div className="form-group mb-0">
                  <label className="form-label">Topscorer exact</label>
                  <input className="form-input" type="number" min="0" value={settings.topScorerExact}
                    onChange={(e) => persistSettings({ ...settings, topScorerExact: Number(e.target.value) })} />
                </div>
                <div className="form-group mb-0">
                  <label className="form-label">Topscorer in top-3</label>
                  <input className="form-input" type="number" min="0" value={settings.topScorerInTop3}
                    onChange={(e) => persistSettings({ ...settings, topScorerInTop3: Number(e.target.value) })} />
                </div>
                <div className="form-group mb-0">
                  <label className="form-label">Winnaar</label>
                  <input className="form-input" type="number" min="0" value={settings.winnerPoints}
                    onChange={(e) => persistSettings({ ...settings, winnerPoints: Number(e.target.value) })} />
                </div>
                <div className="form-group mb-0">
                  <label className="form-label">Runner-up</label>
                  <input className="form-input" type="number" min="0" value={settings.runnerUpPoints}
                    onChange={(e) => persistSettings({ ...settings, runnerUpPoints: Number(e.target.value) })} />
                </div>
                <div className="form-group mb-0">
                  <label className="form-label">Derde plaats</label>
                  <input className="form-input" type="number" min="0" value={settings.thirdPlacePoints}
                    onChange={(e) => persistSettings({ ...settings, thirdPlacePoints: Number(e.target.value) })} />
                </div>
              </div>
            </div>
            <div className="section-title">⚠️ Danger Zone</div>
            <div className="card">
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>Reset Alle Data</div>
                <div className="text-small text-gray">Verwijdert alle wedstrijden, deelnemers, prono's en bonusvragen. Instellingen blijven behouden.</div>
              </div>
              <button 
                className="btn btn-danger w-full" 
                style={{ justifyContent: "center" }}
                onClick={() => {
                  if (window.confirm("⚠️ WAARSCHUWING: Dit verwijdert ALLE data (wedstrijden, deelnemers, prono's).\n\nWeet je het ZEKER?")) {
                    if (window.confirm("‼️ LAATSTE KANS: Deze actie kan NIET ongedaan gemaakt worden!\n\nDoorgaan?")) {
                      (async () => {
                        await persistMatches([]);
                        await persistParticipants([]);
                        await persistPredictions({});
                        await persistBonuses({ results: null });
                        showToast("Alle data gereset", "success");
                        // Reset local state
                        setMatches([]);
                        setParticipants([]);
                        setPredictions({});
                        setBonuses({ results: null });
                      })();
                    }
                  }
                }}>
                🗑️ Reset Alle Data
              </button>
              <div className="alert alert-error mt-16" style={{ fontSize: 13 }}>
                ⚠️ Gebruik dit alleen voor testen! Na reset is alle data permanent verloren.
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // ── PARTICIPANT VIEW ────────────────────────────────────────────────────────
  const ParticipantView = () => {
    const [localPreds, setLocalPreds] = useState(predictions[myId] || {});
    const [localBonus, setLocalBonus] = useState(bonuses[myId] || { topScorer: "", winner: "", runnerUp: "", third: "" });
    const [saved, setSaved] = useState(false);
    const [tab, setTab] = useState("predict");

    const savePredictions = async () => {
      const upd = { ...predictions, [myId]: localPreds };
      await persistPredictions(upd);
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
      showToast("Prono's opgeslagen ✓");
    };

    const saveBonuses = async () => {
      const upd = { ...bonuses, [myId]: localBonus };
      await persistBonuses(upd);
      showToast("Bonusvragen opgeslagen ✓");
    };

    const now = new Date();
    const openMatches = matches.filter((m) => !m.date || new Date(m.date) > now);
    const closedMatches = matches.filter((m) => m.date && new Date(m.date) <= now);

    const myPoints = totalPoints(myId, predictions, bonuses, matches);

    return (
      <div>
        <div className="card card-dark" style={{ marginBottom: 16, display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 28 }}>👤</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: 17 }}>{myName}</div>
            <div className="text-gray text-small">Jouw totaal: <span className="text-gold" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 18 }}>{myPoints}</span> punten</div>
          </div>
          <button className="btn btn-ghost btn-sm" onClick={() => { setMyId(null); setMyName(""); }}>↩ Wissel</button>
        </div>

        <div className="tab-bar">
          <button className={`tab${tab === "predict" ? " active" : ""}`} onClick={() => setTab("predict")}>⚽ Prono's</button>
          <button className={`tab${tab === "bonuses" ? " active" : ""}`} onClick={() => setTab("bonuses")}>🏆 Bonus</button>
          <button className={`tab${tab === "results" ? " active" : ""}`} onClick={() => setTab("results")}>📊 Resultaten</button>
        </div>

        {tab === "predict" && (
          <div>
            {matches.length === 0 && <div className="empty-state"><div className="icon">⏳</div><p>Nog geen wedstrijden beschikbaar</p></div>}

            {openMatches.length > 0 && (
              <>
                <div className="section-title">Open wedstrijden</div>
                {openMatches.map((m) => {
                  const pred = localPreds[m.id] || { home: "", away: "" };
                  const phaseInfo = PHASES[m.phase] || PHASES.group;
                  return (
                    <div key={m.id} className="match-card">
                      <div className="match-header">
                        <div className="match-meta">{m.group && <span>{m.group} · </span>}{phaseInfo.name} · {m.date && new Date(m.date).toLocaleString("nl-BE", { weekday: "short", day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}</div>
                        <span className="match-badge badge-open">Open</span>
                      </div>
                      <div className="teams-row">
                        <span className="team-name home">{m.home}</span>
                        <input className="form-input score-input" type="number" min="0" max="99"
                          value={pred.home}
                          onChange={(e) => setLocalPreds({ ...localPreds, [m.id]: { ...pred, home: e.target.value } })} />
                        <span className="vs-sep">–</span>
                        <input className="form-input score-input" type="number" min="0" max="99"
                          value={pred.away}
                          onChange={(e) => setLocalPreds({ ...localPreds, [m.id]: { ...pred, away: e.target.value } })} />
                        <span className="team-name away">{m.away}</span>
                      </div>
                    </div>
                  );
                })}
                <button className="btn btn-gold w-full" style={{ justifyContent: "center", padding: 14 }} onClick={savePredictions}>
                  💾 Prono's opslaan
                </button>
              </>
            )}

            {closedMatches.length > 0 && (
              <>
                <div className="section-title" style={{ marginTop: 20 }}>Gesloten wedstrijden</div>
                {closedMatches.map((m) => {
                  const pred = predictions[myId]?.[m.id];
                  const pts = pred && m.result ? calcPoints(pred, m.result, m.phase) : null;
                  const phaseInfo = PHASES[m.phase] || PHASES.group;
                  return (
                    <div key={m.id} className="match-card" style={{ opacity: 0.7 }}>
                      <div className="match-header">
                        <div className="match-meta">{m.group} · {phaseInfo.name}</div>
                        <span className="match-badge badge-closed">Gesloten</span>
                      </div>
                      <div className="teams-row">
                        <span className="team-name home" style={{ fontSize: 14 }}>{m.home}</span>
                        <div className="result-display">
                          {pred ? <span style={{ fontFamily: "'Bebas Neue'", fontSize: 22, color: "var(--gray)" }}>{pred.home || "?"} – {pred.away || "?"}</span> : <span className="text-gray text-small">geen prono</span>}
                        </div>
                        <span className="team-name away" style={{ fontSize: 14 }}>{m.away}</span>
                        {pts !== null && (
                          <span className={`pts-badge ${pts === phaseInfo.exact ? "pts-exact" : pts > 0 ? "pts-winner" : "pts-zero"}`}>{pts}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        )}

        {tab === "bonuses" && (
          <div>
            <div className="section-title">Bonusvragen</div>
            {(() => {
              const now = new Date();
              const deadline = new Date(settings.bonusDeadline);
              const isClosed = now > deadline;
              
              if (isClosed) {
                return (
                  <div className="card">
                    <div className="alert alert-error">
                      🔒 Bonusvragen zijn gesloten sinds {deadline.toLocaleString("nl-BE", { weekday: "short", day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}
                    </div>
                    {bonuses[myId] && (
                      <div style={{ marginTop: 16 }}>
                        <div className="text-small text-gray" style={{ marginBottom: 8 }}>Jouw keuzes:</div>
                        <div style={{ fontSize: 15 }}>
                          {bonuses[myId].topScorer && <div>🥇 Topscorer: <strong>{bonuses[myId].topScorer}</strong></div>}
                          {bonuses[myId].winner && <div>🏆 Winnaar: <strong>{bonuses[myId].winner}</strong></div>}
                          {bonuses[myId].runnerUp && <div>🥈 Runner-up: <strong>{bonuses[myId].runnerUp}</strong></div>}
                          {bonuses[myId].third && <div>🥉 Derde: <strong>{bonuses[myId].third}</strong></div>}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              
              return (
                <div className="card">
                  <div className="alert alert-info" style={{ marginBottom: 16 }}>
                    ⏰ Deadline: {deadline.toLocaleString("nl-BE", { weekday: "short", day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Topscorer WK ({DEFAULT_SETTINGS.topScorerExact}pt exact, {DEFAULT_SETTINGS.topScorerInTop3}pt als in top-3)</label>
                    <input className="form-input" placeholder="bijv. Kylian Mbappé" value={localBonus.topScorer}
                      onChange={(e) => setLocalBonus({ ...localBonus, topScorer: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Winnaar WK ({DEFAULT_SETTINGS.winnerPoints}pt)</label>
                    <input className="form-input" placeholder="bijv. Frankrijk" value={localBonus.winner}
                      onChange={(e) => setLocalBonus({ ...localBonus, winner: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Runner-up / Tweede plaats ({DEFAULT_SETTINGS.runnerUpPoints}pt)</label>
                    <input className="form-input" placeholder="bijv. Brazilië" value={localBonus.runnerUp}
                      onChange={(e) => setLocalBonus({ ...localBonus, runnerUp: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Derde plaats ({DEFAULT_SETTINGS.thirdPlacePoints}pt)</label>
                    <input className="form-input" placeholder="bijv. Nederland" value={localBonus.third}
                      onChange={(e) => setLocalBonus({ ...localBonus, third: e.target.value })} />
                  </div>
                  <button className="btn btn-gold w-full" onClick={saveBonuses}>💾 Opslaan</button>
                </div>
              );
            })()}
          </div>
        )}

        {tab === "results" && (
          <div>
            <div className="section-title">Mijn Resultaten</div>
            {matches.filter(m => m.result).length === 0 && <div className="empty-state"><div className="icon">⏳</div><p>Nog geen uitslagen beschikbaar</p></div>}
            {matches.filter(m => m.result).map((m) => {
              const pred = predictions[myId]?.[m.id];
              const pts = pred ? calcPoints(pred, m.result, m.phase) : null;
              const phaseInfo = PHASES[m.phase] || PHASES.group;
              return (
                <div key={m.id} className="match-card">
                  <div className="flex justify-between align-center" style={{ marginBottom: 10 }}>
                    <span className="text-small text-gray">{m.group} · {phaseInfo.name}</span>
                    {pts !== null ? (
                      <span className={`pts-badge ${pts === phaseInfo.exact ? "pts-exact" : pts > 0 ? "pts-winner" : "pts-zero"}`}>{pts}pt</span>
                    ) : <span className="pts-badge pts-pending">?</span>}
                  </div>
                  <div className="teams-row">
                    <span className="team-name home" style={{ fontSize: 14 }}>{m.home}</span>
                    <div style={{ textAlign: "center", minWidth: 100 }}>
                      <div style={{ fontSize: 11, color: "var(--gray)", fontFamily: "'Barlow Condensed'", letterSpacing: 1, textTransform: "uppercase", marginBottom: 2 }}>uitslag</div>
                      <div className="result-score">{m.result.home} – {m.result.away}</div>
                      <div style={{ fontSize: 11, color: "var(--gray)", fontFamily: "'Barlow Condensed'", letterSpacing: 1, textTransform: "uppercase", marginTop: 2 }}>jouw prono</div>
                      <div style={{ fontFamily: "'Bebas Neue'", fontSize: 20, color: pred ? "var(--white)" : "var(--gray)" }}>
                        {pred ? `${pred.home} – ${pred.away}` : "—"}
                      </div>
                    </div>
                    <span className="team-name away" style={{ fontSize: 14 }}>{m.away}</span>
                  </div>
                </div>
              );
            })}
            
            {bonuses.results && (
              <>
                <div className="section-title">Bonusvragen Resultaat</div>
                <div className="card">
                  {bonuses.results.topScorer && (
                    <div style={{ marginBottom: 12 }}>
                      <div className="text-small text-gray">Topscorer</div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ fontWeight: 700 }}>{bonuses.results.topScorer}</span>
                        {bonuses[myId]?.topScorer === bonuses.results.topScorer && <span className="pts-badge pts-exact">{DEFAULT_SETTINGS.topScorerExact}</span>}
                        {bonuses[myId]?.topScorer !== bonuses.results.topScorer && bonuses.results.topScorerTop3?.includes(bonuses[myId]?.topScorer) && <span className="pts-badge pts-winner">{DEFAULT_SETTINGS.topScorerInTop3}</span>}
                      </div>
                      {bonuses[myId]?.topScorer && <div className="text-small text-gray">Jouw keuze: {bonuses[myId].topScorer}</div>}
                    </div>
                  )}
                  {bonuses.results.winner && (
                    <div style={{ marginBottom: 12 }}>
                      <div className="text-small text-gray">Winnaar</div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ fontWeight: 700 }}>{bonuses.results.winner}</span>
                        {bonuses[myId]?.winner === bonuses.results.winner && <span className="pts-badge pts-exact">{DEFAULT_SETTINGS.winnerPoints}</span>}
                      </div>
                      {bonuses[myId]?.winner && <div className="text-small text-gray">Jouw keuze: {bonuses[myId].winner}</div>}
                    </div>
                  )}
                  {bonuses.results.runnerUp && (
                    <div style={{ marginBottom: 12 }}>
                      <div className="text-small text-gray">Runner-up</div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ fontWeight: 700 }}>{bonuses.results.runnerUp}</span>
                        {bonuses[myId]?.runnerUp === bonuses.results.runnerUp && <span className="pts-badge pts-exact">{DEFAULT_SETTINGS.runnerUpPoints}</span>}
                      </div>
                      {bonuses[myId]?.runnerUp && <div className="text-small text-gray">Jouw keuze: {bonuses[myId].runnerUp}</div>}
                    </div>
                  )}
                  {bonuses.results.third && (
                    <div>
                      <div className="text-small text-gray">Derde plaats</div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ fontWeight: 700 }}>{bonuses.results.third}</span>
                        {bonuses[myId]?.third === bonuses.results.third && <span className="pts-badge pts-exact">{DEFAULT_SETTINGS.thirdPlacePoints}</span>}
                      </div>
                      {bonuses[myId]?.third && <div className="text-small text-gray">Jouw keuze: {bonuses[myId].third}</div>}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    );
  };

  // ── PARTICIPANT SELECT / REGISTER ──────────────────────────────────────────
  const ParticipantGate = () => {
    const [mode, setMode] = useState("select"); // select | login | register
    const [selectedParticipant, setSelectedParticipant] = useState(null);
    const [newName, setNewName] = useState("");
    const [newPin, setNewPin] = useState("");
    const [loginPin, setLoginPin] = useState("");
    const [loginError, setLoginError] = useState(false);

    const loginExisting = async () => {
      if (!loginPin || !selectedParticipant) {
        setLoginError(true);
        return;
      }
      if (loginPin === selectedParticipant.pin) {
        setMyId(selectedParticipant.id);
        setMyName(selectedParticipant.name);
        setLoginError(false);
        setLoginPin("");
      } else {
        setLoginError(true);
      }
    };

    const register = async () => {
      if (!newName.trim() || !newPin.trim()) return;
      if (newPin.length !== 4 || !/^\d{4}$/.test(newPin)) {
        showToast("Pincode moet 4 cijfers zijn", "error");
        return;
      }
      const exists = participants.find((p) => p.name.toLowerCase() === newName.trim().toLowerCase());
      if (exists) {
        showToast("Naam bestaat al, gebruik login", "error");
        return;
      }
      const p = { id: Date.now().toString(), name: newName.trim(), pin: newPin };
      await persistParticipants([...participants, p]);
      setMyId(p.id);
      setMyName(p.name);
      setNewName("");
      setNewPin("");
    };

    if (myId) return <ParticipantView />;

    return (
      <div>
        {mode === "select" && (
          <>
            <div className="section-title">Wie ben jij?</div>
            {participants.length > 0 && (
              <>
                <p className="text-gray text-small" style={{ marginBottom: 12 }}>Klik op je naam:</p>
                <div className="participant-grid">
                  {participants.map((p) => (
                    <button key={p.id} className="participant-pill" onClick={() => { 
                      setSelectedParticipant(p);
                      setMode("login"); 
                    }}>
                      👤 {p.name}
                    </button>
                  ))}
                </div>
                <div className="divider" />
              </>
            )}
            <p className="text-gray text-small" style={{ marginBottom: 8 }}>Nieuw? Schrijf je in:</p>
            <button className="btn btn-gold w-full" style={{ justifyContent: "center" }} onClick={() => setMode("register")}>
              ✅ Nieuwe deelnemer
            </button>
          </>
        )}

        {mode === "login" && selectedParticipant && (
          <div className="card" style={{ maxWidth: 380 }}>
            <div style={{ textAlign: "center", marginBottom: 16 }}>
              <div style={{ fontSize: 40, marginBottom: 8 }}>👤</div>
              <div style={{ fontWeight: 700, fontSize: 20 }}>{selectedParticipant.name}</div>
            </div>
            <div className="form-group">
              <label className="form-label">Pincode (4 cijfers)</label>
              <input 
                key="login-pin-input"
                className="form-input" 
                type="password" 
                inputMode="numeric"
                maxLength="4"
                placeholder="****" 
                value={loginPin}
                onChange={(e) => { setLoginPin(e.target.value); setLoginError(false); }}
                onKeyDown={(e) => { 
                  if (e.key === "Enter") loginExisting();
                }}
              />
              {loginError && <div className="alert alert-error mt-8">❌ Onjuiste pincode</div>}
            </div>
            <button 
              className="btn btn-gold w-full" 
              style={{ justifyContent: "center" }} 
              onClick={loginExisting}
              disabled={!loginPin}>
              Inloggen
            </button>
            <button className="btn btn-ghost mt-8 w-full" style={{ justifyContent: "center" }}
              onClick={() => { 
                setMode("select"); 
                setSelectedParticipant(null); 
                setLoginPin(""); 
                setLoginError(false); 
              }}>
              ← Terug
            </button>
            <div className="alert alert-info mt-16" style={{ fontSize: 12 }}>
              💡 Pincode vergeten? Vraag de admin om je pincode te resetten naar 0000
            </div>
          </div>
        )}

        {mode === "register" && (
          <div className="card" style={{ maxWidth: 380 }}>
            <div className="form-group">
              <label className="form-label">Jouw naam</label>
              <input 
                key="register-name-input"
                className="form-input" 
                placeholder="Voornaam of bijnaam" 
                value={newName}
                onChange={(e) => setNewName(e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">Kies pincode (4 cijfers)</label>
              <input 
                key="register-pin-input"
                className="form-input" 
                type="password" 
                inputMode="numeric"
                maxLength="4"
                placeholder="****" 
                value={newPin}
                onChange={(e) => setNewPin(e.target.value.replace(/\D/g, ""))}
                onKeyDown={(e) => { if (e.key === "Enter") register(); }}
              />
              <div className="text-small text-gray" style={{ marginTop: 4 }}>Onthoud deze goed! Je hebt hem nodig om in te loggen.</div>
            </div>
            <button className="btn btn-gold w-full" style={{ justifyContent: "center" }} onClick={register}
              disabled={!newName.trim() || newPin.length !== 4}>
              ✅ Aanmelden
            </button>
            <button className="btn btn-ghost mt-8 w-full" style={{ justifyContent: "center" }}
              onClick={() => { setMode("select"); setNewName(""); setNewPin(""); }}>
              ← Terug
            </button>
          </div>
        )}
      </div>
    );
  };

  // ── RULES ──────────────────────────────────────────────────────────────────
  const Rules = () => {
    const deadline = new Date(settings.bonusDeadline);
    
    return (
      <div>
        <div className="section-title">📋 Spelregels</div>
        
        <div className="card">
          <h3 style={{ fontFamily: "'Bebas Neue'", fontSize: 22, letterSpacing: 2, color: "var(--gold)", marginBottom: 12 }}>Puntensysteem Wedstrijden</h3>
          <div style={{ fontSize: 15, lineHeight: 1.6 }}>
            <p style={{ marginBottom: 12 }}>De punten die je per wedstrijd kunt verdienen hangen af van de <strong>fase van het toernooi</strong>:</p>
            
            <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 16 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(212,175,55,0.2)" }}>
                  <th style={{ textAlign: "left", padding: "8px 4px", fontSize: 13, color: "var(--gray)", textTransform: "uppercase", letterSpacing: 1 }}>Fase</th>
                  <th style={{ textAlign: "center", padding: "8px 4px", fontSize: 13, color: "var(--gray)", textTransform: "uppercase", letterSpacing: 1 }}>Exact</th>
                  <th style={{ textAlign: "center", padding: "8px 4px", fontSize: 13, color: "var(--gray)", textTransform: "uppercase", letterSpacing: 1 }}>Winnaar</th>
                  <th style={{ textAlign: "center", padding: "8px 4px", fontSize: 13, color: "var(--gray)", textTransform: "uppercase", letterSpacing: 1 }}>Fout</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(PHASES).map(([key, phase]) => (
                  <tr key={key} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    <td style={{ padding: "10px 4px" }}>{phase.name}</td>
                    <td style={{ padding: "10px 4px", textAlign: "center", fontFamily: "'Bebas Neue'", fontSize: 20, color: "var(--gold)" }}>{phase.exact}</td>
                    <td style={{ padding: "10px 4px", textAlign: "center", fontFamily: "'Bebas Neue'", fontSize: 20, color: "var(--gold)" }}>{phase.half}</td>
                    <td style={{ padding: "10px 4px", textAlign: "center", fontFamily: "'Bebas Neue'", fontSize: 18 }}>{phase.participation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            <div style={{ background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.25)", borderRadius: 8, padding: 12, marginBottom: 16 }}>
              <div style={{ fontWeight: 700, marginBottom: 6, color: "var(--gold)" }}>💡 Hoe werkt het?</div>
              <ul style={{ fontSize: 14, paddingLeft: 20, margin: 0 }}>
                <li style={{ marginBottom: 6 }}><strong>Exacte score (100%):</strong> Je voorspelt de precieze eindstand → volle punten</li>
                <li style={{ marginBottom: 6 }}><strong>Juiste winnaar/gelijkspel (50%):</strong> Je voorspelt wie wint (of dat het gelijk eindigt), maar niet de exacte score → helft van de punten</li>
                <li><strong>Fout maar ingevuld (10%):</strong> Je voorspelling klopt niet, maar je hebt wel meegedaan → 10% van de fase-punten</li>
              </ul>
              <p style={{ fontSize: 13, color: "var(--gray)", marginTop: 8, marginBottom: 0 }}>Dit betekent: hoe verder het toernooi, hoe meer je krijgt voor meedoen. In de finale krijg je 10pt alleen al voor invullen!</p>
            </div>
            
            <div style={{ fontSize: 14, marginBottom: 12 }}>
              <strong>Voorbeeld Groepsfase:</strong><br/>
              <span style={{ color: "var(--gray)" }}>Jij voorspelt: België 2 - 1 Nederland<br/>
              Uitslag: België 3 - 0 Nederland<br/>
              → Beide België wint ✓ = <strong style={{ color: "var(--gold)" }}>5 punten</strong></span>
            </div>
            
            <div style={{ fontSize: 14 }}>
              <strong>Voorbeeld Finale:</strong><br/>
              <span style={{ color: "var(--gray)" }}>Jij voorspelt: Frankrijk 2 - 2 Spanje<br/>
              Uitslag: Frankrijk 3 - 1 Spanje<br/>
              → Frankrijk wint vs gelijkspel ✗ = <strong>10 punten</strong> (voor meedoen)</span>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 style={{ fontFamily: "'Bebas Neue'", fontSize: 22, letterSpacing: 2, color: "var(--gold)", marginBottom: 12 }}>⚽ Penalties in Knockout-fase</h3>
          <div style={{ fontSize: 15, lineHeight: 1.6 }}>
            <p style={{ marginBottom: 12 }}>In de knockout-fase kunnen wedstrijden naar penalties gaan na verlengingen. <strong>De penalty-winnaar krijgt +1 doelpunt bij de officiële score.</strong></p>
            
            <div style={{ background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.25)", borderRadius: 8, padding: 12 }}>
              <div style={{ fontWeight: 700, marginBottom: 6, color: "var(--gold)" }}>Voorbeeld:</div>
              <div style={{ fontSize: 14 }}>
                Wedstrijd eindigt 2-2 na verlengingen<br/>
                Nederland wint na penalties<br/>
                <strong>→ Officiële score: Nederland 3 - 2 tegenstander</strong>
              </div>
              <div style={{ fontSize: 14, marginTop: 8, paddingTop: 8, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                <strong>Jouw voorspelling:</strong><br/>
                • Je voorspelde 3-2 → <span style={{ color: "var(--gold)" }}>Exact! Volle punten</span><br/>
                • Je voorspelde 2-1 → <span style={{ color: "var(--gold)" }}>Winnaar juist! Helft punten</span><br/>
                • Je voorspelde 2-2 → Fout (uitslag was 3-2, niet gelijkspel) → 1 punt
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 style={{ fontFamily: "'Bebas Neue'", fontSize: 22, letterSpacing: 2, color: "var(--gold)", marginBottom: 12 }}>🏆 Bonusvragen</h3>
          <div style={{ fontSize: 15, lineHeight: 1.6 }}>
            <ul style={{ paddingLeft: 20, margin: 0 }}>
              <li style={{ marginBottom: 8 }}>Topscorer exact: <strong style={{ color: "var(--gold)" }}>{settings.topScorerExact}pt</strong></li>
              <li style={{ marginBottom: 8 }}>Topscorer in top-3: <strong style={{ color: "var(--gold)" }}>{settings.topScorerInTop3}pt</strong></li>
              <li style={{ marginBottom: 8 }}>Winnaar WK: <strong style={{ color: "var(--gold)" }}>{settings.winnerPoints}pt</strong></li>
              <li style={{ marginBottom: 8 }}>Runner-up: <strong style={{ color: "var(--gold)" }}>{settings.runnerUpPoints}pt</strong></li>
              <li style={{ marginBottom: 8 }}>Derde plaats: <strong style={{ color: "var(--gold)" }}>{settings.thirdPlacePoints}pt</strong></li>
            </ul>
            <div className="alert alert-info mt-16">
              ⏰ <strong>Deadline bonusvragen:</strong> {deadline.toLocaleString("nl-BE", { weekday: "long", day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" })}
            </div>
          </div>
        </div>

        <div className="card">
          <h3 style={{ fontFamily: "'Bebas Neue'", fontSize: 22, letterSpacing: 2, color: "var(--gold)", marginBottom: 12 }}>🔐 Pincode & Toegang</h3>
          <div style={{ fontSize: 15, lineHeight: 1.6 }}>
            <p style={{ marginBottom: 12 }}>Bij aanmelden kies je een <strong>4-cijfer pincode</strong>. Deze heb je nodig om in te loggen en je prono's te wijzigen.</p>
            <p style={{ marginBottom: 12 }}>Pincode vergeten? Geen paniek! De admin kan je pincode resetten naar <strong>0000</strong>, waarna je zelf een nieuwe pincode kiest.</p>
            <p style={{ marginBottom: 0, fontSize: 14, color: "var(--gray)" }}>💡 Tip: kies een pincode die je makkelijk onthoudt, maar die anderen niet kunnen raden.</p>
          </div>
        </div>

        <div className="card">
          <h3 style={{ fontFamily: "'Bebas Neue'", fontSize: 22, letterSpacing: 2, color: "var(--gold)", marginBottom: 12 }}>📅 Deadlines</h3>
          <div style={{ fontSize: 15, lineHeight: 1.6 }}>
            <p style={{ marginBottom: 12 }}><strong>Wedstrijden:</strong> Je kunt je prono invullen tot de aftrap van de wedstrijd. Daarna wordt de wedstrijd automatisch gesloten.</p>
            <p style={{ marginBottom: 0 }}><strong>Bonusvragen:</strong> Kunnen ingevuld worden tot {deadline.toLocaleString("nl-BE", { day: "numeric", month: "long", hour: "2-digit", minute: "2-digit" })}.</p>
          </div>
        </div>

        <div className="card mb-0">
          <h3 style={{ fontFamily: "'Bebas Neue'", fontSize: 22, letterSpacing: 2, color: "var(--gold)", marginBottom: 12 }}>🎯 Strategie</h3>
          <div style={{ fontSize: 15, lineHeight: 1.6 }}>
            <p style={{ marginBottom: 12 }}>Met het progressieve puntensysteem is het <strong>lang spannend</strong>! Iemand die de groepsfase minder goed doet, kan nog steeds inhalen met goede knockout-prono's.</p>
            <p style={{ marginBottom: 12 }}>De <strong>finale</strong> levert 100 punten op bij een exacte score — dat zijn 10 groepswedstrijden! Bonusvragen leveren tot 275 punten op.</p>
            <p style={{ marginBottom: 0, color: "var(--gold)", fontWeight: 700 }}>Veel succes! ⚽🏆</p>
          </div>
        </div>
      </div>
    );
  };

  // ── LEADERBOARD ────────────────────────────────────────────────────────────
  const Leaderboard = () => {
    const ranked = [...participants]
      .map((p) => ({ ...p, pts: totalPoints(p.id, predictions, bonuses, matches) }))
      .sort((a, b) => b.pts - a.pts);

    const medals = ["🥇", "🥈", "🥉"];
    const completedMatches = matches.filter((m) => m.result).length;

    return (
      <div>
        <div className="card card-dark" style={{ marginBottom: 16, display: "flex", gap: 20, textAlign: "center", justifyContent: "center" }}>
          <div><div style={{ fontFamily: "'Bebas Neue'", fontSize: 28, color: "var(--gold)" }}>{participants.length}</div><div className="text-gray text-small">deelnemers</div></div>
          <div style={{ width: 1, background: "rgba(255,255,255,0.08)" }} />
          <div><div style={{ fontFamily: "'Bebas Neue'", fontSize: 28, color: "var(--gold)" }}>{matches.length}</div><div className="text-gray text-small">wedstrijden</div></div>
          <div style={{ width: 1, background: "rgba(255,255,255,0.08)" }} />
          <div><div style={{ fontFamily: "'Bebas Neue'", fontSize: 28, color: "var(--gold)" }}>{completedMatches}</div><div className="text-gray text-small">gespeeld</div></div>
        </div>

        <div className="section-title">🏆 Klassement</div>
        {ranked.length === 0 && <div className="empty-state"><div className="icon">🏆</div><p>Nog geen deelnemers</p></div>}
        {ranked.map((p, i) => (
          <div key={p.id} className={`rank-row rank-${i + 1}`}>
            {i < 3 ? <span className="rank-medal">{medals[i]}</span> : <span className="rank-num">{i + 1}</span>}
            <span className="rank-name">{p.name}</span>
            <div style={{ textAlign: "right" }}>
              <div className="rank-pts">{p.pts}</div>
              <div className="rank-pts-label">punten</div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // ── RENDER ─────────────────────────────────────────────────────────────────
  return (
    <>
      <style>{css}</style>
      <div className="app">
        {/* Header */}
        <div className="header">
          <div className="header-trophy">🏆</div>
          <h1 className="header-title">{settings.tournamentName}</h1>
          <p className="header-sub">Pronostiek · {new Date().getFullYear()}</p>
          <div className="header-nav">
            {[["landing", "🏠 Home"], ["participant", "⚽ Meedoen"], ["leaderboard", "🏆 Klassement"], ["rules", "📋 Spelregels"], ["admin", "🔐 Admin"]].map(([v, label]) => (
              <button key={v} className={`btn ${view === v ? "btn-gold" : "btn-outline"} btn-sm`}
                onClick={() => { setView(v); if (v !== "admin") setAdminUnlocked(false); }}>
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Toast */}
        {toast && (
          <div className={`alert alert-${toast.type}`} style={{ position: "sticky", top: 8, zIndex: 100, marginBottom: 12 }}>
            {toast.msg}
          </div>
        )}

        {/* Views */}
        {view === "landing" && <Landing />}
        {view === "participant" && <ParticipantGate />}
        {view === "leaderboard" && <Leaderboard />}
        {view === "rules" && <Rules />}
        {view === "admin" && (
          adminUnlocked ? <AdminPanel /> : <AdminLogin />
        )}
      </div>
    </>
  );
}
