import { Metadata } from 'next';
import ContactMain from '@/pages/contact/contact';

export const metadata: Metadata = {
  title: 'Jewels - Contact  Page',
};

const ContactPage = () => {
  return <ContactMain />;
};

export default ContactPage;
