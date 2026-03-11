export default function PlaceMap({ place }) {
  // If API has no address, fallback to name + city so Maps still opens.
  const address = place.address || `${place.name}, Gainesville, FL`
  // Keeping this simple for now: open Google Maps instead of embedding a map SDK.
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
  return (
    <div className="detail-map">
      <div className="map-placeholder">
        <span className="map-placeholder-icon">📍</span>
        <span className="map-placeholder-text">Map coming soon</span>
        <span className="map-placeholder-address">{address}</span>
      </div>
      <a className="map-open-btn" href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
        ↗ Open in Google Maps
      </a>
    </div>
  )
}
