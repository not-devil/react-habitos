const Hero = ({ onNavigate }) => {
    return (
        <section className="hero" id="hero">
            <div className="container-narrow">
                <h1>Build Habits That Stick — Without Motivation, Guilt, or Burnout</h1>
                <p className="subheadline">
                    HabitOS helps you design your environment, daily actions, and accountability systems so habits become automatic — not exhausting.
                </p>
                <div className="cta-group">
                    <button className="btn btn-primary" onClick={() => onNavigate('waitlist')}>
                        Join the Waitlist
                    </button>
                    <button className="btn btn-secondary" onClick={() => onNavigate('how-it-works')}>
                        See How HabitOS Works
                    </button>
                </div>
            </div>
        </section>
    );
};
