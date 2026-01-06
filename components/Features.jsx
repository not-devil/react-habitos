const Features = () => {
    const features = [
        {
            icon: '🧠',
            title: 'AI-Powered Habit Design',
            description: 'Intelligent system design that breaks habits into actionable components'
        },
        {
            icon: '🏠',
            title: 'Environment-First Tasks',
            description: 'Design your physical space to support your habits automatically'
        },
        {
            icon: '⚡',
            title: 'Micro-Action Breakdown',
            description: 'Remove decision fatigue with clear, tiny daily actions'
        },
        {
            icon: '🤝',
            title: 'Mutual Accountability',
            description: 'Shared streaks that build commitment without guilt'
        },
        {
            icon: '🔒',
            title: 'Anonymous Quit Mode',
            description: 'Track sensitive habits privately, without shame or judgment'
        },
        {
            icon: '📍',
            title: 'Local Intelligence',
            description: 'Connect to nearby resources to make habits actionable today'
        }
    ];

    return (
        <section className="features-section" id="features">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Key Features at a Glance</h2>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h4>{feature.title}</h4>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
