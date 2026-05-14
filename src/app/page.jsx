import HomePage from '../components/home/HomePage'

export const metadata = {
  title: 'Smart Labour Chowk — भारत का डिजिटल लेबर चौक',
  description:
    'घर बैठे काम खोजो और मजदूर ढूंढो। Daily workers, mistri, plumber, electrician — nearby, rated, WhatsApp connect.',
  openGraph: {
    title: 'Smart Labour Chowk — भारत का डिजिटल लेबर चौक',
    description: 'Digital labour chowk for India — app-first jobs and hiring.',
    url: '/',
  },
}

export default function Page() {
  return <HomePage />
}
