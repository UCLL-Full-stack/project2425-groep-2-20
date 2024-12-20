import Header from "@components/Header"
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home: React.FC = () => {
    return (
        <>
            <Header/>
            <main className="h-screen">
            <p className="text-2xl text-center">
                        Add Exercises and make workouts. <br />
                    </p>
            </main>
        </>
    )
}

export const getServerSideProps = async (context) => {
    const {locale} = context;

    return {
        props: {
            ...(await serverSideTranslations(locale ?? "en", ["common"]))
        },
    };
}

export default Home