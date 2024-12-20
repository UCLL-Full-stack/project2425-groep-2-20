import Header from "@components/Header";
import ProgramOverviewTable from "@components/programs/ProgramOverviewTable";
import ExerciseService from "@services/ExerciseService";
import ProgramService from "@services/ProgramService";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import useSWR from "swr";

const Programs: React.FC = () => {
    const fetchPrograms = async () => {
        const response = await ProgramService.getAllPrograms()
        return response.json();
    }

    const {data,error,isLoading} = useSWR('/api/programs',fetchPrograms)

    return (
        <>
            <Head>
                <title>Programs</title>
            </Head>
            <Header />
            <main className="flex flex-column justify-center align-items-center h-screen text-gray-100 align-middle">
                <section className="bg-gray-600 h-3/5 rounded-md m-2 p-2">
                    <h2>Programs overview</h2>
                    {error && <p>Error</p>}
                    {isLoading && <p>loading...</p>}
                    {data && <ProgramOverviewTable programs={data} />}
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

export default Programs