import { notFound } from 'next/navigation';

// Supported locales
const locales = ['en', 'it', 'es'];

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({ children, params }) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(params.locale)) {
    notFound();
  }

  return (
    <div lang={params.locale}>
      {children}
    </div>
  );
}
