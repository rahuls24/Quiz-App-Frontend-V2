import type { Metadata } from 'next';
import './globals.css';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import ReduxProvider from '@/store/Provider';
import ToastProvider from '@/components/react-toastify/ToastProvider';

export const metadata: Metadata = {
  title: 'Quiz',
  description: 'A Simple Quiz app for examiners and examinees. ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <ReduxProvider>
            <ToastProvider>{children}</ToastProvider>
          </ReduxProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
