export default function App() {
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
        </main>
    )
}