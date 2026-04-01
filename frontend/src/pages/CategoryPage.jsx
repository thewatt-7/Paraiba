import BackBtn from '../components/BackBtn'

const CATEGORIES = [
  { key: 'restaurants', label: 'Restaurants', icon: '🍴', sub: 'Local spots & hidden eateries' },
  { key: 'attractions', label: 'Attractions', icon: '🌿', sub: 'Parks, arts & experiences' },
]

export default function CategoryPage({ onSelect, onBack }) {
  return (
    <>
      <BackBtn onClick={onBack} />
      <div className="cat-header fu">
        <p className="cat-eyebrow">Start exploring</p>
        <h2 className="cat-title">What are you looking for?</h2>
      </div>
      <div className="cat-grid">
        {CATEGORIES.map((c, i) => (
          <div key={c.key} className={`cat-card fu${i + 1}`} onClick={() => onSelect(c.key, c.label)}>
            <div className="cat-icon-wrap">{c.icon}</div>
            <span className="cat-label">{c.label}</span>
            <span className="cat-sublabel">{c.sub}</span>
            
          </div>
        ))}
      </div>
    </>
  )
}