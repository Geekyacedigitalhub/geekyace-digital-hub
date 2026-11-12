const fs = require('fs');
const path = require('path');

const OUT = path.resolve(__dirname, '..', '..', 'public/images/showcase/github');
fs.mkdirSync(OUT, { recursive: true });

// Generate a pretty UI-mock SVG for a project
function svg({ slug, title, tagline, hue1, hue2, accent, ui }) {
  const lines = ui.lines || 5;
  const bars = ui.bars || [];
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="1200" height="750">
  <defs>
    <linearGradient id="bg_${slug}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="hsl(${hue1} 40% 10%)"/>
      <stop offset="1" stop-color="hsl(${hue2} 40% 6%)"/>
    </linearGradient>
    <linearGradient id="accent_${slug}" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="${accent}"/>
      <stop offset="1" stop-color="hsl(${hue2} 85% 60%)"/>
    </linearGradient>
    <radialGradient id="glow_${slug}" cx="70%" cy="30%" r="60%">
      <stop offset="0" stop-color="${accent}" stop-opacity="0.35"/>
      <stop offset="1" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="750" fill="url(#bg_${slug})"/>
  <rect width="1200" height="750" fill="url(#glow_${slug})"/>

  <!-- Browser chrome -->
  <g transform="translate(80,100)">
    <rect width="1040" height="580" rx="18" fill="#0b1220" stroke="hsl(${hue1} 30% 25%)" stroke-width="1"/>
    <rect width="1040" height="44" rx="18" fill="#0f172a"/>
    <rect x="0" y="44" width="1040" height="1" fill="hsl(${hue1} 30% 25%)"/>
    <circle cx="24" cy="22" r="6" fill="#ef4444"/>
    <circle cx="44" cy="22" r="6" fill="#f59e0b"/>
    <circle cx="64" cy="22" r="6" fill="#22c55e"/>
    <rect x="96" y="10" width="620" height="24" rx="8" fill="#1e293b"/>
    <circle cx="112" cy="22" r="4" fill="#475569"/>
    <rect x="128" y="20" width="200" height="5" rx="2" fill="#334155"/>
    <rect x="900" y="10" width="120" height="24" rx="8" fill="${accent}"/>
    <text x="960" y="27" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="#0b1220" text-anchor="middle">${tagline}</text>

    <!-- Sidebar -->
    <rect x="0" y="44" width="200" height="536" fill="#0b1220"/>
    <rect x="20" y="70" width="160" height="32" rx="8" fill="${accent}" fill-opacity="0.15"/>
    <text x="40" y="91" font-family="ui-sans-serif" font-size="13" font-weight="700" fill="${accent}">Dashboard</text>
    ${['Projects','Analytics','Settings','Team'].map((l,i)=>`<text x="40" y="${135+i*34}" font-family="ui-sans-serif" font-size="13" font-weight="500" fill="#64748b">${l}</text>`).join('')}

    <!-- Main -->
    <g transform="translate(220,70)">
      <text x="0" y="0" font-family="ui-sans-serif" font-size="22" font-weight="800" fill="#f1f5f9">${title}</text>
      <text x="0" y="26" font-family="ui-sans-serif" font-size="12" fill="#94a3b8">${tagline} · real-time</text>

      <!-- Stat cards -->
      ${[
        {l:'Total',v:ui.stats?.[0]||'2,481'},
        {l:'Active',v:ui.stats?.[1]||'892'},
        {l:'Growth',v:ui.stats?.[2]||'+18%'},
        {l:'Health',v:ui.stats?.[3]||'98%'},
      ].map((s,i)=>`
        <g transform="translate(${i*195},50)">
          <rect width="180" height="80" rx="12" fill="#111c30" stroke="hsl(${hue1} 30% 22%)"/>
          <text x="16" y="26" font-family="ui-sans-serif" font-size="11" font-weight="600" fill="#94a3b8">${s.l}</text>
          <text x="16" y="60" font-family="ui-sans-serif" font-size="24" font-weight="800" fill="#f8fafc">${s.v}</text>
        </g>`).join('')}

      <!-- Chart -->
      <g transform="translate(0,150)">
        <rect width="800" height="220" rx="14" fill="#111c30" stroke="hsl(${hue1} 30% 22%)"/>
        <text x="20" y="28" font-family="ui-sans-serif" font-size="12" font-weight="700" fill="#cbd5e1">Performance (last 30 days)</text>
        <polyline
          points="${genChart()}"
          fill="none" stroke="url(#accent_${slug})" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <polyline
          points="${genArea()}" fill="url(#accent_${slug})" fill-opacity="0.15" stroke="none"/>
        ${Array.from({length:5}).map((_,i)=>`<line x1="0" y1="${40+i*40}" x2="800" y2="${40+i*40}" stroke="#1e293b" stroke-dasharray="3 6"/>`).join('')}
      </g>

      <!-- List rows -->
      <g transform="translate(0,390)">
        ${Array.from({length:3}).map((_,i)=>`
          <g transform="translate(0,${i*44})">
            <rect width="800" height="36" rx="8" fill="${i%2?'#0f1930':'#111c30'}"/>
            <circle cx="20" cy="18" r="6" fill="${accent}" fill-opacity="0.7"/>
            <rect x="38" y="14" width="180" height="8" rx="4" fill="#cbd5e1" fill-opacity="0.9"/>
            <rect x="240" y="14" width="90" height="8" rx="4" fill="#475569"/>
            <rect x="640" y="10" width="140" height="18" rx="6" fill="${accent}" fill-opacity="0.2"/>
            <text x="710" y="23" font-family="ui-sans-serif" font-size="10" font-weight="700" fill="${accent}" text-anchor="middle">${ui.rowLabels?.[i]||'Active'}</text>
          </g>`).join('')}
      </g>
    </g>
  </g>
</svg>`;
}

function genChart() {
  const pts = [];
  for (let i=0; i<=30; i++) {
    const x = 20 + (i/30)*760;
    const y = 220 - Math.abs(Math.sin(i*0.45)*70 + Math.cos(i*0.2)*20 + i*2) - 10;
    pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return pts.join(' ');
}
function genArea() {
  return genChart() + ' 780,220 20,220';
}

const projects = [
  { slug:'bugify',                       title:'Bugify',                      tagline:'Finance tracker',   hue1:145, hue2:160, accent:'#22c55e', ui:{stats:['$4,820','238','+12%','96%'], rowLabels:['Food','Travel','Bills']} },
  { slug:'geekyace-web-scraper-toolkit', title:'Web Scraper Toolkit',         tagline:'Data extraction',   hue1:25, hue2:15, accent:'#f97316', ui:{stats:['1.2M','84','+34%','100%'], rowLabels:['Scrape','Parse','Export']} },
  { slug:'gig-rank-studio',              title:'GigRank Studio',             tagline:'Creator analytics', hue1:270, hue2:320, accent:'#a855f7', ui:{stats:['12.4K','410','+27%','94%'], rowLabels:['Youtube','TikTok','Fiverr']} },
  { slug:'trustlens',                    title:'TrustLens',                  tagline:'Reviews & trust',   hue1:200, hue2:220, accent:'#38bdf8', ui:{stats:['8,320','96%','+41%','Verified'], rowLabels:['Verified','Pending','Flagged']} },
  { slug:'crobadiam',                    title:'Crobadiam',                  tagline:'Commerce catalog',  hue1:45, hue2:10, accent:'#facc15', ui:{stats:['3,240','$1.2M','+9%','Live'], rowLabels:['Diamonds','Settings','Orders']} },
];

for (const p of projects) {
  const file = svg(p);
  fs.writeFileSync(path.join(OUT, `${p.slug}.svg`), file);
  console.log('wrote', p.slug);
}
