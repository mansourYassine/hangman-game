import { useState } from "react";
import { languages } from "./languages"

export default function App() {
    // State Values
    // Current word to guess
    const [currentWord, setCurrentWord] = useState("react");

    // User's guessed letters
    const [guessedLetters, setGuessedLetters] = useState([]);

    // Derived Values
    const wrongGuessCount = guessedLetters.filter(l => !currentWord.includes(l)).length;
    const isGameWon = currentWord.split('').every(letter => guessedLetters.includes(letter));
    const isGameLost = wrongGuessCount >= languages.length-1;
    const isGameOver = isGameWon || isGameLost;

    // Static Values
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    function addLetter(letter) {
        setGuessedLetters(prevLetters => (
            prevLetters.includes(letter) ? 
                prevLetters : 
                [...prevLetters, letter]
        ));
    }

    function changeKeyColor(e, letter) {
        currentWord.includes(letter) ?
            e.target.classList.add("bg-key-right") :
            e.target.classList.add("bg-key-wrong")
    }


    const wordletters = currentWord.split('').map((letter, index) => (
        <span 
            key={index} 
            className=" w-10 h-10 bg-[#323232] flex justify-center items-center border-b border-b-[#F9F4DA] text-[#F9F4DA] font-bold text-lg "
        >{guessedLetters.includes(letter) && letter.toUpperCase()}</span>
    ));


    // Keyboard buttons

    const keyboardElements = alphabet.split('').map((letter, index) => (
        <button
            key={index}
            className=" bg-[#FCBA29] w-10 h-10 border border-[#D7D7D7] rounded-sm font-semibold text-base cursor-pointer "
            onClick={(e) => {
                addLetter(letter);
                changeKeyColor(e, letter);
            }}
        >{letter.toUpperCase()}</button>
    ));

    // Languages chips
    const languagesChips = languages.map((lang, index) => (
        <span
            key={index}
            style={
                { backgroundColor: lang.backgroundColor, color: lang.color }
            }
            className={` rounded-sm p-1 font-bold text-[12px] relative ${ wrongGuessCount > index && "before:content-['💀'] before:absolute before:flex before:justify-center before:items-center before:w-full before:h-full before:top-0 before:left-0 before:text-[0.85rem] before:bg-[rgba(0,0,0,0.7)]"} `}
        >{lang.name}</span>
    ));

    return (
        <main className=" flex items-center flex-col mt-15 ">
            <div className=" text-center ">
                <h1 className=" font-medium text-xl text-[#F9F4DA] ">Assembly: Endgame</h1>
                <p className=" font-medium text-sm text-[#8E8E8E] max-w-88 ">Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
            </div>
            <div className=" bg-[#10A95B] text-[#F9F4DA] font-medium text-center w-88 rounded-sm py-1 mt-5 ">
                <h2 className=" text-xl ">You win!</h2>
                <p className=" text-sm ">Well done! 🎉</p>
            </div>
            <div className=" flex flex-wrap max-w-66.5 gap-0.5 justify-center mt-10 ">
                {languagesChips}
            </div>
            <div className=" flex gap-0.5 mt-10 ">
                {wordletters}
            </div>
            <div className=" mt-14 flex flex-wrap justify-center gap-2 w-120 ">
                {keyboardElements}
            </div>
            {isGameOver && <div className=" bg-[#11B5E5] w-57 h-10 flex items-center justify-center border border-[#D7D7D7] rounded-sm font-semibold mt-10 cursor-pointer ">
                New Game
            </div>}
        </main>
    )
}