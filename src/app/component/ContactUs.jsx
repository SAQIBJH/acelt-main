import AnimatedSection from './AnimatedSection'
import ContactForm from './ContactForm';

const ContactUs = () => {
    return (
      <div className="max-w-7xl mx-auto p-6 bg-gray-800 min-h-screen lg:my-10 rounded-xl max-sm:my-10 ">
        {/* Page Title */}
        <div className="flex">
        <h1 className="text-4xl md:text-5xl mb-8 border-b-2 border-red-600 font-normal text-white uppercase tracking-[0.1em]">Con </h1>
        <h1 className="text-4xl md:text-5xl mb-8 font-normal text-white uppercase tracking-[0.1em]">tact Us</h1>
  </div>
        {/* Contact Details and Map */}
        <div className="grid grid-cols-2 gap-8 lg:p-8">
          {/* Contact Details */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-white tracking-[0.02em]">Our Address</h2>
              <p className="text-gray-200">Showroom 3 - M44 16th St - Musaffah - Musaffah Industrial - Abu Dhabi - United Arab Emirates</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white tracking-[0.02em]">Email</h2>
              <p className="text-gray-200">contact@aceenergy.com</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white tracking-[0.02em]">Phone</h2>
              <p className="text-gray-200">+971 2 554 0676</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white tracking-[0.02em]">Working Hours</h2>
              <p className="text-gray-200">Monday - Friday: 8:00 AM - 5:00 PM</p>
            </div>
          </div>
  
          {/* Google Map */}
          <div className="rounded-lg overflow-hidden shadow-lg h-[300px]">
            <iframe
              // src="https://www.google.com/maps/dir/?api=1&destination=28.5210114,77.2565249" 
               src="https://www.google.com/maps?q=24.450192,54.687574&z=15&output=embed"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              className="w-full"
            ></iframe>
          </div>
        </div>
  
         <AnimatedSection>
          <section className="py-2 px-1 sm:px-1 lg:px-1 ">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center">Send Us a Message</h2>
              <ContactForm />
            </div>
          </section>
        </AnimatedSection>
      </div>
    );
  };
  
  export default ContactUs;
  