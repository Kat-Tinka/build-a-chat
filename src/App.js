import React from 'react'

// use the style code in const style with backticks and seperate each line with a coma in Tailwind

const style ={
  appContainer:`max-w-[728px] mx-auto text-center`,
  sectionContainer:`flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`
}

function App() {
  return (
    <div className={style.appContainer}>
    <section className={style.sectionContainer}>
    {/*Navbar*/}
    {/*Chat component*/}
      Chat
    </section>
      
    </div>
  );
}

export default App;
