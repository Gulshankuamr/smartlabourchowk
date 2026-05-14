import SeoLandingBody from '../../components/seo/SeoLandingBody'
import { getSeoBySlug } from '../../data/seoLandings'

const SLUG = 'contractor-hiring-workers'
const p = getSeoBySlug(SLUG)

export const metadata = {
  title: p.title,
  description: p.description,
  alternates: { canonical: `/${SLUG}` },
  openGraph: { title: p.title, description: p.description, url: `/${SLUG}` },
}

export default function Page() {
  return <SeoLandingBody slug={SLUG} />
}
