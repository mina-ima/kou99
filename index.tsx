
import React, { useState, useEffect, useCallback, useRef } from 'react';
import ReactDOM from 'react-dom/client';

// --- Styles ---
const styles: { [key: string]: React.CSSProperties } = {
    rootContainer: {
        width: '100vw',
        height: '100vh',
        backgroundColor: '#f0f8ff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    appContainer: {
        width: '85vw',
        height: '85vh',
        maxWidth: '1200px',
        maxHeight: '900px',
        boxSizing: 'border-box',
        backgroundColor: '#f0f8ff',
        padding: 'clamp(1rem, 3vmin, 2rem)',
        border: '10px solid #ffcc80',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
    },
    screenWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '100%',
        width: '100%',
        textAlign: 'center',
    },
    header: {
        fontSize: 'clamp(2.5rem, 8vmin, 4.5rem)',
        fontWeight: 800,
        color: '#ff9800',
        textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
        margin: 0,
    },
    subHeader: {
        fontSize: 'clamp(1.5rem, 5vmin, 2.5rem)',
        color: '#555',
        margin: '0 0 1rem 0',
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
        backgroundColor: '#4caf50',
    },
    secondaryButton: {
        backgroundColor: '#2196f3',
    },
    tertiaryButton: {
        backgroundColor: '#9c27b0', // Purple for Gallery
    },
    danButton: {
        width: 'clamp(60px, 16vmin, 80px)',
        height: 'clamp(60px, 16vmin, 80px)',
        fontSize: 'clamp(1.5rem, 5vmin, 2rem)',
        backgroundColor: '#ffc107',
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
        backgroundColor: '#e3f2fd',
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
        color: '#e91e63',
    },
    incorrect: {
        color: '#607d8b',
    },
    resultHeader: {
        fontSize: 'clamp(1.8rem, 6vmin, 2.5rem)',
        color: '#3f51b5',
    },
    resultScore: {
        fontSize: 'clamp(3rem, 12vmin, 5rem)',
        fontWeight: 800,
        color: '#f44336',
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
        backgroundColor: '#81d4fa',
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
        backgroundColor: '#ef5350',
    },
    // New styles for Gallery and Cards
    galleryContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    galleryGrid: {
        flex: 1,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '2vmin',
        padding: '2vmin',
        overflowY: 'auto',
    },
    trainCard: {
        backgroundColor: '#fff',
        borderRadius: '15px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
    },
    trainCardImage: {
        width: '100%',
        height: '180px',
        objectFit: 'cover',
        borderRadius: '10px',
        marginBottom: '1rem',
        backgroundColor: '#eee',
    },
    trainCardName: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#333',
        margin: '0.5rem 0',
    },
    trainCardInfo: {
        fontSize: '1rem',
        color: '#666',
        margin: '0.2rem 0',
    },
    newCardContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
    },
    newCardSpotlight: {
        transform: 'scale(1.1)',
        boxShadow: '0 8px 24px rgba(255, 152, 0, 0.4)',
        border: '4px solid #ff9800',
    },
    loadingText: {
        fontSize: 'clamp(1.5rem, 5vmin, 2.5rem)',
        color: '#3f51b5',
        fontWeight: 'bold',
    },
};

const TRAIN_LIST = [
    'N700S系新幹線', 'E5系新幹線はやぶさ', 'ドクターイエロー', 'E235系山手線', '阪急1000系', '近鉄ひのとり', '小田急ロマンスカーGSE', '南海ラピート', '京急2100形', '西武Laview', '東武スペーシアX', 'サンライズ出雲・瀬戸', 'サフィール踊り子', '近鉄しまかぜ', 'ゆふいんの森', 'WEST EXPRESS 銀河', 'POKÉMON with YOUトレイン', 'あをによし', '伊予灘ものがたり', 'SLやまぐち号', 'ろくもん', '36ぷらす3'
];

type TrainCardData = {
    id: number;
    name: string;
    line: string;
    description: string;
    imageUrl: string;
};

// --- LocalStorage Helpers ---
const STORAGE_PREFIX = 'kou99app_';

const getCollectedCards = (): TrainCardData[] => {
    try {
        const cards = localStorage.getItem(`${STORAGE_PREFIX}collectedTrainCards`);
        return cards ? JSON.parse(cards) : [];
    } catch (e) {
        console.error("Failed to parse collected cards from localStorage", e);
        return [];
    }
};

const saveCollectedCards = (cards: TrainCardData[]) => {
    try {
        localStorage.setItem(`${STORAGE_PREFIX}collectedTrainCards`, JSON.stringify(cards));
    } catch (e) {
        console.error("Failed to save collected cards to localStorage", e);
    }
};

const getNextTrainIndex = (): number => {
    const index = localStorage.getItem(`${STORAGE_PREFIX}nextTrainIndex`);
    return index ? parseInt(index, 10) : 0;
};

const saveNextTrainIndex = (index: number) => {
    localStorage.setItem(`${STORAGE_PREFIX}nextTrainIndex`, index.toString());
};


// --- API Helper ---
const generateTrainCard = async (trainName: string): Promise<Omit<TrainCardData, 'id' | 'name'>> => {
    const response = await fetch('/api/generate-card', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ trainName }),
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({ 
            error: 'サーバーからエラー応答がありましたが、詳細の解析に失敗しました。',
            details: `HTTPステータス: ${response.status}`
        }));
        console.error('API Error:', errorData);
        const errorMessage = `${errorData.error || 'サーバーエラー'}${errorData.details ? ` (${errorData.details})` : ''}`;
        throw new Error(errorMessage);
    }

    const data = await response.json();
    return {
        line: data.line,
        description: data.description,
        imageUrl: data.imageUrl,
    };
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
            <button style={{...styles.button, ...styles.tertiaryButton}} onClick={() => setMode('gallery')}>ギャラリー</button>
        </div>
    </div>
);

const PracticeScreen = ({ setMode, onPerfectScore }) => {
    const [dan, setDan] = useState(null);
    const [index, setIndex] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [feedback, setFeedback] = useState('');
    const [score, setScore] = useState(0);

    const problems = dan ? Array.from({ length: 9 }, (_, i) => ({ a: dan, b: i + 1 })) : [];
    const currentProblem = problems[index];
    const correctAnswer = currentProblem ? currentProblem.a * currentProblem.b : 0;
    
    const handleCheck = () => {
        if (parseInt(inputValue, 10) === correctAnswer) {
            setFeedback('せいかい！💮');
            setScore(prev => prev + 1);
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
            if (score === problems.length && problems.length > 0) {
                onPerfectScore();
            } else {
                setDan(null);
                setIndex(0);
                setInputValue('');
                setFeedback('');
            }
        }
    };
    
    const selectDan = (selectedDan) => {
        setDan(selectedDan);
        setIndex(0);
        setFeedback('');
        setInputValue('');
        setScore(0);
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

const TestScreen = ({ setMode, onPerfectScore }) => {
    const [problems, setProblems] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [feedback, setFeedback] = useState('');
    const [isTestOver, setIsTestOver] = useState(false);

    const startTest = useCallback(() => {
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
    }, []);

    useEffect(() => {
        startTest();
    }, [startTest]);

    const handleCheck = () => {
        const currentProblem = problems[currentIndex];
        const correctAnswer = currentProblem.a * currentProblem.b;
        if (parseInt(inputValue, 10) === correctAnswer) {
            setFeedback('せいかい！💮');
            setScore(prev => prev + 1);
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

    useEffect(() => {
        if (isTestOver && score === problems.length && problems.length > 0) {
            onPerfectScore();
        }
    }, [isTestOver, score, problems.length, onPerfectScore]);
    
    if (isTestOver && score < problems.length) {
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
    if (!currentProblem) return <div style={styles.loadingText}>もんだいをつくっています...</div>;

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

const GalleryScreen = ({ cards, setMode }) => (
    <div style={styles.screenWrapper}>
        <div style={styles.galleryContainer}>
            <h2 style={styles.subHeader}>でんしゃギャラリー ({cards.length})</h2>
            <div style={styles.galleryGrid}>
                {cards.length === 0 ? (
                    <p>まだカードがありません。れんしゅうかテストで全問正解してゲットしよう！</p>
                ) : (
                    cards.map(card => (
                        <div key={card.id} style={styles.trainCard}>
                            <img src={card.imageUrl} alt={card.name} style={styles.trainCardImage} />
                            <h3 style={styles.trainCardName}>{card.name}</h3>
                            <p style={styles.trainCardInfo}>路線: {card.line}</p>
                            <p style={styles.trainCardInfo}>{card.description}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
        <button style={{...styles.button, ...styles.secondaryButton}} onClick={() => setMode('home')}>ホームにもどる</button>
    </div>
);

const NewCardScreen = ({ newCard, setMode }) => {
    if (!newCard) return null;
    return (
        <div style={styles.screenWrapper}>
            <div style={styles.newCardContainer}>
                <h2 style={styles.resultHeader}>やったね！全問せいかい！</h2>
                <h3 style={styles.subHeader}>あたらしい電車カードをゲットしたよ！</h3>
                <div style={{...styles.trainCard, ...styles.newCardSpotlight}}>
                    <img src={newCard.imageUrl} alt={newCard.name} style={styles.trainCardImage} />
                    <h3 style={styles.trainCardName}>{newCard.name}</h3>
                    <p style={styles.trainCardInfo}>路線: {newCard.line}</p>
                    <p style={styles.trainCardInfo}>{newCard.description}</p>
                </div>
                <div>
                    <button style={{...styles.button, ...styles.tertiaryButton}} onClick={() => setMode('gallery')}>ギャラリーをみる</button>
                    <button style={{...styles.button, ...styles.secondaryButton}} onClick={() => setMode('home')}>ホームにもどる</button>
                </div>
            </div>
        </div>
    );
};

const App = () => {
    const [mode, setMode] = useState('home'); // home, practice, test, gallery, newCard
    const [collectedCards, setCollectedCards] = useState<TrainCardData[]>(() => getCollectedCards());
    const [newlyCollectedCard, setNewlyCollectedCard] = useState<TrainCardData | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            return;
        }
        saveCollectedCards(collectedCards);
    }, [collectedCards]);

    const handlePerfectScore = useCallback(async () => {
        setIsLoading(true);
        setMode('loading');

        try {
            const nextIndex = getNextTrainIndex();
            if (nextIndex >= TRAIN_LIST.length) {
                alert("すべての電車カードを集めました！おめでとう！");
                setMode('gallery');
                return;
            }

            const trainName = TRAIN_LIST[nextIndex];
            const existingCard = collectedCards.find(c => c.name === trainName);
            if (existingCard) { 
                 saveNextTrainIndex(nextIndex + 1);
                 handlePerfectScore(); // すでに持っているカードなら次のカードを取得しにいく
                 return;
            }

            const cardData = await generateTrainCard(trainName);
            const newCard: TrainCardData = {
                id: Date.now(),
                name: trainName,
                ...cardData,
            };

            setNewlyCollectedCard(newCard);
            setCollectedCards(prevCards => [...prevCards, newCard]);
            saveNextTrainIndex(nextIndex + 1);
            setMode('newCard');

        } catch (error) {
            console.error("カードの生成に失敗しました:", error);
            alert(`カードの取得中にエラーが発生しました。\n詳細: ${error.message}\n時間をおいてもう一度試してください。`);
            setMode('home');
        } finally {
            setIsLoading(false);
        }
    }, [collectedCards]);


    const renderContent = () => {
        switch (mode) {
            case 'practice':
                return <PracticeScreen setMode={setMode} onPerfectScore={handlePerfectScore} />;
            case 'test':
                return <TestScreen setMode={setMode} onPerfectScore={handlePerfectScore} />;
            case 'gallery':
                return <GalleryScreen cards={collectedCards} setMode={setMode} />;
            case 'newCard':
                return <NewCardScreen newCard={newlyCollectedCard} setMode={setMode} />;
            case 'loading':
                 return <div style={styles.loadingText}>あたらしいカードをゲット中...</div>;
            case 'home':
            default:
                return <HomeScreen setMode={setMode} />;
        }
    };

    return (
        <div style={styles.rootContainer}>
            <div style={styles.appContainer}>
                {renderContent()}
            </div>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
