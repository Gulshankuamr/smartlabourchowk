export const seoLandings = [
  {
    slug: 'plumber-jobs-in-delhi',
    title: 'Plumber jobs in Delhi | Smart Labour Chowk',
    description: 'Find verified plumber jobs in Delhi. Nearby search, ratings, WhatsApp connect on Smart Labour Chowk.',
    h1: 'Plumber jobs in Delhi',
    body: `दिल्ली में प्लंबर की डिमांड सोसाइटी रिपेयर और नए फ्लैट फिटिंग से बनी रहती है। Smart Labour Chowk पर आस-पास की जॉब देखें, रेटिंग चेक करें और ऐप से सीधे कनेक्ट करें।`,
  },
  {
    slug: 'electrician-near-me',
    title: 'Electrician near me | Smart Labour Chowk',
    description: 'Hire electricians near you with ratings and verified profiles. App-first hiring for India.',
    h1: 'Electrician near me',
    body: `अपने इलाके में इलेक्ट्रीशियन खोजें। लोकेशन ऑन रखें, वेरिफाइड बैज वाले प्रोफाइल देखें और WhatsApp से बात करें — सब Smart Labour Chowk ऐप में।`,
  },
  {
    slug: 'raj-mistri-noida',
    title: 'राज मिस्त्री Noida | Smart Labour Chowk',
    description: 'Find raj mistri in Noida — nearby, rated, trusted. Digital labour chowk for masons and helpers.',
    h1: 'राज मिस्त्री Noida',
    body: `नोएडा में साइटों पर राज मिस्त्री की जरूरत लगातार रहती है। ऐप पर कीवर्ड या वॉइस सर्च से मिस्त्री ढूंढें, छोटा काम पहले ट्रायल करें।`,
  },
  {
    slug: 'contractor-hiring-workers',
    title: 'Contractor hiring workers | Smart Labour Chowk',
    description: 'Bulk hiring, verified workers, WhatsApp connect — built for contractors in India.',
    h1: 'Contractor hiring workers',
    body: `ठेकेदार के लिए तेज़ टूलिंग: जॉब पोस्ट, आस-पास वर्कर, रेटिंग और डैशबोड झलक — पूरा कंट्रोल ऐप में।`,
  },
  {
    slug: 'daily-labour-jobs',
    title: 'Daily labour jobs | Smart Labour Chowk',
    description: 'Daily wage jobs for helpers, loaders, painters — alerts on your phone.',
    h1: 'Daily labour jobs',
    body: `डेली वेज वाले काम अब चौक की भीड़ में नहीं — अलर्ट, लोकेशन और सीधा कनेक्ट।`,
  },
  {
    slug: 'labour-chowk-near-me',
    title: 'Labour chowk near me (digital) | Smart Labour Chowk',
    description: "India's digital labour chowk — find workers and jobs without standing in the sun.",
    h1: 'Labour chowk near me',
    body: `अब "चौक" आपकी जेब में है। आस-पास मजदूर और काम — तुरंत देखें, ऐप इंस्टॉल करें।`,
  },
]

export function getSeoBySlug(slug) {
  return seoLandings.find((s) => s.slug === slug)
}
