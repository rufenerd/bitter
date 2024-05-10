import React, { useState, useEffect } from 'react';

const Typewriter = ({ sentences }) => {
    const [currentSentence, setCurrentSentence] = useState(''); // Currently typed sentence
    const [sentenceIndex, setSentenceIndex] = useState(0); // Index of the current sentence
    const [charIndex, setCharIndex] = useState(0); // Index of the current character

    useEffect(() => {
        const typeCharacters = () => {
            if (charIndex < sentences[sentenceIndex].length) {
                setCurrentSentence(prev => prev + sentences[sentenceIndex][charIndex]);
                setCharIndex(prev => prev + 1);
            } else {
                setTimeout(() => {
                    setCurrentSentence('');
                    setCharIndex(0);
                    setSentenceIndex(prev => (prev + 1) % sentences.length);
                }, 1000); // Delay before typing the next sentence
            }
        };

        const timeoutId = setTimeout(typeCharacters, 100); // Typing speed in milliseconds

        return () => clearTimeout(timeoutId);
    }, [charIndex, sentenceIndex, sentences]);

    return (
        <div className="typewriter">
            <h1>{currentSentence}</h1>
        </div>
    );
};

export default Typewriter;