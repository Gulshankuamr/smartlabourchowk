import LoginPage from '../../components/login/LoginPage'

export const metadata = {
  title: 'Login',
  description: 'OTP login for workers and contractors — continue in the Smart Labour Chowk app.',
  alternates: { canonical: '/login' },
}

export default function Page() {
  return <LoginPage />
}
