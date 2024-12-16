import './CampusMap.css';
export default function Campusmap() {
    return (
      <div>
        <title>Map of the Campus</title>
        <section className="Campus-head">
        <h2>Map of the campus</h2>
        <p>Find below a map of our grand campus</p>
        </section>
        <section className="campus-map-section">
        <img src="/images/872SHUSpaceCitymap.jpg" 
        alt="Map of Cantor College" className="campus-map-image"
        />
        </section>
      </div>
    );
  }