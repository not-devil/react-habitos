const App = () => {
    const [notification, setNotification] = React.useState(null);

    const handleNavigate = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const navHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = element.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    };

    const showNotification = (message, type = 'success') => {
        setNotification({ message, type });

        setTimeout(() => {
            setNotification(null);
        }, 4000);
    };

    return (
        <>
            <Navbar onNavigate={handleNavigate} />
            <Hero onNavigate={handleNavigate} />
            <Problem />
            <Insight />
            <Solution />
            <HowItWorks />
            <Features />
            <Comparison />
            <Mission />
            <WaitlistCTA onSubmit={showNotification} />
            <Footer />

            {notification && (
                <div className={`notification notification-${notification.type}`}>
                    {notification.message}
                </div>
            )}
        </>
    );
};

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
