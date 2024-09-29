import '@/assets/styles/global.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footber';


export const metadata = {
  title: 'LuxPlace',
  description: 'Find The Perfect Rental Property',
  keywords: 'rental, property, real estate',
};

const MainLayout = ({ children }) => {
  return (
    <html>
      <body className='relative'>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
    );
}
 
export default MainLayout;