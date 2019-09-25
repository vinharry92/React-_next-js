import Link from 'next/link';

const Navbar = () =>(

    <nav className='navbar  navbar-expand navbar-dark bg-dark mb-4'>

        <div className='container'>
            <a className = 'navbar-brand' href='/'>SteriTrack</a>
            <div className='collapse navbar-collapse'>
                <ul className = 'navbar-nav ml-auto'>
                    <li className = 'nav-item'>
                        <Link href ='/home'><a className='nav-link'>Home</a>
                        </Link>
                    </li>
                    <li className = 'nav-item'>
                    <Link href ='/Contact'><a className='nav-link'>Contact</a>
                    </Link>
                    </li>
                    <li className = 'nav-item'>
                    <Link href ='/Blog'><a className='nav-link'>Blog</a>
                    </Link>
                    </li>
                </ul>
            </div>

        </div>
    </nav>
)

export default Navbar;