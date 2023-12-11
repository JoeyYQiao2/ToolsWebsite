import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function BlogsPage() {
  return (
    <main>blog works</main>
  );
}

export async function getStaticProps({ locale }) {
  return {
      props: {
          ...await serverSideTranslations(locale, ['common']),
      },
  }
}