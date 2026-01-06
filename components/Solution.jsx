const Solution = () => {
    const redesignAreas = [
        'Your environment',
        'Your daily micro-actions',
        'Your accountability structure'
    ];

    return (
        <section className="problem-section" id="solution">
            <div className="container-narrow">
                <div className="section-header">
                    <h2 className="section-title">The Solution — What Is HabitOS?</h2>
                    <p className="section-subtitle">
                        HabitOS is an <strong>AI-powered habit system design platform</strong>.
                    </p>
                </div>

                <p className="mb-6" style={{ fontSize: 'var(--font-size-lg)', textAlign: 'center' }}>
                    Instead of asking you to "try harder", HabitOS redesigns:
                </p>

                <ul className="habit-success-list">
                    {redesignAreas.map((area, index) => (
                        <li key={index}>{area}</li>
                    ))}
                </ul>

                <p className="mt-8" style={{ textAlign: 'center', fontSize: 'var(--font-size-lg)' }}>
                    So consistency becomes <em>automatic</em>.
                </p>

                <div className="quote-box">
                    <p>We don't track habits. We design them.</p>
                </div>
            </div>
        </section>
    );
};
