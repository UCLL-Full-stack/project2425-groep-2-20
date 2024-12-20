import Head from "next/head";
import Header from "@components/Header";
import UserLoginForm from "@components/users/UserLoginForm";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Login: React.FC = () => {
    const users = [
        {
          username: "user1",
          firstName: "admin",
          lastName: "persoon",
          email: "admin@ucll.be",
          role: "admin",
        },
        {
          username: "user2",
          firstName: "user",
          lastName: "persoon",
          email: "user2@ucll.be",
          role: "user",
        },
        {
          username: "user3",
          firstName: "reader",
          lastName: "persoon",
          email: "user3@ucll.be",
          role: "reader",
        },
      ];
    return (
        <>

            <Head>
                <title>User Signup</title>
            </Head>
            <Header />
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <table className="min-w-full table-auto">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">Username</th>
            <th className="px-4 py-2 text-left">First Name</th>
            <th className="px-4 py-2 text-left">Last Name</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } border-b`}
            >
              <td className="px-4 py-2">{user.username}</td>
              <td className="px-4 py-2">{user.firstName}</td>
              <td className="px-4 py-2">{user.lastName}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
            <main>
                <section className="p-6 min-h-screen flex flex-col items-center">
                    <UserLoginForm />
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

export default Login;
