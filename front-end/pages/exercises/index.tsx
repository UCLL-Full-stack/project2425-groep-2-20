import Header from "@components/Header";
import ExerciseOverviewTable from "@components/exercises/ExerciseOverviewTable";
import ExerciseService from "@services/ExerciseService";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Link from "next/link";
import useSWR from "swr";

const Exercises: React.FC = () => {
    const fetchExercises = async () => {
        const response = await ExerciseService.getAllExercises()
        return response.json();
    }

    const {data,error,isLoading} = useSWR('/api/exercises',fetchExercises)

    return (
        <>
            <Head>
                <title>Exercises</title>
            </Head>
            <Header />
            <main className="flex flex-column justify-center align-items-center text-gray-100 align-middle">
                <section className="bg-gray-600 h-3/5 rounded-md m-2 p-2">
                <Link href="/exercises/add" className="px-4 text-white hover:bg-blue-400 rounded-md border text-center">
          Add Exercise
                </Link>
                    <h2>Exercises overview</h2>
                    {error && <p>Error</p>}
                    {isLoading && <p>loading...</p>}
                    {data && <ExerciseOverviewTable exercises={data} />}
                </section>
            </main>
        </>
    );
}

export const getServerSideProps = async (context) => {
    const {locale} = context;

    return {
        props: {
            ...(await serverSideTranslations(locale ?? "en", ["common"]))
        },
    };
}

export default Exercises