const WaitlistCTA = ({ onSubmit }) => {
    const [email, setEmail] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email.trim()) {
            onSubmit('Please enter a valid email address', 'error');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            onSubmit('Please enter a valid email address', 'error');
            return;
        }

        // Success
        console.log('Waitlist signup:', email);
        onSubmit("🎉 You're on the waitlist! We'll be in touch soon.", 'success');
        setEmail('');
    };

    return (
        <section className="cta-section" id="waitlist">
            <div className="container-narrow">
                <h2 className="mb-6">Help Us Validate the Future of Habit Building</h2>
                <p className="mb-4" style={{ fontSize: 'var(--font-size-xl)' }}>
                    Join the HabitOS waitlist
                </p>

                <ul className="cta-benefits">
                    <li>✓ Get early access</li>
                    <li>✓ Shape the product</li>
                    <li>✓ Join the first behavior-design community</li>
                </ul>

                <form className="waitlist-form" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        aria-label="Email address"
                    />
                    <button type="submit">Join Waitlist</button>
                </form>
            </div>
        </section>
    );
};
