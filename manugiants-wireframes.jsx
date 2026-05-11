import { useState } from "react";

const screens = ["A", "B", "C", "D"];
const screenTitles = {
  A: "Screen A — Scanning Home (Warehouse Staff)",
  B: "Screen B — Item Confirmation (Warehouse Staff)",
  C: "Screen C — Stock Dashboard (Manager View)",
  D: "Screen D — Low Stock Alert (Procurement Lead)",
};

// Annotation dot + label
function Note({ x, y, text, dir = "right" }) {
  const offset = dir === "right" ? 10 : dir === "left" ? -10 : 0;
  const anchor = dir === "right" ? "start" : dir === "left" ? "end" : "middle";
  const lineX2 = dir === "right" ? x + 80 : dir === "left" ? x - 80 : x;
  const lineY2 = dir === "top" ? y - 30 : dir === "bottom" ? y + 30 : y;
  return (
    <g>
      <circle cx={x} cy={y} r={5} fill="#222" />
      <line x1={x} y1={y} x2={lineX2} y2={lineY2} stroke="#222" strokeWidth={1} strokeDasharray="3,2" />
      <text x={lineX2 + (dir === "right" ? 4 : dir === "left" ? -4 : 0)}
        y={lineY2 + (dir === "top" ? -4 : dir === "bottom" ? 14 : 4)}
        fontSize="9" fontFamily="monospace" fill="#222" textAnchor={anchor}
        style={{ whiteSpace: "pre" }}>
        {text}
      </text>
    </g>
  );
}

function ScreenA() {
  return (
    <svg viewBox="0 0 320 560" style={{ width: "100%", maxWidth: 320 }}>
      {/* Phone frame */}
      <rect x="20" y="10" width="280" height="540" rx="18" fill="white" stroke="#333" strokeWidth="2.5" />
      {/* Status bar */}
      <rect x="20" y="10" width="280" height="36" rx="18" fill="#222" />
      <rect x="20" y="30" width="280" height="16" fill="#222" />
      <text x="160" y="31" textAnchor="middle" fontSize="10" fill="white" fontFamily="monospace">09:41  MANUGIANTS  ●●●●</text>

      {/* Header */}
      <rect x="20" y="46" width="280" height="48" fill="#444" />
      <text x="160" y="75" textAnchor="middle" fontSize="14" fill="white" fontFamily="monospace" fontWeight="bold">SCAN ITEM</text>
      <text x="160" y="89" textAnchor="middle" fontSize="9" fill="#ccc" fontFamily="monospace">Logged in: Ravi Kumar  |  Shift: Morning</text>

      {/* Scanner viewport */}
      <rect x="50" y="108" width="220" height="180" rx="4" fill="#eee" stroke="#999" strokeWidth="1.5" strokeDasharray="6,3" />
      <rect x="70" y="128" width="180" height="140" rx="2" fill="#ddd" stroke="#bbb" strokeWidth="1" />
      {/* Corner brackets */}
      <polyline points="70,128 70,150 92,150" fill="none" stroke="#333" strokeWidth="2.5" />
      <polyline points="228,128 228,150 206,150" fill="none" stroke="#333" strokeWidth="2.5" />
      <polyline points="70,268 70,246 92,246" fill="none" stroke="#333" strokeWidth="2.5" />
      <polyline points="228,268 228,246 206,246" fill="none" stroke="#333" strokeWidth="2.5" />
      <text x="160" y="195" textAnchor="middle" fontSize="11" fill="#888" fontFamily="monospace">[ CAMERA FEED ]</text>
      <text x="160" y="212" textAnchor="middle" fontSize="9" fill="#aaa" fontFamily="monospace">Align barcode within frame</text>
      {/* Scan line */}
      <line x1="75" y1="198" x2="245" y2="198" stroke="#555" strokeWidth="1.5" strokeDasharray="4,2" />

      {/* Manual entry button */}
      <rect x="50" y="302" width="220" height="44" rx="4" fill="#555" stroke="#333" strokeWidth="1" />
      <text x="160" y="329" textAnchor="middle" fontSize="13" fill="white" fontFamily="monospace" fontWeight="bold">⌨  MANUAL ENTRY</text>

      {/* Quick actions */}
      <text x="50" y="366" fontSize="9" fill="#666" fontFamily="monospace">QUICK ACTIONS</text>
      <rect x="50" y="372" width="100" height="52" rx="3" fill="#eee" stroke="#bbb" strokeWidth="1" />
      <text x="100" y="395" textAnchor="middle" fontSize="9" fill="#444" fontFamily="monospace">📦 Goods</text>
      <text x="100" y="410" textAnchor="middle" fontSize="9" fill="#444" fontFamily="monospace">Receipt</text>

      <rect x="170" y="372" width="100" height="52" rx="3" fill="#eee" stroke="#bbb" strokeWidth="1" />
      <text x="220" y="395" textAnchor="middle" fontSize="9" fill="#444" fontFamily="monospace">📋 Stock</text>
      <text x="220" y="410" textAnchor="middle" fontSize="9" fill="#444" fontFamily="monospace">Check</text>

      {/* Bottom nav */}
      <rect x="20" y="494" width="280" height="56" fill="#333" />
      <rect x="20" y="536" width="280" height="14" rx="0" fill="#333" />
      {["🏠", "📊", "🔔", "👤"].map((icon, i) => (
        <text key={i} x={70 + i * 60} y="523" textAnchor="middle" fontSize="16" fill={i === 0 ? "white" : "#888"}>{icon}</text>
      ))}

      {/* Annotations */}
      <Note x={50} y={94} text={"Role + shift\ndisplayed always"} dir="left" />
      <Note x={240} y={155} text={"Scan viewport\nwith guide brackets"} dir="right" />
      <Note x={160} y={302} text={"Fallback for\ndamaged barcodes"} dir="bottom" />
      <Note x={50} y={445} text={"2 most-used\nshortcuts"} dir="left" />
    </svg>
  );
}

function ScreenB() {
  return (
    <svg viewBox="0 0 320 560" style={{ width: "100%", maxWidth: 320 }}>
      <rect x="20" y="10" width="280" height="540" rx="18" fill="white" stroke="#333" strokeWidth="2.5" />
      <rect x="20" y="10" width="280" height="36" rx="18" fill="#222" />
      <rect x="20" y="30" width="280" height="16" fill="#222" />
      <text x="160" y="31" textAnchor="middle" fontSize="10" fill="white" fontFamily="monospace">09:42  MANUGIANTS  ●●●●</text>

      {/* Header */}
      <rect x="20" y="46" width="280" height="48" fill="#444" />
      <text x="160" y="71" textAnchor="middle" fontSize="14" fill="white" fontFamily="monospace" fontWeight="bold">ITEM CONFIRMATION</text>
      <text x="160" y="88" textAnchor="middle" fontSize="9" fill="#ccc" fontFamily="monospace">Verify before confirming pick</text>

      {/* Scan result badge */}
      <rect x="50" y="108" width="220" height="28" rx="14" fill="#555" />
      <text x="160" y="126" textAnchor="middle" fontSize="10" fill="white" fontFamily="monospace">✓  SKU: MFG-2024-HX90-BLK</text>

      {/* Item details card */}
      <rect x="40" y="148" width="240" height="160" rx="4" fill="#f5f5f5" stroke="#ccc" strokeWidth="1.5" />
      {[
        ["ITEM NAME", "Heavy Duty Hex Bolt M10"],
        ["CATEGORY", "Fasteners — Industrial"],
        ["LOCATION", "Bay 4 / Rack C / Shelf 2"],
        ["CURRENT STOCK", "247 units"],
        ["PICK QTY", "12 units"],
      ].map(([label, val], i) => (
        <g key={i}>
          <text x="56" y={172 + i * 28} fontSize="8" fill="#999" fontFamily="monospace">{label}</text>
          <text x="56" y={186 + i * 28} fontSize="11" fill="#222" fontFamily="monospace" fontWeight="bold">{val}</text>
        </g>
      ))}

      {/* Stock after pick */}
      <rect x="40" y="320" width="240" height="36" rx="3" fill="#e0e0e0" stroke="#bbb" strokeWidth="1" />
      <text x="160" y="335" textAnchor="middle" fontSize="9" fill="#555" fontFamily="monospace">STOCK AFTER THIS PICK</text>
      <text x="160" y="350" textAnchor="middle" fontSize="12" fill="#222" fontFamily="monospace" fontWeight="bold">235 units remaining</text>

      {/* Action buttons */}
      <rect x="40" y="372" width="108" height="56" rx="4" fill="#ddd" stroke="#aaa" strokeWidth="1.5" />
      <text x="94" y="398" textAnchor="middle" fontSize="11" fill="#333" fontFamily="monospace">✗  REJECT</text>
      <text x="94" y="415" textAnchor="middle" fontSize="8" fill="#777" fontFamily="monospace">Wrong item</text>

      <rect x="172" y="372" width="108" height="56" rx="4" fill="#444" stroke="#333" strokeWidth="1.5" />
      <text x="226" y="398" textAnchor="middle" fontSize="11" fill="white" fontFamily="monospace">✓  CONFIRM</text>
      <text x="226" y="415" textAnchor="middle" fontSize="8" fill="#ccc" fontFamily="monospace">Pick complete</text>

      {/* Report issue */}
      <text x="160" y="452" textAnchor="middle" fontSize="10" fill="#666" fontFamily="monospace" textDecoration="underline">⚠ Report Discrepancy</text>

      {/* Bottom nav */}
      <rect x="20" y="494" width="280" height="56" fill="#333" />
      <rect x="20" y="536" width="280" height="14" fill="#333" />
      {["🏠", "📊", "🔔", "👤"].map((icon, i) => (
        <text key={i} x={70 + i * 60} y="523" textAnchor="middle" fontSize="16" fill="#888">{icon}</text>
      ))}

      {/* Annotations */}
      <Note x={240} y={126} text={"Decoded SKU\nconfirmed"} dir="right" />
      <Note x={40} y={270} text={"Physical location\nfor staff to verify"} dir="left" />
      <Note x={240} y={338} text={"Post-pick stock\nprediction"} dir="right" />
      <Note x={40} y={400} text={"Large buttons —\nglove-safe tap area"} dir="left" />
      <Note x={160} y={452} text={"Triggers audit\ntrail (BR-06)"} dir="bottom" />
    </svg>
  );
}

function ScreenC() {
  return (
    <svg viewBox="0 0 640 480" style={{ width: "100%", maxWidth: 640 }}>
      {/* Desktop frame */}
      <rect x="10" y="10" width="620" height="460" rx="4" fill="white" stroke="#333" strokeWidth="2" />
      {/* Top bar */}
      <rect x="10" y="10" width="620" height="40" rx="4" fill="#2a2a2a" />
      <rect x="10" y="34" width="620" height="16" fill="#2a2a2a" />
      <text x="30" y="34" fontSize="12" fill="white" fontFamily="monospace" fontWeight="bold">MANUGIANTS — Stock Dashboard</text>
      <text x="560" y="34" fontSize="10" fill="#aaa" fontFamily="monospace">Priya Singh | Manager</text>

      {/* Sidebar */}
      <rect x="10" y="50" width="110" height="420" fill="#f0f0f0" stroke="#ddd" strokeWidth="1" />
      {["🏠 Home", "📦 Inventory", "📊 Reports", "🚚 Orders", "⚙ Settings"].map((item, i) => (
        <g key={i}>
          <rect x="10" y={58 + i * 42} width="110" height="38" fill={i === 1 ? "#ddd" : "transparent"} />
          <text x="28" y={82 + i * 42} fontSize="10" fill={i === 1 ? "#111" : "#666"} fontFamily="monospace">{item}</text>
        </g>
      ))}

      {/* Main content */}
      {/* KPI cards row */}
      {[
        ["TOTAL SKUs", "1,284", "Active items"],
        ["LOW STOCK", "17", "Need reorder"],
        ["PENDING ORDERS", "43", "Awaiting dispatch"],
        ["TODAY'S PICKS", "218", "Completed"],
      ].map(([label, val, sub], i) => (
        <g key={i}>
          <rect x={128 + i * 122} y="60" width="112" height="72" rx="3" fill="#f8f8f8" stroke="#ccc" strokeWidth="1.2" />
          <text x={184 + i * 122} y="84" textAnchor="middle" fontSize="8" fill="#888" fontFamily="monospace">{label}</text>
          <text x={184 + i * 122} y="108" textAnchor="middle" fontSize="20" fill={i === 1 ? "#555" : "#222"} fontFamily="monospace" fontWeight="bold">{val}</text>
          <text x={184 + i * 122} y="124" textAnchor="middle" fontSize="8" fill="#aaa" fontFamily="monospace">{sub}</text>
        </g>
      ))}

      {/* Fulfillment status table */}
      <text x="128" y="152" fontSize="9" fill="#666" fontFamily="monospace">FULFILLMENT STATUS — TODAY</text>
      <rect x="128" y="158" width="364" height="148" rx="3" fill="#fafafa" stroke="#ccc" strokeWidth="1" />
      {/* Table header */}
      <rect x="128" y="158" width="364" height="24" fill="#e0e0e0" />
      {["ORDER ID", "CUSTOMER", "STATUS", "ETA"].map((h, i) => (
        <text key={i} x={140 + i * 88} y="174" fontSize="9" fill="#444" fontFamily="monospace" fontWeight="bold">{h}</text>
      ))}
      {[
        ["ORD-1042", "Mehta Ind.", "SHIPPED", "Today"],
        ["ORD-1043", "Joshi Mfg.", "PENDING", "2h"],
        ["ORD-1044", "Rathi Pvt.", "DELAYED", "Tomorrow"],
        ["ORD-1045", "Kapoor Co.", "PENDING", "4h"],
        ["ORD-1046", "Singh Ent.", "SHIPPED", "Today"],
      ].map(([id, cust, status, eta], i) => (
        <g key={i}>
          <rect x="128" y={182 + i * 24} width="364" height="24" fill={i % 2 === 0 ? "white" : "#f5f5f5"} />
          <text x="140" y={198 + i * 24} fontSize="9" fill="#333" fontFamily="monospace">{id}</text>
          <text x="228" y={198 + i * 24} fontSize="9" fill="#333" fontFamily="monospace">{cust}</text>
          <rect x="310" y={186 + i * 24} width="56" height="14" rx="2"
            fill={status === "SHIPPED" ? "#e0e0e0" : status === "DELAYED" ? "#ccc" : "#ebebeb"} />
          <text x="338" y={197 + i * 24} textAnchor="middle" fontSize="8" fill="#333" fontFamily="monospace">{status}</text>
          <text x="400" y={198 + i * 24} fontSize="9" fill="#555" fontFamily="monospace">{eta}</text>
        </g>
      ))}

      {/* Stock bar chart placeholder */}
      <text x="504" y="152" fontSize="9" fill="#666" fontFamily="monospace">STOCK LEVELS</text>
      <rect x="504" y="158" width="116" height="148" rx="3" fill="#fafafa" stroke="#ccc" strokeWidth="1" />
      {[80, 45, 90, 30, 65].map((h, i) => (
        <g key={i}>
          <rect x={514 + i * 20} y={290 - h} width="14" height={h} fill={h < 40 ? "#aaa" : "#ccc"} rx="2" />
          <text x={521 + i * 20} y="308" textAnchor="middle" fontSize="7" fill="#888" fontFamily="monospace">
            {["HX", "BT", "SC", "WR", "PL"][i]}
          </text>
        </g>
      ))}
      <text x="562" y="320" textAnchor="middle" fontSize="7" fill="#aaa" fontFamily="monospace">Top SKUs</text>

      {/* Weekly report button */}
      <rect x="128" y="320" width="172" height="36" rx="3" fill="#444" />
      <text x="214" y="342" textAnchor="middle" fontSize="10" fill="white" fontFamily="monospace">📄 Weekly Report (BR-07)</text>

      <rect x="320" y="320" width="172" height="36" rx="3" fill="#ddd" stroke="#bbb" strokeWidth="1" />
      <text x="406" y="342" textAnchor="middle" fontSize="10" fill="#444" fontFamily="monospace">📋 View Audit Trail</text>

      {/* Annotations */}
      <Note x={128} y={96} text={"4 KPI cards —\nglanceable metrics"} dir="left" />
      <Note x={492} y={250} text={"Status badge:\nSHIPPED/PENDING/DELAYED"} dir="left" />
      <Note x={504} y={200} text={"Bar chart:\ntop 5 SKUs"} dir="right" />
      <Note x={214} y={356} text={"Generates BR-07\nweekly report"} dir="bottom" />
    </svg>
  );
}

function ScreenD() {
  return (
    <svg viewBox="0 0 320 560" style={{ width: "100%", maxWidth: 320 }}>
      <rect x="20" y="10" width="280" height="540" rx="18" fill="white" stroke="#333" strokeWidth="2.5" />
      <rect x="20" y="10" width="280" height="36" rx="18" fill="#222" />
      <rect x="20" y="30" width="280" height="16" fill="#222" />
      <text x="160" y="31" textAnchor="middle" fontSize="10" fill="white" fontFamily="monospace">10:05  MANUGIANTS  🔔3</text>

      {/* Header */}
      <rect x="20" y="46" width="280" height="48" fill="#444" />
      <text x="160" y="68" textAnchor="middle" fontSize="13" fill="white" fontFamily="monospace" fontWeight="bold">⚠ LOW STOCK ALERTS</text>
      <text x="160" y="86" textAnchor="middle" fontSize="9" fill="#ccc" fontFamily="monospace">Arjun Sharma | Procurement Lead</text>

      {/* Alert count badge */}
      <rect x="90" y="106" width="140" height="30" rx="15" fill="#555" />
      <text x="160" y="126" textAnchor="middle" fontSize="11" fill="white" fontFamily="monospace">3 Items Need Reorder</text>

      {/* Alert cards */}
      {[
        { sku: "MFG-HX90-BLK", name: "Hex Bolt M10", curr: 12, threshold: 50, urgency: "CRITICAL" },
        { sku: "MFG-SC45-SLV", name: "Steel Clamp 45mm", curr: 28, threshold: 50, urgency: "HIGH" },
        { sku: "MFG-WR22-HDY", name: "Hex Wrench Set", curr: 41, threshold: 50, urgency: "MEDIUM" },
      ].map((item, i) => (
        <g key={i}>
          <rect x="36" y={152 + i * 96} width="248" height="84" rx="4"
            fill={i === 0 ? "#e8e8e8" : "#f2f2f2"} stroke="#bbb" strokeWidth="1.5" />
          {/* Urgency badge */}
          <rect x="46" y={160 + i * 96} width="60" height="16" rx="3" fill={i === 0 ? "#555" : "#888"} />
          <text x="76" y={172 + i * 96} textAnchor="middle" fontSize="8" fill="white" fontFamily="monospace">{item.urgency}</text>
          <text x="116" y={172 + i * 96} fontSize="9" fill="#444" fontFamily="monospace">{item.sku}</text>
          <text x="46" y={188 + i * 96} fontSize="11" fill="#222" fontFamily="monospace" fontWeight="bold">{item.name}</text>
          {/* Stock bar */}
          <rect x="46" y={198 + i * 96} width="160" height="8" rx="4" fill="#ddd" />
          <rect x="46" y={198 + i * 96} width={Math.round((item.curr / item.threshold) * 160)} height="8" rx="4" fill="#888" />
          <text x="46" y={220 + i * 96} fontSize="8" fill="#666" fontFamily="monospace">
            {item.curr} units  |  Threshold: {item.threshold}
          </text>
          {/* Initiate button */}
          <rect x="192" y={196 + i * 96} width="80" height="26" rx="3" fill="#444" />
          <text x="232" y={213 + i * 96} textAnchor="middle" fontSize="9" fill="white" fontFamily="monospace">REORDER →</text>
        </g>
      ))}

      {/* Reorder all button */}
      <rect x="50" y="448" width="220" height="40" rx="4" fill="#333" stroke="#222" strokeWidth="1.5" />
      <text x="160" y="472" textAnchor="middle" fontSize="12" fill="white" fontFamily="monospace" fontWeight="bold">INITIATE ALL REORDERS</text>

      {/* Bottom nav */}
      <rect x="20" y="494" width="280" height="56" fill="#333" />
      <rect x="20" y="536" width="280" height="14" fill="#333" />
      {["🏠", "📊", "🔔", "👤"].map((icon, i) => (
        <text key={i} x={70 + i * 60} y="523" textAnchor="middle" fontSize="16" fill={i === 2 ? "white" : "#888"}>{icon}</text>
      ))}

      {/* Annotations */}
      <Note x={240} y={124} text={"Auto-triggered\nfrom BR-02"} dir="right" />
      <Note x={36} y={200} text={"CRITICAL = farthest\nbelow threshold"} dir="left" />
      <Note x={240} y={220} text={"Visual stock bar\nshows urgency"} dir="right" />
      <Note x={192} y={310} text={"One-tap reorder\nper item"} dir="right" />
      <Note x={160} y={448} text={"Batch reorder\nall flagged items"} dir="top" />
    </svg>
  );
}

const screenComponents = { A: ScreenA, B: ScreenB, C: ScreenC, D: ScreenD };

export default function Wireframes() {
  const [active, setActive] = useState("A");
  const ActiveScreen = screenComponents[active];

  return (
    <div style={{
      background: "#f4f4f4",
      minHeight: "100vh",
      fontFamily: "monospace",
      padding: "20px",
    }}>
      {/* Header */}
      <div style={{
        background: "#1a1a1a",
        color: "white",
        padding: "14px 24px",
        marginBottom: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "3px",
      }}>
        <div>
          <div style={{ fontSize: "14px", fontWeight: "bold", letterSpacing: "2px" }}>MANUGIANTS</div>
          <div style={{ fontSize: "10px", color: "#aaa", letterSpacing: "1px" }}>LOW-FIDELITY WIREFRAMES — v1.0</div>
        </div>
        <div style={{ fontSize: "10px", color: "#666" }}>BA Portfolio | Mohit | 2026</div>
      </div>

      {/* Tab switcher */}
      <div style={{ display: "flex", gap: "4px", marginBottom: "20px" }}>
        {screens.map(s => (
          <button key={s} onClick={() => setActive(s)} style={{
            padding: "8px 16px",
            background: active === s ? "#1a1a1a" : "#ddd",
            color: active === s ? "white" : "#444",
            border: "1px solid #bbb",
            borderRadius: "3px",
            cursor: "pointer",
            fontFamily: "monospace",
            fontSize: "11px",
            fontWeight: active === s ? "bold" : "normal",
          }}>
            Screen {s}
          </button>
        ))}
      </div>

      {/* Screen title */}
      <div style={{
        background: "white",
        border: "1px solid #ccc",
        padding: "8px 16px",
        marginBottom: "16px",
        fontSize: "11px",
        color: "#444",
        fontFamily: "monospace",
        borderLeft: "4px solid #333",
      }}>
        {screenTitles[active]}
      </div>

      {/* Wireframe display */}
      <div style={{
        background: "white",
        border: "1px solid #ccc",
        borderRadius: "3px",
        padding: "24px",
        display: "flex",
        justifyContent: "center",
        boxShadow: "3px 3px 0 #ccc",
      }}>
        <ActiveScreen />
      </div>

      {/* Legend */}
      <div style={{
        marginTop: "16px",
        background: "white",
        border: "1px solid #ccc",
        borderRadius: "3px",
        padding: "12px 16px",
        display: "flex",
        gap: "24px",
        fontSize: "10px",
        color: "#555",
        flexWrap: "wrap",
      }}>
        <span style={{ fontWeight: "bold", color: "#222" }}>LEGEND:</span>
        <span>⬜ Rectangle = Process/Action element</span>
        <span>⬜ Rounded = Button / Interactive</span>
        <span>● ─ ─ Annotation = Design rationale</span>
        <span>░░ Shaded area = Content placeholder</span>
      </div>
    </div>
  );
}
