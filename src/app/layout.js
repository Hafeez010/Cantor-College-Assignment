import Navbar from './Components/Navbar';
import './layout.css';
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <div className='container'>
        <header>
          <Navbar/>
          <section className="Cantor-College-Welcome">
          <h1>Welcome to Cantor College</h1>
          </section>
        </header>
        {children}
        </div>
        <div className="cantor-college-logo"> 
        </div>
        <footer>
           <p> Cantor College  &copy; {new Date().getFullYear()}</p>
        </footer>
      </body>
    </html>
  );
}