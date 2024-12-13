import Link from 'next/link';
import './Home.css';
export default function Home() {
  return (
    <div>
      <section className="welcome">
        <p>Excellence in Education, Tradition in Teaching</p>
      </section>
      <section className="AboutUs">
        <h3>Cantor College was established in 1989 to specialize in Computing and Design.</h3>
        <p>
          At Cantor College, we want to give students the education they need to achieve their career aims, leaving them equipped with the knowledge, skills, and experience to succeed. Cantor College gives you the opportunities that can give you the edge when you enter the world of work, through our teaching and our links to some of the world's leading researchers and employers. Our students have gone on to successful careers in a wide range of industries across the globe. Whatever your ambitions, our learning and support can help you get the most out of your time with Cantor College, both as a student and in your future career.
        </p>
      </section>
      <section className="Facilities">
        <h4>Facilities</h4>
        <p>
          The College is located in the attractive and pleasantly refurbished building. The building houses computing laboratories, and lecture/tutorial rooms. It has its own catering facilities and student work areas. There is also a car park to the back of the building.
          Our building has space of 9500m², houses over 240 staff, and provides teaching space for more than 1600 students.To see our rules regarding the facilities just click this <Link href='/facilityrules'>link.</Link>
        </p>
        </section>
        <ul>
         <li><h5>Facilities include:</h5></li>
          <li>• Wi-fi technology</li>
          <li>• Pool teaching rooms, including classrooms to teach from 25 - 80 students</li>
          <li>• Specialist faculty facilities</li>
          <li>• A double-height lecture theatre at first and second-floor level</li>
          <li>• Dramatic three-storey glass open atrium</li>
          <li>• Meeting rooms</li>
          <li>• Office accommodation</li>
          <li>• Specialist IT facilities</li>
          <li>• Reception desk area</li>
          <li>• Catering outlet</li>
          <li>• Parking for disabled badge holders</li>
          <li>• Cycle racks</li>
          <li>• Gallery</li>
        </ul>
      
    </div>
  );
}
