import navbarStyles from '../styles/Navbar.module.css';

const Navbar=()=>{
    return(
        <nav className={navbarStyles.navbar}>
            <div className={navbarStyles.navbarMenu}>
                <ul className={navbarStyles.navbarMenuList}>
                    <li className={navbarStyles.navbarMenuItem}>
                        <a href="/" className={navbarStyles.navbarMenuLink}>
                            Home
                        </a>
                    </li>
                    <li className={navbarStyles.navbarMenuItem}>
                        <a href="/custom/new" className={navbarStyles.navbarMenuLink}>
                            New Generator
                        </a>
                    </li>
                    <li className={navbarStyles.navbarMenuItem}>
                        <a href="/custom/previous" className={navbarStyles.navbarMenuLink}>
                            Previous Generators
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;