import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  return (
    <main className="my-20 max-w-2xl self-center flex flex-col justify-center align-center">
      <h1 className="font-sans font-bold text-5xl ">
        Welcome to the
        <span className="text-cyan-500"> Joey's </span>
        Private Space!
      </h1>
      <p className="font-sans my-10">This website provides some excellent websites to improve your efficiency and some useful tools will help you fast your development or work and study. Hope you will have a great journey here!</p>
    </main>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
