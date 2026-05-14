import WorkersPage from '../../components/workers/WorkersPage'
import JsonLd from '../../components/seo/JsonLd'

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'क्या ऐप फ्री है?',
      acceptedAnswer: { '@type': 'Answer', text: 'हां, प्रोफाइल बनाना और जॉब देखना फ्री है।' },
    },
    {
      '@type': 'Question',
      name: 'पेमेंट कैसे होता है?',
      acceptedAnswer: { '@type': 'Answer', text: 'शुरुआत में सीधे वर्कर से बात करें।' },
    },
  ],
}

export const metadata = {
  title: 'Workers — मजदूर के लिए',
  description: 'Daily jobs, nearby hiring, ratings, WhatsApp connect for workers in India.',
  alternates: { canonical: '/workers' },
}

export default function Page() {
  return (
    <>
      <JsonLd data={faqLd} />
      <WorkersPage />
    </>
  )
}
