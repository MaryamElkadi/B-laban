
import backgroundHome from '../../assets/img/سوبرلوكسقشطوطةرز638693405159882076.jpg'
import quality from '../../assets/img/611AVDN53HL._UF350,350_QL80_.jpg'
import delivery from '../../assets/img/images (4).jpg'
import service from '../../assets/img/913BBE081BC4B5932FAC537071A2B0E7.jpg'
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
   const navigate = useNavigate();
  const handleCategories = () => {
    toast.success(` categories page`);
    navigate("/categories");
  };
   const handleCart = () => {
    toast.success(` Cart page`);
    navigate("/cart");
  };
     const handleProducts = () => {
    toast.success(` Menu page`);
    navigate("/Menu");
  }; const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show success toast
    toast.success("Message sent successfully!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    // Clear the form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
 <div className="min-h-screen flex flex-col items-center justify-center">
      {/* Background with overlay */}
      <div className="home flex justify-center items-center w-full h-screen bg-cover bg-center bg-no-repeat relative"
           style={{ backgroundImage: `url(${backgroundHome})` }}>
        
        {/* Transparent black overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Content */}
        <div className="box container w-4/5 md:w-2/3 lg:w-1/2 h-auto p-8 bg-blue-700/20 text-white mt-40 rounded-2xl backdrop-blur-lg border border-white/10 flex flex-col justify-center items-center relative z-10">
          <h1 className='text-4xl md:text-6xl lg:text-8xl font-bold text-center mb-6 font-[family-name:main-font]'>
            Bblabn ,<br /> Just for you 
          </h1>
          <button 
            onClick={handleProducts} 
            className='text-xl font-semibold px-8 py-4 bg-blue-900/80 text-white rounded-2xl mt-6 backdrop-blur-sm hover:bg-gray-600 transition-all ease-in-out duration-300'
          >
            Order now
          </button>
        </div>
      </div>

     
    </div>


<div className="chooseUs mt-20 container mx-auto px-4">
  <h2 className='text-center text-5xl font-[family-name:main-font] font-bold text-gray-800'>Why choose us?</h2>
  <p className='text-center text-gray-600 mt-5 max-w-3xl mx-auto text-lg'>
    At Blabn, we believe in delivering exceptional quality and unparalleled service. 
    Our commitment to excellence ensures every experience is tailored just for you, 
    making us the perfect choice for those who value perfection and attention to detail.
  </p>
  
  <div className="cards mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Card 1 */}
    <div className="card flex flex-col items-center shadow-xl rounded-2xl p-6 h-full transition-transform hover:scale-105">
      <div className="w-full h-56 overflow-hidden rounded-2xl mb-5">
        <img src={quality} alt="Premium Quality" className='w-full h-full object-cover rounded-2xl'/>
      </div>
      <h3 className='text-2xl font-[family-name:main-font] font-bold text-gray-800 text-center'>Premium Quality</h3>
      <p className='text-gray-600 mt-3 text-center flex-grow'>Experience the finest quality products crafted with precision and care for unmatched excellence.</p>
      <button className='px-8 py-2.5 bg-cyan-800 rounded-full mt-5 font-[family-name:main-font] text-white hover:bg-cyan-950 transition-colors w-full max-w-xs' onClick={handleCategories}>
        Try NOW!
      </button>
    </div>
    
    {/* Card 2 */}
    <div className="card flex flex-col items-center shadow-xl rounded-2xl p-6 h-full transition-transform hover:scale-105">
      <div className="w-full h-56 overflow-hidden rounded-2xl mb-5">
        <img src={delivery} alt="Fast Delivery" className='w-full h-full object-cover rounded-2xl'/>
      </div>
      <h3 className='text-2xl font-[family-name:main-font] font-bold text-gray-800 text-center'>Fast Delivery</h3>
      <p className='text-gray-600 mt-3 text-center flex-grow'>Get your orders delivered lightning fast with our efficient and reliable delivery network.</p>
      <button className='px-8 py-2.5 bg-cyan-800 rounded-full mt-5 font-[family-name:main-font] text-white hover:bg-cyan-950 transition-colors w-full max-w-xs' onClick={handleCart}>
        Order NOW!
      </button>
    </div>
    
    {/* Card 3 */}
    <div className="card flex flex-col items-center shadow-xl rounded-2xl p-6 h-full transition-transform hover:scale-105">
      <div className="w-full h-56 overflow-hidden rounded-2xl mb-5">
        <img src={service} alt="Personalized Service" className='w-full h-full object-cover rounded-2xl'/>
      </div>
      <h3 className='text-2xl font-[family-name:main-font] font-bold text-gray-800 text-center'>Personalized Service</h3>
      <p className='text-gray-600 mt-3 text-center flex-grow'>Enjoy customized solutions designed specifically to meet your unique needs and preferences.</p>
      <button className='px-8 py-2.5 bg-cyan-800 rounded-full mt-5 font-[family-name:main-font] text-white hover:bg-cyan-950 transition-colors w-full max-w-xs' onClick={handleProducts}>
        Enjoy NOW!
      </button>
    </div>
  </div>
</div>

<div id='about' className="about-section py-20 px-4 ">
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Text Content */}
      <div className="space-y-6">
        <h2 className="text-4xl font-bold mb-6 font-[family-name:main-font]">About Blabn</h2>
        
        <p className="text-lg text-gray-700   leading-relaxed">
          At Blabn, we've been crafting exceptional frozen delights since 2010. 
          Our journey began with a simple passion for creating the perfect blend 
          of taste and quality that brings smiles to our customers' faces.
        </p>
        
        <p className="text-lg text-gray-700 leading-relaxed">
          Using only the finest ingredients and traditional recipes combined with 
          modern innovation, we've become a beloved destination for blabn lovers 
          who appreciate authentic flavors and creamy perfection.
        </p>
        
        <div className="grid grid-cols-2 gap-6 mt-8">
          {/* Stat 1 */}
          <div className="text-center">
            <div className="text-3xl font-bold  mb-2">13+</div>
            <div className="">Years Experience</div>
          </div>
          
          {/* Stat 2 */}
          <div className="text-center">
            <div className="text-3xl font-bold  mb-2">50+</div>
            <div className="">Unique Flavors</div>
          </div>
          
          {/* Stat 3 */}
          <div className="text-center">
            <div className="text-3xl font-bold  mb-2">10K+</div>
            <div className="">Happy Customers</div>
          </div>
          
          {/* Stat 4 */}
          <div className="text-center">
            <div className="text-3xl font-bold  mb-2">100%</div>
            <div className="">Quality Guarantee</div>
          </div>
        </div>
        
      
      </div>
      
      {/* Image/Visual Content */}
      <div className="relative">
        <div className="bg-blue-800/10 backdrop-blur-lg rounded-2xl p-8 border border-black/20">
          <div className="grid grid-cols-2 gap-4">
            {/* Feature 1 */}
            <div className="bg-blue-600/15 p-4 rounded-xl text-center">
              <div className="w-12 h-12 bg-blue-400/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🌱</span>
              </div>
              <h4 className="font-semibold mb-1">Fresh Ingredients</h4>
              <p className="text-gray-800 text-sm">Locally sourced daily</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-blue-600/15 p-4 rounded-xl text-center">
              <div className="w-12 h-12 bg-blue-400/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">👨‍🍳</span>
              </div>
              <h4 className="font-semibold mb-1">Expert Craftsmanship</h4>
              <p className="text-gray-800 text-sm">Master blabn makers</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-blue-600/15 rounded-xl text-center">
              <div className="w-12 h-12 bg-blue-400/20 rounded-full flex items-center justify-center mx-auto mb-3 mt-3">
                <span className="text-xl">❤️</span>
              </div>
              <h4 className="font-semibold mb-1">Made with Love</h4>
              <p className="text-gray-800 text-sm">Passion in every scoop</p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-blue-600/15 p-4 rounded-xl text-center">
              <div className="w-12 h-12 bg-blue-400/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🚚</span>
              </div>
              <h4 className="font-semibold mb-1">Fast Delivery</h4>
              <p className="text-gray-800 text-sm">Fresh to your door</p>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-pink-400 rounded-full opacity-20 blur-xl"></div>
      </div>
    </div>
  </div>
</div>

<div id='contactUs' className="contact-section py-20 px-4 bg-gradient-to-br ">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4 font-[family-name:main-font]">Get in Touch</h2>
      <p className="text-xl text-gray-800 max-w-2xl mx-auto">
        We'd love to hear from you! Reach out to us for orders, questions, or just to say hello.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Contact Information */}
      <div className="space-y-8">
        <div className="bg-blue-600/10 backdrop-blur-md p-8 rounded-2xl border border-black/20">
          <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
          
          {/* Phone */}
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blue-800/20 rounded-full flex items-center justify-center mr-4">
              <span className="text-xl">📞</span>
            </div>
            <div>
              <h4 className="font-semibold">Phone Number</h4>
              <p className="text-gray-800">+1 (555) 123-BLABN</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blue-800/20 rounded-full flex items-center justify-center mr-4">
              <span className="text-xl">✉️</span>
            </div>
            <div>
              <h4 className="font-semibold">Email Address</h4>
              <p className="text-gray-800">hello@blabn.com</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blue-800/20 rounded-full flex items-center justify-center mr-4">
              <span className="text-xl">📍</span>
            </div>
            <div>
              <h4 className="font-semibold">Our Location</h4>
              <p className="text-gray-800">123 Blabn Street, Sweet City, SC 12345</p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-800/20 rounded-full flex items-center justify-center mr-4">
              <span className="text-xl">🕒</span>
            </div>
            <div>
              <h4 className="font-semibold">Opening Hours</h4>
              <p className="text-gray-800">Daily: 8:00 AM - 11:00 PM</p>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="bg-blue-600/10 backdrop-blur-md p-8 rounded-2xl border border-black/20">
          <h3 className="text-2xl font-semibold mb-6">Follow Us</h3>
          <div className="flex space-x-4 justify-center items-center me-6">
            <a href="#" className="w-12 h-12 bg-blue-800/20 rounded-full flex items-center justify-center hover:bg-blue-400/30 transition-colors">
              <span className="text-xl">📘</span>
            </a>
            <a href="#" className="w-12 h-12 bg-blue-800/20 rounded-full flex items-center justify-center hover:bg-blue-400/30 transition-colors">
              <span className="text-xl">📸</span>
            </a>
            <a href="#" className="w-12 h-12 bg-blue-800/20 rounded-full flex items-center justify-center hover:bg-blue-400/30  transition-colors">
              <span className="text-xl">🐦</span>
            </a>
            <a href="#" className="w-12 h-12 bg-blue-800/20 rounded-full flex items-center justify-center hover:bg-blue-400/30  transition-colors">
              <span className="text-xl">📺</span>
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-blue-600/10 backdrop-blur-md p-8 rounded-2xl border border-black/20">
        <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
        
         <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full px-4 py-3 rounded-xl border placeholder-gray-600"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full px-4 py-3 rounded-xl border placeholder-gray-600"
              />
            </div>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-3 rounded-xl border placeholder-gray-600"
            />

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-xl border placeholder-gray-600"
            />

            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full px-4 py-3 rounded-xl border placeholder-gray-600"
            ></textarea>

            <button
              type="submit"
              className="w-full py-4 bg-cyan-700 text-white rounded-xl hover:bg-cyan-400 hover:text-black transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <ToastContainer />
   
  {/* Map Placeholder */}
 <div className="mt-16 bg-white/10 backdrop-blur-md rounded-2xl border border-black/20 p-8">
  <h3 className="text-2xl font-semibold mb-6 text-center font-[family-name:main-font]">
    Find Us Here
  </h3>
  <div className="overflow-hidden rounded-xl h-64 border border-black/20">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.1234567890123!2d46.712345!3d24.713123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0375b69c9876%3A0xabcd1234abcd5678!2sB.%20Laban%20Al%20Sulimaniyah!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      title="B Laban Riyadh Location"
    ></iframe>
  </div>
</div>

  </div>
</div>
<footer className="footer bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950 text-white pt-16 pb-8">
  <div className="max-w-6xl mx-auto px-4">
    {/* Main Footer Content */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
      {/* Brand Column */}
      <div className="space-y-4">
        <div className="flex items-center">
          <span className="text-3xl">🍦</span>
          <h3 className="text-2xl font-bold ml-2">Blabn</h3>
        </div>
        <p className="text-blue-200 leading-relaxed">
          Crafting the finest frozen delights since 2010. Experience the perfect blend of tradition and innovation in every scoop.
        </p>
        <div className="flex space-x-4 pt-2">
          <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
            <span className="text-lg">📘</span>
          </a>
          <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
            <span className="text-lg">📸</span>
          </a>
          <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
            <span className="text-lg">🐦</span>
          </a>
          <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
            <span className="text-lg">📺</span>
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
        <ul className="space-y-3">
          <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Home</a></li>
          <li><a href="#" className="text-blue-200 hover:text-white transition-colors">About Us</a></li>
          <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Our Menu</a></li>
          <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Categories</a></li>
          <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Special Offers</a></li>
        </ul>
      </div>

      {/* Categories */}
      <div>
        <h4 className="text-lg font-semibold mb-6">Categories</h4>
        <ul className="space-y-3">
          <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Classic Blabn</a></li>
          <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Fruit Blabn</a></li>
          <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Chocolate Blabn</a></li>
          <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Healthy Blabn</a></li>
          <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Arabic Blabn</a></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
        <div className="space-y-3">
          <div className="flex items-center">
            <span className="text-lg mr-3">📍</span>
            <span className="text-blue-200">123 Blabn Street, Sweet City</span>
          </div>
          <div className="flex items-center">
            <span className="text-lg mr-3">📞</span>
            <span className="text-blue-200">+1 (555) 123-BLABN</span>
          </div>
          <div className="flex items-center">
            <span className="text-lg mr-3">✉️</span>
            <span className="text-blue-200">hello@blabn.com</span>
          </div>
          <div className="flex items-center">
            <span className="text-lg mr-3">🕒</span>
            <span className="text-blue-200">Daily: 8AM - 11PM</span>
          </div>
        </div>
      </div>
    </div>

    {/* Newsletter Subscription */}
    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 mb-8 border border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h4 className="text-xl font-semibold mb-2">Stay Updated</h4>
          <p className="text-blue-200">Subscribe to our newsletter for exclusive offers and new flavors!</p>
        </div>
        <div className="flex space-x-4">
          <input 
            type="email" 
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-white/40"
          />
          <button className="px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-100 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>

    {/* Payment Methods */}
    <div className="flex flex-col items-center mb-8">
      <h4 className="text-lg font-semibold mb-4">We Accept</h4>
      <div className="flex space-x-4">
        <div className="w-12 h-8 bg-white/10 rounded flex items-center justify-center">💳</div>
        <div className="w-12 h-8 bg-white/10 rounded flex items-center justify-center">🏦</div>
        <div className="w-12 h-8 bg-white/10 rounded flex items-center justify-center">📱</div>
        <div className="w-12 h-8 bg-white/10 rounded flex items-center justify-center">🔗</div>
        <div className="w-12 h-8 bg-white/10 rounded flex items-center justify-center">💲</div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-white/10 pt-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-blue-200 text-sm mb-4 md:mb-0">
          © 2024 Blabn. All rights reserved. Made with ❤️
        </p>
        <div className="flex space-x-6">
          <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">Privacy Policy</a>
          <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">Terms of Service</a>
          <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">Cookie Policy</a>
        </div>
      </div>
    </div>
  </div>
</footer>
    </>
    
  )
}