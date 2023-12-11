import Website from "app/layout/WebsiteLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function WebsitePage() {
  return (
    <main>
      <Website />
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
