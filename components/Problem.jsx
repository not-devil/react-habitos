const Problem = () => {
    const problems = [
        { text: 'You wake up knowing ', em: 'what you want', strong: 'what exact action to take today' },
        { text: 'Your ', strong: 'environment works against you', detail: ' (phone, food, distractions, friction)' },
        { text: 'Motivation fades — and willpower can\'t be trusted daily' },
        { text: 'Accountability feels awkward, forced, or guilt-driven' },
        { text: 'For bad habits, ', strong: 'shame stops honesty', detail: ', so people hide instead of improving' }
    ];

    return (
        <section className="problem-section" id="problem">
            <div className="container-narrow">
                <div className="section-header">
                    <h2 className="section-title">Why Habit Apps Fail</h2>
                    <p className="section-subtitle">
                        Most people don't fail at habits because they are lazy or undisciplined.
                        They fail because the <em>system around them</em> is broken.
                    </p>
                </div>

                <h3 className="mb-6">What actually goes wrong:</h3>
                <ul className="problem-list">
                    <li className="problem-item">
                        You wake up knowing <em>what you want</em>, but not <strong>what exact action to take today</strong>
                    </li>
                    <li className="problem-item">
                        Your <strong>environment works against you</strong> (phone, food, distractions, friction)
                    </li>
                    <li className="problem-item">
                        Motivation fades — and willpower can't be trusted daily
                    </li>
                    <li className="problem-item">
                        Accountability feels awkward, forced, or guilt-driven
                    </li>
                    <li className="problem-item">
                        For bad habits, <strong>shame stops honesty</strong>, so people hide instead of improving
                    </li>
                </ul>

                <div className="result-box">
                    <p>
                        <strong>Result:</strong> Most habit apps only track failure <em>after</em> it happens — they don't prevent it.
                    </p>
                </div>
            </div>
        </section>
    );
};
