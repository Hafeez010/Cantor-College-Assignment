import Navbar from './Components/Navbar';
import './layout.css';
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <div className='container'>
        <header>
          <Navbar/>
          <h1>Welcome to Cantor College</h1>
        </header>
        {children}
        </div>
        <footer>
           <p>&copy; {new Date().getFullYear()}</p>
        </footer>
      </body>
    </html>
  );
}