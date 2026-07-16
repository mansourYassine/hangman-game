import { languages } from "./languages"

export default function App() {

    const languagesChips = languages.map((lang, index) =>(
        <span 
            key={index}
            style={
                {backgroundColor: lang.backgroundColor, color: lang.color}
            }
            className={" rounded-sm p-1 font-bold text-[12px] "}
        >{lang.name}</span>
    ));

    return (
        <main className=" flex items-center flex-col mt-15 ">
            <div className=" text-center ">
                <h1 className=" font-medium text-xl text-[#F9F4DA] ">Assembly: Endgame</h1>
                <p className=" font-medium text-sm text-[#8E8E8E] max-w-88 ">Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
            </div>
            <div className=" bg-[#10A95B] text-[#F9F4DA] font-medium text-center w-88 rounded-sm py-1.5 mt-5 ">
                <h2 className=" text-xl ">You win!</h2>
                <p className=" text-sm ">Well done! 🎉</p>
            </div>
            <div className=" flex flex-wrap max-w-66.5 gap-0.5 justify-center mt-10 ">
                {languagesChips}
            </div>
        </main>
    )
}