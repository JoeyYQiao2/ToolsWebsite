import Website from "app/layout/WebsiteLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import fs from 'fs';
import path from "path";

export default function WebsitePage({ data }) {
  return (
    <main>
      <Website data={data}/>
    </main>
  );
}

export async function getStaticProps({ locale }) {
  const filePath = path.join(process.cwd(), 'public/data', 'website.json')
  const file = await fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(file);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      data,
    },
  };
}
