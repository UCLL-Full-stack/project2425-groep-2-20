import Header from "@components/Header";
import ExerciseOverviewTable from "@components/exercises/ExerciseOverviewTable";
import ExerciseService from "@services/exerciseService";
import Head from "next/head";
import useSWR from "swr";

const Exercises: React.FC = () => {
    const fetchExercises = async () => {
        const response = await ExerciseService.getAllExercises()
        return response.json();
    }

    const {data,error,isLoading} = useSWR('/api/lecturers',fetchExercises)

    return (
        <>
            <Head>
                <title>Exercises</title>
            </Head>
            <Header />
            <main className="flex flex-column justify-center align-items-center h-screen text-gray-100 align-middle">
                <section className="bg-gray-600 h-3/5 rounded-md m-2 p-2">
                    <h2>Exercises overview</h2>
                    {error && <p>Error</p>}
                    {isLoading && <p>loading...</p>}
                    {data && <ExerciseOverviewTable exercises={data} />}
                </section>
            </main>
        </>
    );
}

export default Exercises