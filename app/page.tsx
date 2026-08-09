const games = [
  { name: "Roblox", tag: "1,240 guides", tone: "violet", mark: "R" },
  { name: "Minecraft", tag: "786 guides", tone: "green", mark: "M" },
  { name: "Fortnite", tag: "438 guides", tone: "blue", mark: "F" },
  { name: "Stumble Guys", tag: "212 guides", tone: "orange", mark: "S" },
];

const guides = [
  {
    game: "ROBLOX",
    title: "Blox Fruits codes for August 2026",
    summary: "Every working code for free XP boosts, stat resets, and Beli — checked today.",
    meta: "Updated 2 hours ago",
    tone: "violet",
    badge: "CODES",
  },
  {
    game: "MINECRAFT",
    title: "15 best Minecraft seeds in 1.22",
    summary: "Rare villages, exposed strongholds, and spectacular survival spawn points.",
    meta: "Updated yesterday",
    tone: "green",
    badge: "SEEDS",
  },
  {
    game: "FORTNITE",
    title: "Best Creative map codes to play now",
    summary: "The most fun tycoons, parkour runs, horror maps, and practice islands.",
    meta: "Updated 3 days ago",
    tone: "blue",
    badge: "MAPS",
  },
];

const quickLinks = [
  ["🎁", "Free items", "89 new this month"],
  ["⌁", "Game codes", "Verified every day"],
  ["✦", "Maps & seeds", "Curated collections"],
  ["?", "How-to guides", "Simple, quick answers"],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="PlayScout home">
          <span className="brand-mark">P</span>
          <span>PlayScout</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#games">Games</a>
          <a href="#guides">Guides</a>
          <a href="#codes">Codes</a>
        </nav>
        <a className="header-action" href="#guides">Explore guides <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <span className="eyebrow"><i /> GUIDES THAT GET TO THE POINT</span>
          <h1>Play more.<br /><em>Search less.</em></h1>
          <p>Fresh codes, clear walkthroughs, and hand-picked maps for the games you love.</p>
          <form className="search" action="#guides">
            <span aria-hidden="true">⌕</span>
            <label className="sr-only" htmlFor="guide-search">Search game guides</label>
            <input id="guide-search" name="q" type="search" placeholder="Search a game, code, or question…" />
            <button type="submit">Search</button>
          </form>
          <div className="trending"><strong>Trending:</strong> <a href="#guides">Blox Fruits codes</a><a href="#guides">Minecraft seeds</a><a href="#guides">Fortnite maps</a></div>
        </div>
        <div className="hero-art" aria-label="Featured guide: Stumble Guys free skins">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="game-card">
            <span className="game-card-label">FEATURED</span>
            <div className="bean">★</div>
            <div className="game-card-copy"><small>STUMBLE GUYS</small><strong>How to unlock<br />free skins</strong><span>Read guide →</span></div>
          </div>
          <span className="spark spark-one">✦</span>
          <span className="spark spark-two">✦</span>
          <span className="mini-chip chip-one">NEW</span>
          <span className="mini-chip chip-two">100% FREE</span>
        </div>
      </section>

      <section className="quick-strip" id="codes" aria-label="Popular guide categories">
        {quickLinks.map(([icon, title, detail]) => (
          <a href="#guides" className="quick-item" key={title}>
            <span className="quick-icon">{icon}</span><span><strong>{title}</strong><small>{detail}</small></span><b>→</b>
          </a>
        ))}
      </section>

      <section className="section games-section" id="games">
        <div className="section-heading">
          <div><span className="section-kicker">PICK YOUR WORLD</span><h2>Popular games</h2></div>
          <a href="#all-games">View all games <span>→</span></a>
        </div>
        <div className="game-grid">
          {games.map((game) => (
            <a href="#guides" className={`game-tile ${game.tone}`} key={game.name}>
              <span className="tile-mark">{game.mark}</span>
              <span><strong>{game.name}</strong><small>{game.tag}</small></span>
              <b>↗</b>
            </a>
          ))}
        </div>
      </section>

      <section className="section guide-section" id="guides">
        <div className="section-heading">
          <div><span className="section-kicker">FRESHLY UPDATED</span><h2>Latest guides</h2></div>
          <a href="#all-guides">Browse all guides <span>→</span></a>
        </div>
        <div className="guide-grid">
          {guides.map((guide, index) => (
            <article className="guide-card" key={guide.title}>
              <div className={`guide-visual ${guide.tone}`}>
                <span className="guide-number">0{index + 1}</span>
                <span className="guide-badge">{guide.badge}</span>
                <div className="visual-shape"><span>{guide.game.charAt(0)}</span></div>
              </div>
              <div className="guide-content">
                <span className="guide-game">{guide.game}</span>
                <h3>{guide.title}</h3>
                <p>{guide.summary}</p>
                <div><small>{guide.meta}</small><a href="#read">Read guide →</a></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="promise">
        <div><span className="section-kicker">THE PLAYSCOUT PROMISE</span><h2>Useful answers.<br /><em>No wasted time.</em></h2></div>
        <div className="promise-list">
          <p><span>01</span><strong>Codes checked daily</strong><small>Expired codes are removed fast, so you never waste a click.</small></p>
          <p><span>02</span><strong>Guides written for players</strong><small>Clear steps and quick answers, without the filler.</small></p>
          <p><span>03</span><strong>Every update tracked</strong><small>We follow patches, events, and seasons across every game.</small></p>
        </div>
      </section>

      <footer>
        <a className="brand" href="#top"><span className="brand-mark">P</span><span>PlayScout</span></a>
        <p>Independent game guides for curious players.</p>
        <div><a href="#games">Games</a><a href="#guides">Guides</a><a href="#about">About</a></div>
        <small>© 2026 PlayScout. Not affiliated with featured game publishers.</small>
      </footer>
    </main>
  );
}
