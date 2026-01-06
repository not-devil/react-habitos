const HowItWorks = () => {
    const [visibleSteps, setVisibleSteps] = React.useState([]);
    const stepRefs = React.useRef([]);

    const steps = [
        {
            number: 1,
            title: 'Behavior Persona (Not a Profile)',
            description: 'Users answer a few focused questions about:',
            items: ['Daily routine', 'Energy levels', 'Physical environment', 'Time availability', 'Social preference'],
            highlight: 'HabitOS builds a behavior persona, not demographics.'
        },
        {
            number: 2,
            title: 'Habit Definition',
            description: 'Example: "I want to build the habit of playing tennis."',
            highlight: 'No vague goals. Just one clear habit.'
        },
        {
            number: 3,
            title: 'AI Habit Decomposition',
            description: 'HabitOS breaks the habit into:',
            items: [
                'Environment Tasks: Place tennis shoes near the door, keep racket visible',
                'Micro Daily Actions: 5-minute stretch, wall practice',
                'Cue Creation: Visual cues, location-based reminders'
            ],
            highlight: 'This removes decision fatigue.'
        },
        {
            number: 4,
            title: 'Shared Accountability (Without Guilt)',
            items: [
                'Matched with someone at the same stage',
                'Shared streak (Snapchat-style)',
                'If either skips 2 days → streak resets'
            ],
            highlight: "It's mutual commitment, not pressure."
        },
        {
            number: 5,
            title: 'Anonymous Quit Mode (For Bad Habits)',
            description: 'For sensitive habits like smoking, porn, junk food, or procrastination.',
            items: [
                'Track progress anonymously',
                'Share struggles without identity',
                'Get judgment-free support'
            ],
            highlight: 'Shame removed. Honesty unlocked.'
        },
        {
            number: 6,
            title: 'Local Environment Intelligence',
            description: 'HabitOS connects habits to the real world:',
            items: [
                'Nearby gyms, parks, courts, libraries',
                'Makes habits actionable today, not someday'
            ]
        }
    ];

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = stepRefs.current.indexOf(entry.target);
                        if (index !== -1 && !visibleSteps.includes(index)) {
                            setVisibleSteps((prev) => [...prev, index]);
                        }
                    }
                });
            },
            { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
        );

        stepRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="flow-section" id="how-it-works">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">How HabitOS Works</h2>
                    <p className="section-subtitle">A systematic approach to building habits that last</p>
                </div>

                <div className="flow-steps">
                    {steps.map((step, index) => (
                        <div
                            key={step.number}
                            ref={(el) => stepRefs.current[index] = el}
                            className={`flow-step ${visibleSteps.includes(index) ? 'visible' : ''}`}
                        >
                            <div className="step-number">{step.number}</div>
                            <div className="step-content">
                                <h3>{step.title}</h3>
                                {step.description && <p>{step.description}</p>}
                                {step.items && (
                                    <ul>
                                        {step.items.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                                {step.highlight && (
                                    <div className="step-highlight">{step.highlight}</div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
