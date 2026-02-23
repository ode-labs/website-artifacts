import { useState, useRef, useEffect } from "react";

const ALL_PAIRS = [
  "Taste & Scent", "Taste & Touch", "Taste & Sight", "Taste & Sound",
  "Taste & Space", "Taste & Time", "Taste & System", "Scent & Touch",
  "Scent & Sight", "Scent & Sound", "Scent & Space", "Scent & Time",
  "Scent & System", "Touch & Sight", "Touch & Sound", "Touch & Space",
  "Touch & Time", "Touch & System", "Sight & Sound", "Sight & Space",
  "Sight & Time", "Sight & System", "Sound & Space", "Sound & Time",
  "Sound & System", "Space & Time", "Space & System", "Time & System",
];

const COLORS = [
  "#c9783a", "#4a7c6f", "#8b5e83", "#5b7fa6", "#b5833a",
  "#3a7a6b", "#7a4a6b", "#4a6b8a", "#9b6b3a", "#3a6b7a",
  "#7a5a3a", "#4a8a6b", "#6b4a7a", "#3a5a8b", "#8a6b3a",
  "#3a7a5a", "#6b3a7a", "#4a7a8a", "#9a5a3a", "#3a6a7a",
  "#7a4a5a", "#5a8a6b", "#6a4a8a", "#3a5a6b", "#8a5a4a",
  "#4a6a7a", "#7a6a3a", "#3a7a6a",
];

const STORAGE_KEY = "ode-8c2-state";

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function saveState(pairs, completed) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ pairs, completed, savedAt: new Date().toISOString() }));
  } catch {}
}

function drawWheel(canvas, pairs, rotation) {
  const dpr = window.devicePixelRatio || 1;
  const cssSize = canvas.clientWidth || 360;

  if (canvas.width !== Math.round(cssSize * dpr)) {
    canvas.width = Math.round(cssSize * dpr);
    canvas.height = Math.round(cssSize * dpr);
  }

  const ctx = canvas.getContext("2d");
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const W = cssSize;
  const H = cssSize;
  const cx = W / 2;
  const cy = H / 2;
  const radius = Math.min(cx, cy) - 6;

  ctx.clearRect(0, 0, W, H);

  if (pairs.length === 0) {
    ctx.fillStyle = "#1a1a2a";
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "#c9a84c";
    ctx.font = "bold 15px Georgia, serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("All pairs explored", cx, cy);
    return;
  }

  const n = pairs.length;
  const arc = (2 * Math.PI) / n;

  pairs.forEach((pair, i) => {
    const startAngle = rotation + i * arc;
    const endAngle = startAngle + arc;

    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fillStyle = COLORS[i % COLORS.length];
    ctx.fill();
    ctx.strokeStyle = "#0a0a0f";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(startAngle + arc / 2);
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "rgba(255,255,255,0.95)";
    ctx.shadowColor = "rgba(0,0,0,0.7)";
    ctx.shadowBlur = 3;
    const fontSize = n > 16 ? 8.5 : n > 10 ? 10 : n > 6 ? 11.5 : 13;
    ctx.font = `600 ${fontSize}px 'Georgia', serif`;
    ctx.fillText(pair, radius - 12, 0);
    ctx.restore();
  });

  // Outer ring
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
  ctx.strokeStyle = "rgba(201,168,76,0.3)";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Center hub
  ctx.beginPath();
  ctx.arc(cx, cy, 20, 0, 2 * Math.PI);
  ctx.fillStyle = "#0a0a0f";
  ctx.fill();
  ctx.strokeStyle = "#c9a84c";
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Center dot
  ctx.beginPath();
  ctx.arc(cx, cy, 5, 0, 2 * Math.PI);
  ctx.fillStyle = "#c9a84c";
  ctx.fill();
}

export default function App() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const rotationRef = useRef(0);
  const [spinning, setSpinning] = useState(false);
  const [landed, setLanded] = useState(null);
  const [showBacklog, setShowBacklog] = useState(false);
  const [justSaved, setJustSaved] = useState(false);

  const [pairs, setPairs] = useState(() => {
    const saved = loadState();
    return saved ? saved.pairs : [...ALL_PAIRS];
  });

  const [completed, setCompleted] = useState(() => {
    const saved = loadState();
    return saved ? saved.completed : [];
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    drawWheel(canvas, pairs, rotationRef.current);
  }, [pairs]);

  // Persist on every change
  useEffect(() => {
    saveState(pairs, completed);
    if (pairs.length < ALL_PAIRS.length || completed.length > 0) {
      setJustSaved(true);
      const t = setTimeout(() => setJustSaved(false), 1500);
      return () => clearTimeout(t);
    }
  }, [pairs, completed]);

  const spin = () => {
    if (spinning || pairs.length === 0) return;
    setLanded(null);

    setSpinning(true);
    const totalRotation = 2 * Math.PI * (7 + Math.random() * 8);
    const duration = 3800 + Math.random() * 800;
    const start = performance.now();
    const startRot = rotationRef.current;

    const animate = (now) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      // Ease out quart
      const ease = 1 - Math.pow(1 - t, 4);
      rotationRef.current = startRot + totalRotation * ease;

      drawWheel(canvasRef.current, pairs, rotationRef.current);

      if (t < 1) {
        animRef.current = requestAnimationFrame(animate);
      } else {
        setSpinning(false);
        // Pointer is on the RIGHT side (angle = 0)
        const n = pairs.length;
        const arc = (2 * Math.PI) / n;
        // normalise rotation so we know where angle=0 lands
        const norm = ((rotationRef.current % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
        // angle 0 relative to slice start
        const relative = (2 * Math.PI - norm + 2 * Math.PI) % (2 * Math.PI);
        const idx = Math.floor(relative / arc) % n;
        setLanded(pairs[idx]);
      }
    };
    animRef.current = requestAnimationFrame(animate);
  };

  const markComplete = () => {
    if (!landed) return;
    const completedItem = { pair: landed, completedAt: new Date().toISOString() };
    setCompleted((c) => [completedItem, ...c]);
    setPairs((p) => p.filter((x) => x !== landed));
    setLanded(null);
  };

  const keepOnWheel = () => setLanded(null);

  const resetAll = () => {
    if (!window.confirm("Reset all progress and start over?")) return;
    setPairs([...ALL_PAIRS]);
    setCompleted([]);
    setLanded(null);
    rotationRef.current = 0;
    localStorage.removeItem(STORAGE_KEY);
  };

  const formatDate = (iso) => {
    const d = new Date(iso);
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0f",
      color: "#e8ddc8",
      fontFamily: "Georgia, 'Times New Roman', serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "40px 20px 60px",
    }}>

      {/* Header */}
      <header style={{ textAlign: "center", marginBottom: "36px" }}>
        <div style={{
          fontSize: "11px",
          letterSpacing: "0.3em",
          color: "#c9a84c",
          textTransform: "uppercase",
          marginBottom: "10px",
          opacity: 0.8,
        }}>
          Ode Labs
        </div>
        <h1 style={{
          fontSize: "clamp(28px, 6vw, 48px)",
          fontWeight: "normal",
          color: "#e8ddc8",
          letterSpacing: "0.06em",
          lineHeight: 1.1,
          marginBottom: "10px",
        }}>
          8C2 Sensory Wheel
        </h1>
        <p style={{
          fontSize: "13px",
          color: "#6b6050",
          letterSpacing: "0.08em",
          fontStyle: "italic",
        }}>
          8 senses, choose 2 — an ode to combinatorics
        </p>
        <div style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          marginTop: "16px",
          fontSize: "12px",
          color: "#5a5040",
          letterSpacing: "0.05em",
        }}>
          <span>{pairs.length} remaining</span>
          <span style={{ color: "#2a2a1a" }}>·</span>
          <span>{completed.length} / 28 explored</span>
        </div>
      </header>

      {/* Wheel container */}
      <div style={{ position: "relative", marginBottom: "32px" }}>
        {/* Pointer arrow */}
        <div style={{
          position: "absolute",
          right: "-18px",
          top: "50%",
          transform: "translateY(-50%)",
          width: 0,
          height: 0,
          borderTop: "11px solid transparent",
          borderBottom: "11px solid transparent",
          borderRight: "20px solid #c9a84c",
          zIndex: 10,
          filter: "drop-shadow(0 0 8px rgba(201,168,76,0.6))",
        }} />
        <canvas
          ref={canvasRef}
          style={{
            width: "360px",
            height: "360px",
            borderRadius: "50%",
            display: "block",
            boxShadow: "0 0 60px rgba(201,168,76,0.08), 0 20px 80px rgba(0,0,0,0.9)",
          }}
        />
      </div>

      {/* Progress bar */}
      <div style={{
        width: "360px",
        height: "2px",
        background: "#1a1a20",
        borderRadius: "2px",
        marginBottom: "32px",
        overflow: "hidden",
      }}>
        <div style={{
          height: "100%",
          width: `${(completed.length / 28) * 100}%`,
          background: "linear-gradient(90deg, #c9783a, #c9a84c)",
          borderRadius: "2px",
          transition: "width 0.6s ease",
        }} />
      </div>

      {/* Spin button */}
      <button
        onClick={spin}
        disabled={spinning || pairs.length === 0}
        style={{
          padding: "14px 56px",
          fontSize: "13px",
          fontFamily: "Georgia, serif",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          background: spinning || pairs.length === 0
            ? "transparent"
            : "transparent",
          color: spinning || pairs.length === 0 ? "#3a3530" : "#c9a84c",
          border: `1px solid ${spinning || pairs.length === 0 ? "#2a2520" : "#c9a84c"}`,
          borderRadius: "2px",
          cursor: spinning || pairs.length === 0 ? "not-allowed" : "pointer",
          transition: "all 0.3s",
          marginBottom: "28px",
        }}
        onMouseEnter={(e) => {
          if (!spinning && pairs.length > 0) {
            e.target.style.background = "#c9a84c";
            e.target.style.color = "#0a0a0f";
          }
        }}
        onMouseLeave={(e) => {
          e.target.style.background = "transparent";
          e.target.style.color = spinning || pairs.length === 0 ? "#3a3530" : "#c9a84c";
        }}
      >
        {spinning ? "spinning..." : pairs.length === 0 ? "complete" : "spin"}
      </button>

      {/* Landed result card */}
      {landed && (
        <div style={{
          width: "360px",
          border: "1px solid rgba(201,168,76,0.3)",
          borderRadius: "2px",
          padding: "28px 32px",
          textAlign: "center",
          background: "rgba(201,168,76,0.04)",
          marginBottom: "32px",
          animation: "fadeIn 0.4s ease",
        }}>
          <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }`}</style>
          <p style={{ fontSize: "10px", letterSpacing: "0.25em", color: "#6b5a30", textTransform: "uppercase", marginBottom: "12px" }}>
            explore this pair
          </p>
          <p style={{ fontSize: "24px", color: "#e8ddc8", marginBottom: "6px", fontWeight: "normal" }}>
            {landed}
          </p>
          <p style={{ fontSize: "11px", color: "#4a4030", fontStyle: "italic", marginBottom: "24px" }}>
            {landed.split(" & ").join(" meets ")}
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
            <button
              onClick={markComplete}
              style={{
                padding: "10px 24px",
                background: "#c9a84c",
                color: "#0a0a0f",
                border: "none",
                borderRadius: "2px",
                fontFamily: "Georgia, serif",
                fontSize: "11px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              Mark explored
            </button>
            <button
              onClick={keepOnWheel}
              style={{
                padding: "10px 24px",
                background: "transparent",
                color: "#6b5a40",
                border: "1px solid #2a2520",
                borderRadius: "2px",
                fontFamily: "Georgia, serif",
                fontSize: "11px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              Keep on wheel
            </button>
          </div>
        </div>
      )}

      {/* Save indicator */}
      <div style={{
        fontSize: "10px",
        letterSpacing: "0.15em",
        color: justSaved ? "#4a7a5a" : "transparent",
        textTransform: "uppercase",
        marginBottom: "16px",
        transition: "color 0.3s",
      }}>
        ✓ progress saved
      </div>

      {/* Backlog toggle */}
      {completed.length > 0 && (
        <div style={{ width: "360px" }}>
          <button
            onClick={() => setShowBacklog((s) => !s)}
            style={{
              width: "100%",
              background: "transparent",
              border: "none",
              borderTop: "1px solid #1a1a20",
              padding: "16px 0",
              color: "#4a4030",
              fontFamily: "Georgia, serif",
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>Explored pairs ({completed.length})</span>
            <span style={{ fontSize: "16px", lineHeight: 1 }}>{showBacklog ? "−" : "+"}</span>
          </button>

          {showBacklog && (
            <div style={{ paddingBottom: "24px" }}>
              {completed.map((item, i) => (
                <div key={i} style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px 0",
                  borderBottom: "1px solid #111118",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ color: "#2a5a3a", fontSize: "12px" }}>✓</span>
                    <span style={{ color: "#3a3530", fontSize: "13px", fontStyle: "italic" }}>
                      {item.pair}
                    </span>
                  </div>
                  <span style={{ color: "#2a2520", fontSize: "10px", letterSpacing: "0.05em" }}>
                    {formatDate(item.completedAt)}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Reset */}
      <button
        onClick={resetAll}
        style={{
          marginTop: "32px",
          background: "transparent",
          border: "none",
          color: "#2a2520",
          fontFamily: "Georgia, serif",
          fontSize: "10px",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          cursor: "pointer",
          padding: "8px",
        }}
        onMouseEnter={(e) => e.target.style.color = "#6b5040"}
        onMouseLeave={(e) => e.target.style.color = "#2a2520"}
      >
        reset all progress
      </button>

      {/* Footer */}
      <footer style={{
        marginTop: "48px",
        textAlign: "center",
        color: "#1e1e28",
        fontSize: "10px",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
      }}>
        Ode · C(8,2) = 28
      </footer>
    </div>
  );
}
