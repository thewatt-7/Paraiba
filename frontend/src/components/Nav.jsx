export default function Nav({ onHome }) {
  return (
    <nav className="nav">
      {/* Clicking the logo takes user back home. */}
      <div className="nav-logo" onClick={onHome}>
        <span className="nav-logo-text">Paraíba</span>
      </div>
    </nav>
  )
}
