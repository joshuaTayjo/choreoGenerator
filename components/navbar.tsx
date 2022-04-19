import Link from 'next/link';
import navbarStyles from '../styles/Navbar.module.css';


const Navbar = () => {
  return (
    <nav className={navbarStyles.navbar}>
      <div className={navbarStyles.navbarMenu}>
        <ul className={navbarStyles.navbarMenuList}>
          <li className={navbarStyles.navbarMenuItem}>
            <Link href='/'><a className={navbarStyles.navbarMenuLink}>
              Home
            </a></Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;