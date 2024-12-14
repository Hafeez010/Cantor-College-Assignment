import './students.css';

const Students = () => {
  return (
    <div className="students-page">
      <h2>Student Information Page</h2>
      <p>
        Explore Cantor College: World-Class Facilities for Your Success. At Cantor College, we are committed to
        providing our students with the best possible environment to learn, create, and innovate. Our state-of-the-art
        facilities are designed to support your academic journey and help you thrive in your chosen field.
      </p>

      <section className="facility-section">
        <h3>Our Facilities</h3>
        <ul>
          <li>
            <strong>Advanced Computing Labs:</strong> Equipped with the latest hardware and software, our labs support
            programming, cybersecurity, and data science studies. Accessible 24/7.
          </li>
          <li>
            <strong>Design Studios:</strong> Creative spaces equipped with high-end graphic tablets, professional-grade
            software, and large-format printers for digital media and product design.
          </li>
          <li>
            <strong>Innovation and Makerspace:</strong> A hub for creativity with 3D printers, laser cutters, CNC
            machines, and more for prototyping and invention.
          </li>
          <li>
            <strong>Technology Sandbox:</strong> Explore cutting-edge VR, AR, and AI technologies with access to
            advanced devices and software.
          </li>
          <li>
            <strong>Collaborative Learning Spaces:</strong> Smartboards, video conferencing tools, and flexible seating
            for teamwork and creative problem-solving.
          </li>
          <li>
            <strong>Library and Resource Centre:</strong> Extensive collections of books, journals, and digital
            resources, along with quiet study areas and computer stations.
          </li>
          <li>
            <strong>Student Hub:</strong> A social space with a café, lounge areas, and recreational facilities to
            relax and connect with peers.
          </li>
          <li>
            <strong>Career and Development Centre:</strong> Offers career counseling, resume workshops, job placement
            services, and employer networking events.
          </li>
          <li>
            <strong>Fitness and Wellness Centre:</strong> Includes a gym, exercise studios, and wellness services like
            yoga and meditation.
          </li>
          <li>
            <strong>On-Campus Housing:</strong> Modern, comfortable residence halls with amenities such as high-speed
            internet and study lounges.
          </li>
        </ul>
      </section>

      <p>
        Cantor College’s facilities are designed to enhance your learning experience and support your academic and
        personal growth. We invite you to explore our campus, discover our resources, and make the most of everything
        we have to offer.
      </p>
    </div>
  );
};

export default Students;
