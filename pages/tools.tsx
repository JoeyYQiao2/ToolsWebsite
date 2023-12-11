import Tool from "app/layout/ToolLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function ToolsPage() {
  return (
    <main>
      <Tool />
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
