const Navbar = ({ onNavigate }) => {
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.pageYOffset > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={scrolled ? 'scrolled' : ''}>
            <div className="nav-container">
                <a href="#" className="logo" onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}>
                    HabitOS
                </a>
                <button className="nav-cta" onClick={() => onNavigate('waitlist')}>
                    Join Waitlist
                </button>
            </div>
        </nav>
    );
};
