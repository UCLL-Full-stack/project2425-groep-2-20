import Head from "next/head";
import Header from "@components/Header";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import AddExerciseForm from "@components/exercises/AddExerciseForm";

const addExercise: React.FC = () => {
    return (
        <>
            <Head>
                <title>Add Exercise</title>
            </Head>
            <Header />
            <main>
                <section className="p-6 min-h-screen flex flex-col items-center">
                    <AddExerciseForm />
                </section>
            </main>
        </>
    );
};

export const getServerSideProps = async (context) => {
    const {locale} = context;

    return {
        props: {
            ...(await serverSideTranslations(locale ?? "en", ["common"]))
        },
    };
}

export default addExercise;
