import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

// --- Styles ---
// FIX: Add explicit type annotation to the 'styles' object to satisfy React.CSSProperties requirements for properties like 'flexDirection' and 'textAlign'.
const styles: { [key: string]: React.CSSProperties } = {
    container: {
        width: '100vw',
        height: '100vh',
        boxSizing: 'border-box',
        backgroundColor: '#ffffff',
        padding: 'clamp(1rem, 3vmin, 2rem)',
        border: '10px solid #ffcc80',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    screenWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '100%',
        width: '100%',
    },
    header: {
        fontSize: 'clamp(2.5rem, 8vmin, 4.5rem)',
        fontWeight: 800,
        color: '#ff9800', // Orange
        textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
        margin: 0,
    },
    subHeader: {
        fontSize: 'clamp(1.5rem, 5vmin, 2.5rem)',
        color: '#555',
        margin: 0,
    },
    button: {
        fontSize: 'clamp(1.2rem, 4vmin, 1.8rem)',
        fontWeight: 700,
        padding: 'clamp(0.5rem, 2vmin, 1rem) clamp(1rem, 4vmin, 2rem)',
        margin: '1vmin',
        borderRadius: '50px',
        border: 'none',
        cursor: 'pointer',
        color: 'white',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        transition: 'all 0.2s ease',
        flexShrink: 0,
    },
    primaryButton: {
        backgroundColor: '#4caf50', // Green
    },
    secondaryButton: {
        backgroundColor: '#2196f3', // Blue
    },
    danButton: {
        width: 'clamp(60px, 16vmin, 80px)',
        height: 'clamp(60px, 16vmin, 80px)',
        fontSize: 'clamp(1.5rem, 5vmin, 2rem)',
        backgroundColor: '#ffc107', // Amber
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(60px, 16vmin, 80px), 1fr))',
        gap: '1.5vmin',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '800px',
    },
    quizContainer: {
        padding: 'clamp(1rem, 3vmin, 2rem)',
        backgroundColor: '#e3f2fd', // Light blue
        borderRadius: '15px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    problemText: {
        fontSize: 'clamp(3rem, 12vmin, 5rem)',
        fontWeight: 800,
        color: '#333',
        marginBottom: '1.5vmin',
    },
    answerDisplay: {
        fontSize: 'clamp(3rem, 11vmin, 4rem)',
        fontWeight: 'bold',
        minHeight: 'clamp(4rem, 14vmin, 6rem)',
        width: 'clamp(180px, 50vmin, 300px)',
        textAlign: 'center',
        border: '3px solid #ff9800',
        borderRadius: '10px',
        margin: '0 0 1rem 0',
        padding: '0.5rem',
        backgroundColor: '#fff',
        color: '#333',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    feedbackText: {
        fontSize: 'clamp(1.8rem, 6vmin, 2.5rem)',
        fontWeight: 700,
        minHeight: 'clamp(3rem, 8vmin, 4rem)',
        marginTop: '1.5vmin',
    },
    correct: {
        color: '#e91e63', // Pink
    },
    incorrect: {
        color: '#607d8b', // Blue Grey
    },
    resultHeader: {
        fontSize: 'clamp(1.8rem, 6vmin, 2.5rem)',
        color: '#3f51b5', // Indigo
    },
    resultScore: {
        fontSize: 'clamp(3rem, 12vmin, 5rem)',
        fontWeight: 800,
        color: '#f44336', // Red
        margin: '1rem 0',
    },
    numberPadContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        margin: '1rem 0',
        width: '100%',
        maxWidth: '500px'
    },
    numberGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '1.5vmin',
        width: '100%',
    },
    numButton: {
        width: 'clamp(50px, 13vmin, 65px)',
        height: 'clamp(50px, 13vmin, 65px)',
        fontSize: 'clamp(1.5rem, 5vmin, 2rem)',
        backgroundColor: '#81d4fa', // Light blue
        padding: 0,
        margin: 'auto'
    },
    actionButtonsContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1.5vmin',
        width: '100%',
        marginTop: '1.5vmin',
    },
    actionButtonsContainerSingle: {
        width: '100%',
        marginTop: '1.5vmin',
        display: 'flex',
        justifyContent: 'center',
    },
    clearButton: {
        backgroundColor: '#ef5350', // Red
    },
};

// --- Input Controls Component ---
const InputControls = ({ value, onNumberClick, onClear, onCheck, onNext, checkDisabled, showNext }) => {
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

    return (
        <div style={styles.numberPadContainer}>
            <div style={styles.answerDisplay}>{value || ''}</div>
            <div style={styles.numberGrid}>
                {numbers.map(num => (
                    <button
                        key={num}
                        style={{ ...styles.button, ...styles.numButton }}
                        onClick={() => onNumberClick(num)}
                        disabled={showNext}
                    >
                        {num}
                    </button>
                ))}
            </div>
            {showNext ? (
                <div style={styles.actionButtonsContainerSingle}>
                    <button
                        style={{ ...styles.button, ...styles.primaryButton, width: '100%', maxWidth: '400px' }}
                        onClick={onNext}
                    >
                        つぎへ
                    </button>
                </div>
            ) : (
                <div style={styles.actionButtonsContainer}>
                    <button
                        style={{ ...styles.button, ...styles.clearButton }}
                        onClick={onClear}
                    >
                        けす
                    </button>
                    <button
                        style={{ ...styles.button, ...styles.primaryButton }}
                        onClick={onCheck}
                        disabled={checkDisabled}
                    >
                        こたえあわせ
                    </button>
                </div>
            )}
        </div>
    );
};


// --- App Components ---

const HomeScreen = ({ setMode }) => (
    <div style={styles.screenWrapper}>
        <h1 style={styles.header}>こうたの九九アプリ</h1>
        <div>
            <button style={{...styles.button, ...styles.primaryButton}} onClick={() => setMode('practice')}>れんしゅう</button>
            <button style={{...styles.button, ...styles.secondaryButton}} onClick={() => setMode('test')}>テスト</button>
        </div>
    </div>
);

const PracticeScreen = ({ setMode }) => {
    const [dan, setDan] = useState(null);
    const [index, setIndex] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [feedback, setFeedback] = useState('');

    const problems = dan ? Array.from({ length: 9 }, (_, i) => ({ a: dan, b: i + 1 })) : [];
    const currentProblem = problems[index];
    const correctAnswer = currentProblem ? currentProblem.a * currentProblem.b : 0;
    
    const handleCheck = () => {
        if (parseInt(inputValue, 10) === correctAnswer) {
            setFeedback('せいかい！💮');
        } else {
            setFeedback(`ざんねん... こたえは ${correctAnswer} `);
        }
    };

    const handleNext = () => {
        if (index < problems.length - 1) {
            setIndex(index + 1);
            setInputValue('');
            setFeedback('');
        } else {
             // Practice for one dan is over, go back to dan selection
            setDan(null);
            setIndex(0);
            setInputValue('');
            setFeedback('');
        }
    };
    
    const selectDan = (selectedDan) => {
        setDan(selectedDan);
        setIndex(0);
        setFeedback('');
        setInputValue('');
    };

    if (!dan) {
        return (
            <div style={styles.screenWrapper}>
                <h2 style={styles.subHeader}>れんしゅうする だん をえらんでね</h2>
                <div style={styles.grid}>
                    {Array.from({ length: 9 }, (_, i) => i + 1).map(num => (
                        <button key={num} style={{...styles.button, ...styles.danButton}} onClick={() => selectDan(num)}>
                            {num}
                        </button>
                    ))}
                </div>
                 <button style={{...styles.button, backgroundColor: '#795548'}} onClick={() => setMode('home')}>ホームにもどる</button>
            </div>
        );
    }

    return (
        <div style={styles.screenWrapper}>
            <h2 style={styles.subHeader}>{dan}のだん</h2>
            <div style={styles.quizContainer}>
                <div style={styles.problemText}>{currentProblem.a} × {currentProblem.b} = ?</div>
                <InputControls
                    value={inputValue}
                    onNumberClick={(num) => setInputValue(prev => prev.length < 3 ? prev + num : prev)}
                    onClear={() => setInputValue('')}
                    onCheck={handleCheck}
                    onNext={handleNext}
                    checkDisabled={!inputValue}
                    showNext={!!feedback}
                />
                <div style={{...styles.feedbackText, ...(feedback.includes('せいかい') ? styles.correct : styles.incorrect)}}>
                    {feedback}
                </div>
            </div>
            <div>
                 <button style={{...styles.button, backgroundColor: '#795548'}} onClick={() => setDan(null)}>だんをえらびなおす</button>
            </div>
        </div>
    );
};

const TestScreen = ({ setMode }) => {
    const [problems, setProblems] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [feedback, setFeedback] = useState('');
    const [isTestOver, setIsTestOver] = useState(false);

    useEffect(() => {
        startTest();
    }, []);
    
    const startTest = () => {
        const newProblems = [];
        for (let i = 0; i < 10; i++) {
            newProblems.push({
                a: Math.floor(Math.random() * 9) + 1,
                b: Math.floor(Math.random() * 9) + 1,
            });
        }
        setProblems(newProblems);
        setCurrentIndex(0);
        setScore(0);
        setInputValue('');
        setFeedback('');
        setIsTestOver(false);
    };

    const handleCheck = () => {
        const currentProblem = problems[currentIndex];
        const correctAnswer = currentProblem.a * currentProblem.b;
        if (parseInt(inputValue, 10) === correctAnswer) {
            setFeedback('せいかい！💮');
            setScore(score + 1);
        } else {
            setFeedback(`ざんねん... こたえは ${correctAnswer} `);
        }
    };

    const handleNext = () => {
        if (currentIndex < problems.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setInputValue('');
            setFeedback('');
        } else {
            setIsTestOver(true);
        }
    };
    
    if(isTestOver) {
        return (
            <div style={styles.screenWrapper}>
                <h2 style={styles.resultHeader}>テストおつかれさま！</h2>
                <div style={styles.resultScore}>{problems.length}もんちゅう {score}もん せいかい！</div>
                <div>
                    <button style={{...styles.button, ...styles.primaryButton}} onClick={startTest}>もういちど</button>
                    <button style={{...styles.button, ...styles.secondaryButton}} onClick={() => setMode('home')}>ホームにもどる</button>
                </div>
            </div>
        )
    }

    const currentProblem = problems[currentIndex];
    if (!currentProblem) return <div>よみこみちゅう...</div>;

    return (
        <div style={styles.screenWrapper}>
            <h2 style={styles.subHeader}>もんだい {currentIndex + 1}</h2>
             <div style={styles.quizContainer}>
                <div style={styles.problemText}>{currentProblem.a} × {currentProblem.b} = ?</div>
                 <InputControls
                    value={inputValue}
                    onNumberClick={(num) => setInputValue(prev => prev.length < 3 ? prev + num : prev)}
                    onClear={() => setInputValue('')}
                    onCheck={handleCheck}
                    onNext={handleNext}
                    checkDisabled={!inputValue}
                    showNext={!!feedback}
                />
                <div style={{...styles.feedbackText, ...(feedback.includes('せいかい') ? styles.correct : styles.incorrect)}}>
                    {feedback}
                </div>
            </div>
            <div>
                 <button style={{...styles.button, backgroundColor: '#795548'}} onClick={() => setMode('home')}>ホームにもどる</button>
            </div>
        </div>
    );
};


const App = () => {
    const [mode, setMode] = useState('home'); // home, practice, test

    const renderContent = () => {
        switch (mode) {
            case 'practice':
                return <PracticeScreen setMode={setMode} />;
            case 'test':
                return <TestScreen setMode={setMode} />;
            case 'home':
            default:
                return <HomeScreen setMode={setMode} />;
        }
    };

    return (
        <div style={styles.container}>
            {renderContent()}
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
