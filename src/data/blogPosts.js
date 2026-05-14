export const blogPosts = [
  {
    slug: 'mazdoor-ko-roz-kaam-kaise-mile',
    title: 'मजदूर को रोज काम कैसे मिले',
    excerpt: 'प्रोफाइल, लोकेशन ऑन, रेटिंग — तीन चीजें जो डेली जॉब बढ़ाती हैं।',
    category: 'Workers',
    date: '2026-04-02',
    content: `## परिचय
भारत में लाखों डेली वर्कर सुबह चौक पर खड़े होते हैं। Smart Labour Chowk उन्हें मोबाइल पर काम दिलाने में मदद करता है।

## 1) प्रोफाइल पूरी रखें
अपनी स्किल, अनुभव और रेट साफ लिखें। फोटो लगाएं ताकि ठेकेदार भरोसा कर सके।

## 2) लोकेशन हमेशा ऑन
आस-पास की नौकरियां तभी मिलेंगी जब ऐप को लोकेशन की अनुमति मिले।

## 3) रेटिंग बनाए रखें
समय पर पहुंचें, काम पूरा करें — अच्छी रेटिंग से अगला काम तेज़ मिलता है।`,
  },
  {
    slug: 'contractor-kaise-hire-karein',
    title: 'Contractor कैसे hire करें',
    excerpt: 'जॉब पोस्ट से लेकर WhatsApp कनेक्ट तक — छोटी साइटों के लिए प्लेबुक।',
    category: 'Contractors',
    date: '2026-04-10',
    content: `## तेज़ हायरिंग
जॉब टाइटल, लोकेशन, दिन और भुगतान स्पष्ट लिखें। वेरिफाइड वर्कर को प्राथमिकता दें।

## WhatsApp पर स्क्रीनिंग
ऐप से सीधा मैसेज — नंबर शेयरिंग सुरक्षित रहती है।`,
  },
  {
    slug: 'raj-mistri-kaise-khojen',
    title: 'राज मिस्त्री कैसे खोजें',
    excerpt: 'नजदीकी मिस्त्री, रेटिंग देखें, पहले छोटा काम ट्रायल करें।',
    category: 'Guides',
    date: '2026-04-18',
    content: `## खोज
वॉइस सर्च या कीवर्ड से "राज मिस्त्री" ट्राई करें। फ़िल्टर: दूरी, रेटिंग।`,
  },
  {
    slug: 'labour-jobs-in-delhi',
    title: 'Labour jobs in Delhi',
    excerpt: 'दिल्ली NCR में डेली लेबर डिमांड — कहां ज्यादा मौके हैं।',
    category: 'Cities',
    date: '2026-05-01',
    content: `Delhi sites often need helpers and masons early morning. Turn on alerts in the app.`,
  },
  {
    slug: 'plumber-jobs-in-noida',
    title: 'Plumber jobs in Noida',
    excerpt: 'सोसाइटी रिपेयर, फिटिंग, छोटे प्रोजेक्ट — नोएडा में मांग।',
    category: 'Cities',
    date: '2026-05-03',
    content: `Noida societies post short jobs. Keep tools listed in profile.`,
  },
  {
    slug: 'electrician-near-me',
    title: 'Electrician near me',
    excerpt: 'आस-पास इलेक्ट्रीशियन ढूंढने के लिए ऐप टिप्स।',
    category: 'Cities',
    date: '2026-05-05',
    content: `Use nearby search and verified badge filters.`,
  },
]

export function getPostBySlug(slug) {
  return blogPosts.find((p) => p.slug === slug)
}

export function getRelated(slug, n = 3) {
  const cur = getPostBySlug(slug)
  const others = blogPosts.filter((p) => p.slug !== slug)
  const same = others.filter((p) => cur && p.category === cur.category)
  const merged = [...same, ...others.filter((p) => !same.includes(p))]
  return merged.slice(0, n)
}
