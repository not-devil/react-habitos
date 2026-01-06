const Insight = () => {
    const successCriteria = [
        'The cue is obvious',
        'The action is easy',
        'The decision effort is near zero',
        'The environment supports the behavior',
        'Feedback reinforces consistency'
    ];

    return (
        <section className="solution-section" id="insight">
            <div className="container-narrow">
                <div className="section-header">
                    <h2 className="section-title">Our Insight: First-Principles Thinking</h2>
                </div>

                <div className="insight-box">
                    <h3 className="mb-6">
                        A habit is not a goal. A habit is a <strong>system</strong>.
                    </h3>

                    <p className="mb-4">A habit succeeds when:</p>
                    <ul className="habit-success-list">
                        {successCriteria.map((criterion, index) => (
                            <li key={index}>{criterion}</li>
                        ))}
                    </ul>

                    <p className="mt-8" style={{ fontWeight: 500, color: 'var(--color-text-primary)' }}>
                        Tracking alone does none of this.
                    </p>
                </div>
            </div>
        </section>
    );
};
