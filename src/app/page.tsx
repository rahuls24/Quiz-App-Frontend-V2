import AppHeader from '@/components/Header/AppHeader';
import CheckAuth from '@/components/auth/CheckAuth';

/**
 * HomePage Component
 *
 * This component represents the home page of the application. It checks if the user is logged in,
 * and if not, it redirects them to the sign-in page. If the user is logged in, it displays a greeting
 * message with the text "Rahul".
 *
 * @returns {JSX.Element} The rendered HomePage component.
 */
export default function HomePage() {
  return (
    <>
      <CheckAuth />
      <AppHeader />
    </>
  );
}
