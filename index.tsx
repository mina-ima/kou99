import React, { useState, useEffect, useCallback, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { TRAIN_DATA } from './train-data';

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
    downloadButton: {
         backgroundColor: '#ff9800',
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
    imageDataUrl: string;
};

type Mode = 'home' | 'practice' | 'test' | 'gallery' | 'newCard' | 'reward' | 'drawingCard';

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
    totalCount: number;
    setMode: (mode: Mode) => void;
}

interface NewCardScreenProps {
    newCard: TrainCardData | null;
    setMode: (mode: Mode) => void;
}

interface DrawingCardScreenProps {
    onSuccess: (card: TrainCardData) => void;
    cardToDraw: TrainCardData;
}


// --- LocalStorage Helpers ---
const STORAGE_PREFIX = 'kou99app_';

function getFromStorage<T>(key: string, defaultValue: T): T {
    try {
        const item = localStorage.getItem(`${STORAGE_PREFIX}${key}`);
        return item ? JSON.parse(item) : defaultValue;
    } catch (e) {
        console.error(`Failed to parse ${key} from localStorage`, e);
        return defaultValue;
    }
}

function saveToStorage<T>(key: string, value: T) {
    try {
        localStorage.setItem(`${STORAGE_PREFIX}${key}`, JSON.stringify(value));
    } catch (e) {
        console.error(`Failed to save ${key} to localStorage`, e);
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
    // Image data is now directly embedded in the card data, so we can use it directly.
    return <img src={card.imageDataUrl} style={style} alt={alt} />;
}


// --- Input Controls Component ---
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
            setFeedback(`ざんねん！こたえは ${correctAnswer} でした`);
        }
        setTimeout(() => {
            if (index < problems.length - 1) {
                setIndex(prev => prev + 1);
                setInputValue('');
                setFeedback('');
            } else {
                if (score + (parseInt(inputValue, 10) === correctAnswer ? 1 : 0) === 9) {
                    onPerfectScore();
                } else {
                    setMode('home');
                }
            }
        }, 1500);
    };

    if (!dan) {
        return (
            <div style={styles.screenWrapper}>
                <h2 style={styles.subHeader}>どの段をれんしゅうする？</h2>
                <div style={styles.grid}>
                    {Array.from({ length: 9 }, (_, i) => i + 1).map(d => (
                        <button key={d} style={{...styles.button, ...styles.danButton}} onClick={() => setDan(d)}>{d}</button>
                    ))}
                </div>
                <button style={{...styles.button, ...styles.secondaryButton}} onClick={() => setMode('home')}>ホームにもどる</button>
            </div>
        );
    }

    return (
        <div style={styles.screenWrapper}>
             <h2 style={styles.subHeader}>{dan}のだん</h2>
            <div style={styles.quizContainer}>
                <div style={styles.problemText}>{currentProblem.a} × {currentProblem.b}</div>
                <InputControls 
                    value={inputValue}
                    onNumberClick={(num) => !feedback && setInputValue(prev => (prev + num).slice(0, 3))}
                    onClear={() => setInputValue('')}
                    onCheck={handleCheck}
                    checkDisabled={!inputValue || !!feedback}
                    showNext={!!feedback}
                />
            </div>
            <div style={{...styles.feedbackText, ...((feedback === 'せいかい！💮') ? styles.correct : styles.incorrect)}}>
                {feedback}
            </div>
        </div>
    );
}


function TestScreen({ setMode, onPerfectScore }: TestScreenProps): React.ReactElement {
    const problemsRef = useRef<Array<{ a: number, b: number }>>([]);
    const [index, setIndex] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);

    useEffect(() => {
        const allProblems: Array<{ a: number, b: number }> = [];
        for (let i = 1; i <= 9; i++) {
            for (let j = 1; j <= 9; j++) {
                allProblems.push({ a: i, b: j });
            }
        }
        // Shuffle problems
        for (let i = allProblems.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allProblems[i], allProblems[j]] = [allProblems[j], allProblems[i]];
        }
        problemsRef.current = allProblems.slice(0, 10); // 10 questions
    }, []);

    const problems = problemsRef.current;
    if (problems.length === 0) return <div>Loading...</div>;

    const currentProblem = problems[index];
    const correctAnswer = currentProblem.a * currentProblem.b;

    const handleCheck = () => {
        const isCorrect = parseInt(inputValue, 10) === correctAnswer;
        if (isCorrect) {
            setScore(prev => prev + 1);
        }
        
        if (index < problems.length - 1) {
            setIndex(prev => prev + 1);
            setInputValue('');
        } else {
            setShowResults(true);
            if (score + (isCorrect ? 1 : 0) === 10) {
                 setTimeout(onPerfectScore, 2000);
            }
        }
    };

    if (showResults) {
        return (
            <div style={styles.screenWrapper}>
                <h2 style={styles.resultHeader}>テストおつかれさま！</h2>
                <p style={styles.subHeader}>あなたのせいせき</p>
                <p style={styles.resultScore}>{score} / 10</p>
                <button style={{...styles.button, ...styles.secondaryButton}} onClick={() => setMode('home')}>ホームにもどる</button>
            </div>
        );
    }
    
    return (
        <div style={styles.screenWrapper}>
            <h2 style={styles.subHeader}>九九テスト ({index + 1}/10)</h2>
            <div style={styles.quizContainer}>
                <div style={styles.problemText}>{currentProblem.a} × {currentProblem.b}</div>
                <InputControls 
                    value={inputValue}
                    onNumberClick={(num) => setInputValue(prev => (prev + num).slice(0, 3))}
                    onClear={() => setInputValue('')}
                    onCheck={handleCheck}
                    checkDisabled={!inputValue}
                    showNext={false}
                />
            </div>
        </div>
    );
}

function GalleryScreen({ cards, totalCount, setMode }: GalleryScreenProps): React.ReactElement {
    const sortedCards = [...cards].sort((a, b) => a.id - b.id);

    return (
        <div style={styles.galleryContainer}>
            <h2 style={styles.subHeader}>でんしゃギャラリー ({cards.length}/{totalCount})</h2>
            <div style={styles.galleryGrid}>
                {sortedCards.map(card => (
                    <div key={card.id} style={styles.trainCard}>
                        <CardImage card={card} style={styles.trainCardImage} alt={card.name} />
                        <h3 style={styles.trainCardName}>{card.name}</h3>
                        <p style={styles.trainCardInfo}>{card.line}</p>
                    </div>
                ))}
            </div>
            <button style={{...styles.button, ...styles.secondaryButton, margin: '1rem auto'}} onClick={() => setMode('home')}>ホームにもどる</button>
        </div>
    );
}

function NewCardScreen({ newCard, setMode }: NewCardScreenProps): React.ReactElement {
    if (!newCard) {
        return (
            <div style={styles.screenWrapper}>
                <p>エラー：表示するカードがありません。</p>
                <button style={{...styles.button, ...styles.secondaryButton}} onClick={() => setMode('home')}>ホームにもどる</button>
            </div>
        );
    }
    return (
        <div style={styles.screenWrapper}>
            <div style={styles.newCardContainer}>
                <h2 style={styles.resultHeader}>新しいでんしゃカードをGETしたよ！</h2>
                <div style={{...styles.trainCard, ...styles.newCardSpotlight}}>
                    <CardImage card={newCard} style={styles.trainCardImage} alt={newCard.name} />
                    <h3 style={styles.trainCardName}>{newCard.name}</h3>
                    <p style={styles.trainCardInfo}>{newCard.line}</p>
                    <p style={styles.trainCardInfo}>{newCard.description}</p>
                </div>
                 <div>
                    <button style={{...styles.button, ...styles.tertiaryButton}} onClick={() => setMode('gallery')}>ギャラリーをみる</button>
                    <button style={{...styles.button, ...styles.secondaryButton}} onClick={() => setMode('home')}>つづける</button>
                </div>
            </div>
        </div>
    );
}

function DrawingCardScreen({ onSuccess, cardToDraw }: DrawingCardScreenProps): React.ReactElement {
    useEffect(() => {
        // Simulate the drawing process for a better user experience
        const timer = setTimeout(() => {
            onSuccess(cardToDraw);
        }, 2000); // 2-second delay

        return () => clearTimeout(timer);
    }, [onSuccess, cardToDraw]);

    return (
        <div style={styles.screenWrapper}>
            <h2 style={styles.loadingText}>でんしゃカードをひいています...</h2>
             <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f682/512.gif" alt="Train Emoji" width="200" />
        </div>
    );
}

function App() {
    const [mode, setMode] = useState<Mode>('home');
    const [collectedCards, setCollectedCards] = useState<TrainCardData[]>(getCollectedCards);
    const [masterTrainList] = useState<TrainCardData[]>(TRAIN_DATA);
    const [nextTrainIndex, setNextTrainIndex] = useState<number>(getNextTrainIndex);
    const [cardTickets, setCardTickets] = useState<number>(getCardTickets);
    const [newCard, setNewCard] = useState<TrainCardData | null>(null);
    const [cardToDraw, setCardToDraw] = useState<TrainCardData | null>(null);
    
    const handlePerfectScore = useCallback(() => {
        setCardTickets(prev => {
            const newTickets = prev + 1;
            saveCardTickets(newTickets);
            return newTickets;
        });
        setMode('reward');
    }, []);
    
    const handleDrawCard = useCallback(() => {
        if (cardTickets <= 0) return;
        
        const uncollectedTrains = masterTrainList.filter(
            train => !collectedCards.some(card => card.name === train.name)
        );

        if (uncollectedTrains.length === 0) {
            alert("コンプリート！すべてのカードを集めました！");
            return;
        }

        const trainToDraw = masterTrainList[nextTrainIndex % masterTrainList.length];

        setCardToDraw(trainToDraw);
        setMode('drawingCard');

    }, [cardTickets, collectedCards, nextTrainIndex, masterTrainList]);
    
    const handleDrawSuccess = useCallback((drawnCard: TrainCardData) => {
        try {
            const currentTickets = getCardTickets();
            if (currentTickets <= 0) {
                throw new Error("No tickets to draw a card.");
            }
            const newTickets = currentTickets - 1;
            
            const currentCards = getCollectedCards();
            const newCards = currentCards.some(c => c.name === drawnCard.name)
                ? currentCards
                : [...currentCards, drawnCard];

            const currentIndex = getNextTrainIndex();
            const newIndex = (currentIndex + 1) % masterTrainList.length;
            
            saveCardTickets(newTickets);
            saveCollectedCards(newCards);
            saveNextTrainIndex(newIndex);
            
            setCardTickets(newTickets);
            setCollectedCards(newCards);
            setNextTrainIndex(newIndex);
            setNewCard(drawnCard);
            setMode('newCard');

        } catch (e) {
            console.error("Card drawing transaction failed:", e);
             setMode('home');
        }
    }, [masterTrainList.length]);

    const renderScreen = () => {
        switch (mode) {
            case 'practice':
                return <PracticeScreen setMode={setMode} onPerfectScore={handlePerfectScore} />;
            case 'test':
                return <TestScreen setMode={setMode} onPerfectScore={handlePerfectScore} />;
            case 'gallery':
                return <GalleryScreen cards={collectedCards} totalCount={masterTrainList.length} setMode={setMode} />;
            case 'reward':
                return <RewardScreen setMode={setMode} />;
            case 'drawingCard':
                return cardToDraw && <DrawingCardScreen cardToDraw={cardToDraw} onSuccess={handleDrawSuccess} />;
            case 'newCard':
                 return <NewCardScreen newCard={newCard} setMode={setMode} />;
            case 'home':
            default:
                return <HomeScreen setMode={setMode} cardTickets={cardTickets} onDrawCard={handleDrawCard} />;
        }
    };

    return (
        <div style={styles.rootContainer}>
            <div style={styles.appContainer}>
                {renderScreen()}
            </div>
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);