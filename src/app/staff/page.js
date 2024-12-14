import './staff.css';

export default function Staff() {
    return (
      <div className="staff-page">
        <title>Staff info</title>
        <h2>Staff Information</h2>
        <section className="Staff-page-intro">
        <p>
          Welcome to the staff information page. Below you will find details about various services available for the staff at Cantor College.
        </p>
        </section>

        <section className="staff-section">
          <h3>News</h3>
          <p>
            Cantor College recently hosted the Software Engineering Student of the Year Awards. Shortlisted candidates from around the country attended this one-day event.
          </p>
        </section>

        <section className="staff-section">
          <h3>Academic Registry</h3>
          <p>
            The Academic Registry handles academic regulations, assessments, awards, student records, and course validation.
          </p>
        </section>

        <section className="staff-section">
          <h3>Catering Services</h3>
          <p>
            Contact the Catering Services for information on both on-site and off-site catering.
          </p>
        </section>

        <section className="staff-section">
          <h3>Financial Services</h3>
          <p>
            The Financial Team, located on the 2nd floor, is responsible for all areas of student finance and the College’s budgeting.
          </p>
        </section>

        <section className="staff-section">
          <h3>Information Systems Services</h3>
          <p>
            The ISS team provides the College’s computing facilities, including all hardware and software. They also manage the staff helpdesk.
          </p>
        </section>

        <section className="staff-section">
          <h3>Marketing Services</h3>
          <p>
            The Marketing Team assists with promoting events, new courses, and press release preparation.
          </p>
        </section>

        <section className="staff-section">
          <h3>Personnel Services</h3>
          <p>
            For all staff pay and conditions inquiries, contact the Personnel Services team located on the 3rd floor.
          </p>
        </section>

        <section className="staff-section">
          <h3>Facilities</h3>
          <p>
            The Facilities team is responsible for the general care and maintenance of the College. All inquiries should be directed to the main helpdesk.
          </p>
        </section>
      </div>
    );
}
