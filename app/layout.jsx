import '@/assets/styles/global.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footber';
import AuthProvider from '@/components/AuthProvider';


export const metadata = {
  title: 'LuxPlace',
  description: 'Find The Perfect Rental Property',
  keywords: 'rental, property, real estate',
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html>
        <body className='relative'>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </AuthProvider>

    );
}
 
export default MainLayout;