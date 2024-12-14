import Link from 'next/link';
import './Home.css';
export default function Home() {
  return (
    <div>
        <title>Home - Cantor College</title>
       <section className="welcome">
        <p>Excellence in Education, Tradition in Teaching</p>
      </section>
      <section className="AboutUs">
        <h1>Cantor College was established in 1989 to specialize in Computing and Design.</h1>
        <p>
          At Cantor College, we want to give students the education they need to achieve their career aims, leaving them equipped with the knowledge, skills, and experience to succeed. Cantor College gives you the opportunities that can give you the edge when you enter the world of work, through our teaching and our links to some of the world's leading researchers and employers. Our students have gone on to successful careers in a wide range of industries across the globe. Whatever your ambitions, our learning and support can help you get the most out of your time with Cantor College, both as a student and in your future career.
        </p>
      </section>
      <section className="Facilities">
        <h2>Facilities</h2>
        <p>
          The College is located in the attractive and pleasantly refurbished building. The building houses computing laboratories, and lecture/tutorial rooms. It has its own catering facilities and student work areas. There is also a car park to the back of the building.
          Our building has space of 9500m², houses over 240 staff, and provides teaching space for more than 1600 students. To see our rules regarding the facilities just click this <Link href='/facilityrules'>link.</Link>
        </p>
        <ul>
         <li><h3>Facilities include:</h3></li>
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
        </section>
        <section className="Business-info">
<p>        Partner with Cantor College: Unlock Expertise, Innovation, and Growth
At Cantor College, we believe in the power of collaboration between education and industry. Our College offers a range of specialized services designed to support businesses in achieving their goals through cutting-edge expertise, innovation, and tailored solutions. With a focus on Computing, Design, and Technology, we are uniquely positioned to help your business thrive in an increasingly digital world. For information on our services click <Link href='/Business-information'>here.</Link></p>
        </section>
    </div>
  );
}