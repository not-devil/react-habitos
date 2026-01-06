const Comparison = () => {
    const comparisons = [
        { traditional: 'Track behavior', habitos: 'Design behavior systems' },
        { traditional: 'Motivation reminders', habitos: 'Environment cues' },
        { traditional: 'Individual streaks', habitos: 'Shared commitment' },
        { traditional: 'Guilt-based failure', habitos: 'Judgment-free recovery' },
        { traditional: 'Ignore bad habits', habitos: 'Anonymous quit support' }
    ];

    return (
        <section className="comparison-section" id="comparison">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">How HabitOS Is Different</h2>
                </div>

                <table className="comparison-table">
                    <thead>
                        <tr>
                            <th>Traditional Habit Apps</th>
                            <th>HabitOS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comparisons.map((row, index) => (
                            <tr key={index}>
                                <td>{row.traditional}</td>
                                <td>{row.habitos}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};
