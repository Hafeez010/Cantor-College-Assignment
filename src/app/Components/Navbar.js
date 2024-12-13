import Link from 'next/link';
import './Navbar.css';
const Navbar = () =>{
    return (
        <nav>
        <menu className="navbar-menu">
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/students'>Students</Link></li>
          <li><Link href='/staff'>Staff</Link></li>
          <li><Link href='/campus-map'>Map of our campus</Link></li>
          <li><Link href='/Our-Subjects'>Our subjects</Link></li>
          <li><Link href='/Contact-us'>Contact us</Link></li> 
        </menu>
      </nav>
      
    );
}
export default Navbar;