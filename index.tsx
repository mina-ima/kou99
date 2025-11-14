import React, { useState, useEffect, useCallback, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { TRAIN_DATA } from './train-data';
import { initDB, saveImage, getImage } from './db';

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
    drawCardButton: {
        backgroundColor: '#f44336',
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
    // Styles for Gallery and Cards
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
    // Styles for Error Screen
    errorDetails: {
        backgroundColor: '#ffebee',
        padding: '1rem',
        borderRadius: '8px',
        border: '1px solid #e57373',
        maxWidth: '600px',
        wordBreak: 'break-word',
        margin: '1rem 0',
    },
    ticketInfo: {
        position: 'absolute',
        top: 'clamp(1rem, 3vmin, 2rem)',
        right: 'clamp(1rem, 3vmin, 2rem)',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: '0.5rem 1rem',
        borderRadius: '20px',
        fontSize: 'clamp(1rem, 3vmin, 1.5rem)',
        fontWeight: 'bold',
        color: '#3f51b5',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    }
};

type TrainCardData = {
    id: number;
    name: string;
    line: string;
    description: string;
    imageUrl: string;
};

// Fix: Create a strict type for application mode state
type Mode = 'home' | 'practice' | 'test' | 'gallery' | 'newCard' | 'error' | 'reward' | 'drawingCard';

// --- Component Prop Types ---
interface InputControlsProps {
    value: string;
    onNumberClick: (num: string) => void;
    onClear: () => void;
    onCheck: () => void;
    checkDisabled: boolean;
    showNext: boolean;
}

interface HomeScreenProps {
    setMode: (mode: Mode) => void;
    cardTickets: number;
    onDrawCard: () => void;
}

interface RewardScreenProps {
    setMode: (mode: Mode) => void;
}

interface PracticeScreenProps {
    setMode: (mode: Mode) => void;
    onPerfectScore: () => void;
}

interface TestScreenProps {
    setMode: (mode: Mode) => void;
    onPerfectScore: () => void;
}

interface GalleryScreenProps {
    cards: TrainCardData[];
    setMode: (mode: Mode) => void;
}

interface NewCardScreenProps {
    newCard: TrainCardData | null;
    setMode: (mode: Mode) => void;
}

interface DrawingCardScreenProps {
    cardToDraw: TrainCardData;
    onLoadSuccess: (card: TrainCardData) => void;
    onLoadError: (error: Error) => void;
}

interface ErrorScreenProps {
    error: Error | null;
    setMode: (mode: Mode) => void;
    setError: (error: Error | null) => void;
}


// --- LocalStorage Helpers ---
const STORAGE_PREFIX = 'kou99app_';

// FIX: Changed from const arrow function to a standard function declaration to resolve parsing errors.
function getFromStorage<T>(key: string, defaultValue: T): T {
    try {
        const item = localStorage.getItem(`${STORAGE_PREFIX}${key}`);
        return item ? JSON.parse(item) : defaultValue;
    } catch (e) {
        console.error(`Failed to parse ${key} from localStorage`, e);
        return defaultValue;
    }
}

// FIX: Changed from const arrow function to a standard function declaration to resolve parsing errors.
function saveToStorage<T>(key: string, value: T) {
    try {
        localStorage.setItem(`${STORAGE_PREFIX}${key}`, JSON.stringify(value));
    } catch (e) {
        console.error(`Failed to save ${key} to localStorage`, e);
        // Re-throw the error so it can be caught by the transactional logic
        throw e;
    }
}

const getCollectedCards = (): TrainCardData[] => getFromStorage('collectedTrainCards', []);
const saveCollectedCards = (cards: TrainCardData[]) => saveToStorage('collectedTrainCards', cards);

const getNextTrainIndex = (): number => getFromStorage('nextTrainIndex', 0);
const saveNextTrainIndex = (index: number) => saveToStorage('nextTrainIndex', index);

const getCardTickets = (): number => getFromStorage('cardTickets', 0);
const saveCardTickets = (tickets: number) => saveToStorage('cardTickets', tickets);


// --- Reusable Card Image Component ---
function CardImage({ card, style, alt }: { card: TrainCardData, style: React.CSSProperties, alt: string }) {
    const [imageSrc, setImageSrc] = useState<string | null>(null);

    useEffect(() => {
        let objectUrl: string | null = null;
        let isMounted = true;

        async function loadImage() {
            try {
                // 1. Try to get from DB
                const blob = await getImage(card.name);
                if (isMounted) {
                    if (blob) {
                        objectUrl = URL.createObjectURL(blob);
                        setImageSrc(objectUrl);
                    } else {
                        // 2. Fallback to network URL
                        setImageSrc(card.imageUrl);
                        // 3. Cache the image in the background for next time
                        try {
                            const response = await fetch(card.imageUrl);
                            if (!response.ok) throw new Error('Network response was not ok.');
                            const newBlob = await response.blob();
                            await saveImage(card.name, newBlob);
                        } catch (cacheError) {
                            console.error(`Failed to cache image for ${card.name}:`, cacheError);
                        }
                    }
                }
            } catch (err) {
                console.error(`Failed to load image for ${card.name}:`, err);
                if(isMounted) {
                    // Fallback to original URL on DB error
                    setImageSrc(card.imageUrl);
                }
            }
        }

        loadImage();

        return () => {
            isMounted = false;
            if (objectUrl) {
                URL.revokeObjectURL(objectUrl);
            }
        };
    }, [card.name, card.imageUrl]);

    // Render a placeholder while loading
    if (!imageSrc) {
        return <div style={{...style, backgroundColor: '#eee'}} />;
    }

    return <img src={imageSrc} style={style} alt={alt} />;
}


// --- Input Controls Component ---
// FIX: Changed from React.FC arrow function to a standard function component declaration to resolve parsing errors.
// FIX: Replaced JSX.Element with React.ReactElement to resolve 'Cannot find namespace JSX' error.
function InputControls({ value, onNumberClick, onClear, onCheck, checkDisabled, showNext }: InputControlsProps): React.ReactElement {
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
                null
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
}

// --- App Components ---
// FIX: Changed from React.FC arrow function to a standard function component declaration to resolve parsing errors.
// FIX: Replaced JSX.Element with React.ReactElement to resolve 'Cannot find namespace JSX' error.
function HomeScreen({ setMode, cardTickets, onDrawCard }: HomeScreenProps): React.ReactElement {
    return (
        <div style={styles.screenWrapper}>
            <div style={styles.ticketInfo}>GETチケット: {cardTickets}枚</div>
            <h1 style={styles.header}>こうたの九九アプリ</h1>
            <div>
                <button style={{...styles.button, ...styles.primaryButton}} onClick={() => setMode('practice')}>れんしゅう</button>
                <button style={{...styles.button, ...styles.secondaryButton}} onClick={() => setMode('test')}>テスト</button>
                <button style={{...styles.button, ...styles.tertiaryButton}} onClick={() => setMode('gallery')}>ギャラリー</button>
                 <button 
                    style={{...styles.button, ...styles.drawCardButton}} 
                    onClick={onDrawCard}
                    disabled={cardTickets <= 0}
                >
                    カードをひく
                </button>
            </div>
        </div>
    );
}

// FIX: Changed from React.FC arrow function to a standard function component declaration to resolve parsing errors.
// FIX: Replaced JSX.Element with React.ReactElement to resolve 'Cannot find namespace JSX' error.
function RewardScreen({ setMode }: RewardScreenProps): React.ReactElement {
    return (
         <div style={styles.screenWrapper}>
            <div style={styles.newCardContainer}>
                <h2 style={styles.resultHeader}>全問正解おめでとう！</h2>
                <h3 style={styles.subHeader}>でんしゃカードGETチケットを1枚手に入れたよ！</h3>
                <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f3ab/512.gif" alt="Ticket Emoji" width="150" />
                <div>
                    <button style={{...styles.button, ...styles.tertiaryButton}} onClick={() => setMode('gallery')}>ギャラリーをみる</button>
                    <button style={{...styles.button, ...styles.secondaryButton}} onClick={() => setMode('home')}>ホームにもどる</button>
                </div>
            </div>
        </div>
    );
}

// FIX: Changed from React.FC arrow function to a standard function component declaration to resolve parsing errors.
// FIX: Replaced JSX.Element with React.ReactElement to resolve 'Cannot find namespace JSX' error.
function PracticeScreen({ setMode, onPerfectScore }: PracticeScreenProps): React.ReactElement {
    const [dan, setDan] = useState<number | null>(null);
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

    const handleNext = useCallback(() => {
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
    }, [index, problems.length, score, onPerfectScore, setDan]);
    
    useEffect(() => {
        if (feedback) {
            const isCorrect = feedback.includes('せいかい');
            const timer = setTimeout(() => {
                handleNext();
            }, isCorrect ? 800 : 2000);
            return () => clearTimeout(timer);
        }
    }, [feedback, handleNext]);

    const selectDan = (selectedDan: number) => {
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
}

// FIX: Changed from React.FC arrow function to a standard function component declaration to resolve parsing errors.
// FIX: Replaced JSX.Element with React.ReactElement to resolve 'Cannot find namespace JSX' error.
function TestScreen({ setMode, onPerfectScore }: TestScreenProps): React.ReactElement {
    const [problems, setProblems] = useState<{ a: number; b: number }[]>([]);
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

    const handleNext = useCallback(() => {
        if (currentIndex < problems.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setInputValue('');
            setFeedback('');
        } else {
            setIsTestOver(true);
        }
    }, [currentIndex, problems.length]);

    useEffect(() => {
        if (feedback) {
            const isCorrect = feedback.includes('せいかい');
            const timer = setTimeout(() => {
                handleNext();
            }, isCorrect ? 800 : 2000);
            return () => clearTimeout(timer);
        }
    }, [feedback, handleNext]);

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
}

// FIX: Changed from React.FC arrow function to a standard function component declaration to resolve parsing errors.
// FIX: Replaced JSX.Element with React.ReactElement to resolve 'Cannot find namespace JSX' error.
function GalleryScreen({ cards, setMode }: GalleryScreenProps): React.ReactElement {
    return (
        <div style={styles.screenWrapper}>
            <div style={styles.galleryContainer}>
                <h2 style={styles.subHeader}>でんしゃギャラリー ({cards.length})</h2>
                <div style={styles.galleryGrid}>
                    {cards.length === 0 ? (
                        <p>まだカードがありません。れんしゅうかテストで全問正解してチケットをゲットし、「カードをひく」ボタンでカードを手に入れよう！</p>
                    ) : (
                        cards.map(card => (
                            <div key={card.id} style={styles.trainCard}>
                                <CardImage card={card} style={styles.trainCardImage} alt={card.name} />
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
}

// FIX: Changed from React.FC arrow function to a standard function component declaration to resolve parsing errors.
// FIX: Replaced JSX.Element with React.ReactElement to resolve 'Cannot find namespace JSX' error.
function NewCardScreen({ newCard, setMode }: NewCardScreenProps): React.ReactElement {
    if (!newCard) return <></>;
    return (
        <div style={styles.screenWrapper}>
            <div style={styles.newCardContainer}>
                <h2 style={styles.resultHeader}>やったね！あたらしい電車カードをゲット！</h2>
                <div style={{...styles.trainCard, ...styles.newCardSpotlight}}>
                    <CardImage card={newCard} style={styles.trainCardImage} alt={newCard.name} />
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
}

function DrawingCardScreen({ cardToDraw, onLoadSuccess, onLoadError }: DrawingCardScreenProps): React.ReactElement {
    useEffect(() => {
        if (!cardToDraw || !cardToDraw.imageUrl) {
            onLoadError(new Error("カード情報が見つかりません。"));
            return;
        }

        const img = new Image();
        img.src = cardToDraw.imageUrl;

        const handleLoad = () => {
            const finalCard = { ...cardToDraw, id: Date.now() };
            onLoadSuccess(finalCard);
        };

        const handleError = () => {
            const errorMessage = `「${cardToDraw.name}」の画像の読み込みに失敗しました。チケットは消費されていません。`;
            onLoadError(new Error(errorMessage));
        };

        img.addEventListener('load', handleLoad);
        img.addEventListener('error', handleError);

        return () => {
            img.removeEventListener('load', handleLoad);
            img.removeEventListener('error', handleError);
        };
    }, [cardToDraw, onLoadSuccess, onLoadError]);

    return (
        <div style={styles.screenWrapper}>
            <div style={styles.loadingText}>
                あたらしいカードを準備中...
            </div>
        </div>
    );
}

// FIX: Changed from React.FC arrow function to a standard function component declaration to resolve parsing errors.
// FIX: Replaced JSX.Element with React.ReactElement to resolve 'Cannot find namespace JSX' error.
function ErrorScreen({ error, setMode, setError }: ErrorScreenProps): React.ReactElement {
    if (!error) return <></>;

    const handleGoHome = () => {
        setError(null);
        setMode('home');
    };

    return (
        <div style={styles.screenWrapper}>
            <h2 style={{...styles.resultHeader, color: '#d32f2f' }}>エラーが発生しました</h2>
            <div style={styles.errorDetails}>
                <strong>エラー詳細:</strong> {error.message}
            </div>
            <button style={{...styles.button, ...styles.secondaryButton}} onClick={handleGoHome}>ホームにもどる</button>
        </div>
    );
}

// FIX: Changed from const arrow function to a standard function component declaration to resolve parsing errors.
// FIX: Replaced JSX.Element with React.ReactElement to resolve 'Cannot find namespace JSX' error.
function App(): React.ReactElement {
    const [mode, setMode] = useState<Mode>('home');
    const [collectedCards, setCollectedCards] = useState<TrainCardData[]>(() => getCollectedCards());
    const [cardTickets, setCardTickets] = useState<number>(() => getCardTickets());
    const [newlyCollectedCard, setNewlyCollectedCard] = useState<TrainCardData | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [cardToDraw, setCardToDraw] = useState<TrainCardData | null>(null);

    useEffect(() => {
        initDB().catch(err => {
            console.error("Failed to initialize DB:", err);
            setError(new Error('データベースの初期化に失敗しました。アプリが正常に動作しない可能性があります。'));
            setMode('error');
        });
    }, []);

    const handlePerfectScore = useCallback(() => {
        const newTicketCount = cardTickets + 1;
        try {
            saveCardTickets(newTicketCount);
            setCardTickets(newTicketCount);
            setMode('reward');
        } catch (e) {
            console.error("Failed to save new ticket data", e);
            setError(new Error('チケットの保存に失敗しました。もう一度試してください。'));
            setMode('error');
        }
    }, [cardTickets]);

    const handleDrawError = useCallback((error: Error) => {
        setError(error);
        setMode('error');
    }, []);
    
    const handleDrawSuccess = useCallback(async (newCard: TrainCardData) => {
        try {
            // Step 1: Download and save the image to IndexedDB
            const response = await fetch(newCard.imageUrl);
            if (!response.ok) {
                throw new Error(`画像のダウンロードに失敗しました: ${response.statusText}`);
            }
            const imageBlob = await response.blob();
            // Use card name as a unique key for the image
            await saveImage(newCard.name, imageBlob);
    
            // Step 2: Update local storage and state
            const drawnTrainIndex = TRAIN_DATA.findIndex(train => train.name === newCard.name);
            
            if (drawnTrainIndex === -1) {
                throw new Error('内部エラー: カードデータが見つかりませんでした。');
            }
    
            const newTicketCount = cardTickets - 1;
            const newCollectedCards = [...collectedCards, newCard];
            const newNextTrainIndex = drawnTrainIndex + 1;
    
            saveCardTickets(newTicketCount);
            saveCollectedCards(newCollectedCards);
            saveNextTrainIndex(newNextTrainIndex);
            
            setCardTickets(newTicketCount);
            setCollectedCards(newCollectedCards);
            setNewlyCollectedCard(newCard);
            setMode('newCard');
    
        } catch (e) {
            console.error("Failed to draw and save new card:", e);
            const userError = new Error('カードの保存に失敗しました。ネットワーク接続を確認してください。チケットは消費されていません。');
            handleDrawError(userError);
        }
    }, [cardTickets, collectedCards, handleDrawError]);
    
    const handleDrawCard = useCallback(() => {
        if (cardTickets <= 0) return;

        let trainToGenerate: (typeof TRAIN_DATA)[0] | null = null;
        let nextTrainDataIndex = getNextTrainIndex();

        while (nextTrainDataIndex < TRAIN_DATA.length) {
            const potentialTrain = TRAIN_DATA[nextTrainDataIndex];
            const alreadyCollected = collectedCards.some(card => card.name === potentialTrain.name);
            if (!alreadyCollected) {
                trainToGenerate = potentialTrain;
                break;
            }
            nextTrainDataIndex++;
        }

        if (!trainToGenerate) {
            setMode('gallery');
            setTimeout(() => alert("すべての電車カードを集めました！おめでとう！"), 100);
            return;
        }
        
        const potentialCard: TrainCardData = {
            id: 0, // Temporary ID
            name: trainToGenerate.name,
            line: trainToGenerate.line,
            description: trainToGenerate.description,
            imageUrl: trainToGenerate.imageUrl,
        };
        
        setCardToDraw(potentialCard);
        setMode('drawingCard');
    }, [cardTickets, collectedCards]);


    const renderContent = () => {
        switch (mode) {
            case 'practice':
                return <PracticeScreen setMode={setMode} onPerfectScore={handlePerfectScore} />;
            case 'test':
                return <TestScreen setMode={setMode} onPerfectScore={handlePerfectScore} />;
            case 'gallery':
                return <GalleryScreen cards={collectedCards} setMode={setMode} />;
            case 'reward':
                return <RewardScreen setMode={setMode} />;
            case 'newCard':
                return <NewCardScreen newCard={newlyCollectedCard} setMode={setMode} />;
            case 'drawingCard':
                return <DrawingCardScreen cardToDraw={cardToDraw!} onLoadSuccess={handleDrawSuccess} onLoadError={handleDrawError} />;
            case 'error':
                 return <ErrorScreen error={error} setMode={setMode} setError={setError} />;
            case 'home':
            default:
                return <HomeScreen setMode={setMode} cardTickets={cardTickets} onDrawCard={handleDrawCard} />;
        }
    };

    return (
        <div style={styles.rootContainer}>
            <div style={styles.appContainer}>
                {renderContent()}
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);