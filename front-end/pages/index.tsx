import Header from "@components/Header"

const Home: React.FC = () => {
    return (
        <>
            <Header/>
            <main className="h-screen">
            <p className="text-2xl text-center">Simple Workout Planner</p>
            </main>
        </>
    )
}

export default Home