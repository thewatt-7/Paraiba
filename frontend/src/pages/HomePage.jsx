import GemLogo from '../components/GemLogo'

export default function HomePage({ onExplore }) {
  // Homepage
  return (
    <div className="home">
      <div className="fu"><GemLogo size={52} /></div>
      <p className="home-eyebrow fu1">Powered by local Reddit discussions</p>
      <h1 className="home-title fu2">Find the <em>hidden gems</em> of your city.</h1>
      <p className="home-sub fu3">
        We parse thousands of Reddit posts, extract sentiment, and rank local spots that tourists never find.
      </p>
      <button className="home-btn fu4" onClick={onExplore}>Start Exploring</button>
      <div className="home-stats fu5">
        {/* 3 stats: source subreddit, NLP sentiment analysis, and location */}
        <div className="stat">
          <span className="stat-num">r/GNV</span>
          <span className="stat-label">Source Subreddit</span>
        </div>
        <div className="stat">
          <span className="stat-num">NLP</span>
          <span className="stat-label">Sentiment Analysis</span>
        </div>
        <div className="stat">
          <span className="stat-num">GNV</span>
          <span className="stat-label">Gainesville, FL</span>
        </div>
      </div>
    </div>
  )
}
