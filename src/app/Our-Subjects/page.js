import './subjects.css';
const computingCourses = [
  {
    CourseTitle: 'Computing',
    CourseType: 'Undergraduate',
    CourseSummary: 'Learn how to code, configure and integrate applications, databases, and systems architectures.',
    CourseAwardName: 'BSc (Honours)',
    UcasCode: 'G504',
    UcasPoints: 112,
    YearOfEntry: '2025/26',
    ModeOfAttendance: 'Full-time',
    StudyLength: '3 / 4 Years',
    HasFoundationYear: false,
    CourseSubject: 'Computing'
  },
  {
    CourseTitle: 'Computer Networks',
    CourseType: 'Undergraduate',
    CourseSummary: 'This course includes general computing skills in programming, cyber security,',
    CourseAwardName: 'BSc (Honours)',
    UcasCode: 'G420',
    UcasPoints: 112,
    YearOfEntry: '2025/26',
    ModeOfAttendance: 'Full-time',
    StudyLength: '3 / 4 Years',
    HasFoundationYear: false,
    CourseSubject: 'Computing'
  },
  {
    CourseTitle: 'Cyber Security with Forensics',
    CourseType: 'Undergraduate',
    CourseSummary: 'Prepare for a career in cyber security by designing security systems, identifying evidence of cybercrimes and acting as detectives in a digital world.',
    CourseAwardName: 'BSc (Honours)',
    UcasCode: 'F4G4',
    UcasPoints: 112,
    YearOfEntry: '2025/26',
    ModeOfAttendance: 'Full-time',
    StudyLength: '3 / 4 Years',
    HasFoundationYear: false,
    CourseSubject: 'Computing'
  },
  {
    CourseTitle: 'Computer Science for Games',
    CourseType: 'Undergraduate',
    CourseSummary: 'Create the software powering the next generation of blockbuster games.',
    CourseAwardName: 'BSc (Honours)',
    UcasCode: 'G611',
    UcasPoints: 112,
    YearOfEntry: '2025/26',
    ModeOfAttendance: 'Full-time',
    StudyLength: '3 / 4 Years',
    HasFoundationYear: false,
    CourseSubject: 'Computing'
  },
  {
    CourseTitle: 'Software Engineering',
    CourseType: 'Undergraduate',
    CourseSummary: 'Gain experience in the whole software development process and prepare for a career in software engineering.',
    CourseAwardName: 'BEng (Honours)',
    UcasCode: 'G600',
    UcasPoints: 112,
    YearOfEntry: '2025/26',
    ModeOfAttendance: 'Full-time',
    StudyLength: '3 / 4 Years',
    HasFoundationYear: false,
    CourseSubject: 'Computing'
  },
  {
    CourseTitle: 'Computer Science',
    CourseType: 'Undergraduate',
    CourseSummary: 'Gain a solid foundation in the core areas of computer science, including programming, algorithms, data structures and software development.',
    CourseAwardName: 'BSc (Honours)',
    UcasCode: 'G400',
    UcasPoints: 112,
    YearOfEntry: '2025/26',
    ModeOfAttendance: 'Full-time',
    StudyLength: '3 / 4 Years',
    HasFoundationYear: false,
    CourseSubject: 'Computing'
  },
  {
    CourseTitle: 'Information Technology with Business Studies with Foundation Year',
    CourseType: 'Undergraduate',
    CourseSummary: 'Gain a degree in information technology with business studies, with an initial foundation year to prepare for the course.',
    CourseAwardName: 'BSc (Honours)',
    UcasCode: 'A019',
    UcasPoints: 80,
    YearOfEntry: '2025/26',
    ModeOfAttendance: 'Full-time',
    StudyLength: '4 / 5 Years',
    HasFoundationYear: true,
    CourseSubject: 'Computing'
  },
  {
    CourseTitle: 'Business and Digital Technology with Foundation Year',
    CourseType: 'Undergraduate',
    CourseSummary: 'Gain a degree in business and digital communications technology; with an initial foundation year to prepare for the course.',
    CourseAwardName: 'BSc (Honours)',
    UcasCode: 'A018',
    UcasPoints: 80,
    YearOfEntry: '2025/26',
    ModeOfAttendance: 'Full-time',
    StudyLength: '4 / 5 Years',
    HasFoundationYear: true,
    CourseSubject: 'Computing'
  },
  {
    CourseTitle: 'Computer Science for Games with Foundation Year',
    CourseType: 'Undergraduate',
    CourseSummary: 'Gain a degree in computer science for games, with an initial foundation year to prepare for the course.',
    CourseAwardName: 'BSc (Honours)',
    UcasCode: 'A092',
    UcasPoints: 80,
    YearOfEntry: '2025/26',
    ModeOfAttendance: 'Full-time',
    StudyLength: '4 / 5 Years',
    HasFoundationYear: true,
    CourseSubject: 'Computing'
  },
  {
    CourseTitle: 'Computer Science with Foundation Year',
    CourseType: 'Undergraduate',
    CourseSummary: 'Gain a degree in computer science, with an initial foundation year to prepare for the course.',
    CourseAwardName: 'BSc (Honours)',
    UcasCode: 'A022',
    UcasPoints: 80,
    YearOfEntry: '2025/26',
    ModeOfAttendance: 'Full-time',
    StudyLength: '4 / 5 Years',
    HasFoundationYear: true,
    CourseSubject: 'Computing'
  },
  {
    CourseTitle: 'Cyber Security with Foundation Year',
    CourseType: 'Undergraduate',
    CourseSummary: 'Gain a degree in cyber security; with an initial foundation year to prepare for the course.',
    CourseAwardName: 'BSc (Honours)',
    UcasCode: 'A093',
    UcasPoints: 80,
    YearOfEntry: '2025/26',
    ModeOfAttendance: 'Full-time',
    StudyLength: '4 / 5 Years',
    HasFoundationYear: true,
    CourseSubject: 'Computing'
  },
  {
    CourseTitle: 'Software Engineering with Foundation Year',
    CourseType: 'Undergraduate',
    CourseSummary: 'Gain a degree in software engineering, with an initial foundation year to prepare for the course. ',
    CourseAwardName: 'BSc (Honours)',
    UcasCode: 'A017',
    UcasPoints: 80,
    YearOfEntry: '2025/26',
    ModeOfAttendance: 'Full-time',
    StudyLength: '4 / 5 Years',
    HasFoundationYear: true,
    CourseSubject: 'Computing'
  },
  {
    CourseTitle: 'Cyber Security with Forensics with Foundation Year',
    CourseType: 'Undergraduate',
    CourseSummary: 'Gain a degree in cyber security with forensics, with an initial foundation year to prepare for the course. ',
    CourseAwardName: 'BSc (Honours)',
    UcasCode: 'A023',
    UcasPoints: 80,
    YearOfEntry: '2025/26',
    ModeOfAttendance: 'Full-time',
    StudyLength: '4 / 5 Years',
    HasFoundationYear: true,
    CourseSubject: 'Computing'
  },
  {
    CourseTitle: 'Computing with Foundation Year',
    CourseType: 'Undergraduate',
    CourseSummary: 'Gain a degree in computing; with an initial foundation year to prepare for the course. ',
    CourseAwardName: 'BSc (Honours)',
    UcasCode: 'A020',
    UcasPoints: 80,
    YearOfEntry: '2025/26',
    ModeOfAttendance: 'Full-time',
    StudyLength: '4 / 5 Years',
    HasFoundationYear: true,
    CourseSubject: 'Computing'
  },
  {
    CourseTitle: 'Computing ',
    CourseType: 'Postgraduate',
    CourseSummary: 'A course enhanced by real-life project experience for non-computing graduates wanting to pursue a career in the IT industry. ',
    CourseAwardName: 'MSc',
    UcasCode: '',
    UcasPoints: '',
    YearOfEntry: '2025/26',
    ModeOfAttendance: 'Part-time',
    StudyLength: '3 Years',
    HasFoundationYear: false,
    CourseSubject: 'Computing'
  },
  {
    CourseTitle: 'Computing and Informatics',
    CourseType: 'Postgraduate',
    CourseSummary: ' Conduct a period of intensive, supervised study where you critically investigate and evaluate an approved topic and make an original contribution to knowledge. ',
    CourseAwardName: 'MPhil',
    UcasCode: '',
    UcasPoints: '',
    YearOfEntry: '2025/26',
    ModeOfAttendance: 'Part-time',
    StudyLength: '3 Years',
    HasFoundationYear: false,
    CourseSubject: 'Computing'
  },
  {
    CourseTitle: 'Cyber Security',
    CourseType: 'Postgraduate',
    CourseSummary: 'Develop your skills and academic knowledge in the growing field of cyber security through academic teaching, industry input and practical skills development.&nbsp;<strong>Currently applications for this course are only open to home students.</strong> ',
    CourseAwardName: 'MSc',
    UcasCode: '',
    UcasPoints: '',
    YearOfEntry: '2025/26',
    ModeOfAttendance: 'Full-time',
    StudyLength: '1 Year',
    HasFoundationYear: false,
    CourseSubject: 'Computing'
  },

];

const designCourses = [
  {
    CourseTitle: 'Graphic Design',
    CourseType: 'Undergraduate',
    CourseSummary: 'Develop your own creative and innovative approach to graphic design.',
    CourseAwardName: 'BA (Honours)',
    UcasCode: 'W210',
    UcasPoints: 112,
    YearOfEntry: '2025/26',
    ModeOfAttendance: 'Full-time',
    StudyLength: '3 / 4 Years',
    HasFoundationYear: false,
    CourseSubject: 'Art and design'
  },
  {
    CourseTitle: 'Interior Architecture and Design',
    CourseType: 'Undergraduate',
    CourseSummary: 'Develop your own creative and sustainable approach to interior architecture and design by challenging and exploring contemporary practices through a series of exciting and diverse projects.',
    CourseAwardName: 'BA (Honours)',
    UcasCode: 'W250',
    UcasPoints: 112,
    YearOfEntry: '2025/26',
    ModeOfAttendance: 'Full-time',
    StudyLength: '3 / 4 Years',
    HasFoundationYear: false,
    CourseSubject: 'Art and design'
  },
  {
    CourseTitle: 'Jewellery, Materials and Design',
    CourseType: 'Undergraduate',
    CourseSummary: 'Develop your own creative and innovative approach to jewellery design, challenging and exploring contemporary practices through new technologies and craft techniques.',
    CourseAwardName: 'BA (Honours)',
    UcasCode: 'W721',
    UcasPoints: 112,
    YearOfEntry: '2025/26',
    ModeOfAttendance: 'Full-time',
    StudyLength: '3 / 4 Years',
    HasFoundationYear: false,
    CourseSubject: 'Art and design'
  },
  {
    CourseTitle: 'Game Design and Development',
    CourseType: 'Undergraduate',
    CourseSummary: 'Study a course with a distinctive, practice-based approach to games design; gaining a diverse skill set and useful experience within the field.',
    CourseAwardName: 'BA (Honours)',
    UcasCode: 'A112',
    UcasPoints: 112,
    YearOfEntry: '2025/26',
    ModeOfAttendance: 'Full-time',
    StudyLength: '3 / 4 Years',
    HasFoundationYear: false,
    CourseSubject: 'Art and design'
  },
  {
    CourseTitle: 'Product Design',
    CourseType: 'Undergraduate',
    CourseSummary: 'Develop a highly creative approach to producing innovative future-facing products by exploring and challenging design through a series of exciting and diverse projects.',
    CourseAwardName: 'BA (Honours)',
    UcasCode: 'D009',
    UcasPoints: 112,
    YearOfEntry: '2025/26',
    ModeOfAttendance: 'Full-time',
    StudyLength: '3 / 4 Years',
    HasFoundationYear: false,
    CourseSubject: 'Art and design'
  },
  {
    CourseTitle: 'Product Design',
    CourseType: 'Undergraduate',
    CourseSummary: 'Develop a creative and innovative approach to product design and service innovation by challenging and exploring contemporary practices through a series of exciting and diverse projects.',
    CourseAwardName: 'BA (Honours)',
    UcasCode: 'W240',
    UcasPoints: 112,
    YearOfEntry: '2025/26',
    ModeOfAttendance: 'Full-time',
    StudyLength: '3 / 4 Years',
    HasFoundationYear: false,
    CourseSubject: 'Art and design'
  },
  {
    CourseTitle: 'Digital Media Production',
    CourseType: 'Undergraduate',
    CourseSummary: 'Design and produce new media products in film, animation, interactive media, web, apps, VR, cross-media and games.',
    CourseAwardName: 'BA (Honours)',
    UcasCode: 'W212',
    UcasPoints: 112,
    YearOfEntry: '2025/26',
    ModeOfAttendance: 'Full-time',
    StudyLength: '3 / 4 Years',
    HasFoundationYear: false,
    CourseSubject: 'Art and design'
  },
];
export default function OurSubjects() {
    return (
      <div>
        <title>Our Subjects</title>
        <section className="courses">
        <h2>Our subjects</h2>
        <p>Here are the marvellous courses we offer at Cantor College</p>
        </section>

        <div className="Subjects-Container">
        <section className="Computing-Courses">
        <h3>Computing Courses</h3>
<p>
The College offers a range of courses to suit applicants with varying backgrounds and educational abilities. At undergraduate level, there are single BSc Honours Degree courses in Computing, Computer Networks, Software Engineering and Cyber Security with Forensics amongst others.
</p>
<p>
The College teaches undergraduate and postgraduate courses in a wide range of specialisms, including computer science, software development, information systems, networking and software engineering. It is at the heart of a passionate computing community, including student societies devoted to games development, digital forensics and programming.
</p>
<p>
The courses are British Computer Society accredited and are highly relevant to modern industry. They are designed to prepare students for professional occupations in Computing and related fields. Many graduates continue their studies to pursue a higher degree such as an MSc. or PhD.
</p>
        <div className="course-list">
        {computingCourses.map((course, index) => (
            <div key={index} className="subject-card">
              <h4>{course.CourseTitle}</h4>
              <p><strong>Type:</strong> {course.CourseType}</p>
              <p><strong>Summary:</strong> {course.CourseSummary}</p>
              <p><strong>Award:</strong> {course.CourseAwardName}</p>
              <p><strong>UCAS Code:</strong> {course.UcasCode}</p>
              <p><strong>UCAS Points:</strong> {course.UcasPoints}</p>
              <p><strong>Year:</strong> {course.YearOfEntry}</p>
              <p><strong>Mode of Attendance:</strong> {course.ModeOfAttendance}</p>
              <p><strong>Study Length:</strong> {course.StudyLength}</p>
              <p><strong>Foundation Year:</strong> {course.HasFoundationYear ? 'Yes' : 'No'}</p>
              </div>
        ))}
        </div>
        </section>
        <section className="Design-Courses">
        <h3>Design Courses</h3>
        <p> 
The College is an internationally connected creative community of diverse disciplines housed under one roof. We shape our students' futures, preparing them to shape the world through applied knowledge and creativity.
</p>
<p>
The College's art and design courses don't just train you, they promote alternative ways of thinking, making and communicating; they provide you with space, tools and inspiration to develop your creative practice and a clear career path. You'll get expert teaching from active practitioners and researchers who will encourage you to adopt innovative and resourceful approaches that both perceive and create opportunities for better lives.
</p>
<p>
You’ll develop your creative practice whilst interacting with your peers in well-equipped studios, making and digital workshops. At the same time, you'll learn professional skills by working on applied briefs facilitated through our links with commercial clients, cultural institutions, businesses and organisations.
</p>
        <div className="course-list">
        {designCourses.map((course, index) => (
            <div key={index} className="subject-card">
              <h4>{course.CourseTitle}</h4>
              <p><strong>Type:</strong> {course.CourseType}</p>
              <p><strong>Summary:</strong> {course.CourseSummary}</p>
              <p><strong>Award:</strong> {course.CourseAwardName}</p>
              <p><strong>UCAS Code:</strong> {course.UcasCode}</p>
              <p><strong>UCAS Points:</strong> {course.UcasPoints}</p>
              <p><strong>Year:</strong> {course.YearOfEntry}</p>
              <p><strong>Mode of Attendance:</strong> {course.ModeOfAttendance}</p>
              <p><strong>Study Length:</strong> {course.StudyLength}</p>
              <p><strong>Foundation Year:</strong> {course.HasFoundationYear ? 'Yes' : 'No'}</p>
            </div>
          ))}
        </div>
        </section>
        </div>
      </div>
    );
  }