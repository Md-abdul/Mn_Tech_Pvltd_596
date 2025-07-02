import React from "react";

const ServicesLandingPage = () => {
  return (
    <section id="services" className="py-16 px-4 max-w-7xl mx-auto">
      {/* Services Header */}
      <div className="text-center mb-12">
        <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mb-3">
          OUR SERVICES
        </span>
        <h2 className="text-3xl font-bold text-gray-800">Comprehensive Solutions For Your Business</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
      </div>

      {/* IT Services Section */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">IT Industry Solutions</h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Cutting-edge technology services to power your digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Managed IT Services */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl text-blue-600">🖥️</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Managed IT Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>24/7 system monitoring and maintenance</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Remote IT support</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Backup and disaster recovery solutions</span>
              </li>
            </ul>
          </div>

          {/* Software Development */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl text-blue-600">💻</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Software Development</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Web and mobile application development</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Custom software solutions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Software integration and automation</span>
              </li>
            </ul>
          </div>

          {/* Cloud Services */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl text-blue-600">☁️</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Cloud Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Cloud migration and management</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>SaaS, IaaS, and PaaS solutions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Hybrid and multi-cloud support</span>
              </li>
            </ul>
          </div>

          {/* Cybersecurity Services */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl text-blue-600">🔒</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Cybersecurity Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Risk assessment and penetration testing</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Firewall and antivirus solutions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Data encryption and compliance</span>
              </li>
            </ul>
          </div>

          {/* IT Consulting */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl text-blue-600">📊</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">IT Consulting</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Digital transformation strategy</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Infrastructure design and optimization</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Business process automation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Trade Services Section */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">International & Domestic Trade Solutions</h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Streamlining global commerce with end-to-end trade management
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Export Services */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600 text-2xl mx-auto">
              📤
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">Export Services</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Market research and lead generation</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Documentation (invoice, packing list, shipping bill, etc.)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Assistance with licensing and export permits</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Freight forwarding and logistics coordination</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Foreign exchange and payment guidance</span>
              </li>
            </ul>
          </div>

          {/* Import Services */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600 text-2xl mx-auto">
              📥
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">Import Services</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Sourcing international suppliers</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Risk assessment and quality control</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Customs clearance and duty consultation</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Warehouse and inland transportation support</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Compliance with domestic import laws</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Digital Marketing Section */}
      <div>
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Digital Industry</h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A digital marketing company offers a range of services focused on promoting products or services through digital channels such as search engines, social media, email, websites, and mobile apps. By understanding consumer behavior and using the latest tools, these agencies help businesses generate leads, boost conversions, and build long-term customer relationships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* SEO */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl text-purple-600">🔍</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Search Engine Optimization (SEO)</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>On-page and off-page optimization</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Keyword research and strategy</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Technical SEO and website audits</span>
              </li>
            </ul>
          </div>

          {/* SMM */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl text-purple-600">📱</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Social Media Marketing (SMM)</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Social media strategy and content creation</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Facebook, Instagram, LinkedIn, and Twitter campaigns</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Influencer collaborations and brand awareness</span>
              </li>
            </ul>
          </div>

          {/* PPC */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl text-purple-600">💰</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Pay-Per-Click Advertising (PPC)</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Google Ads and Bing Ads management</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Display and retargeting campaigns</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Performance analysis and ROI tracking</span>
              </li>
            </ul>
          </div>

          {/* Content Marketing */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl text-purple-600">✍️</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Content Marketing</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Blog writing, video production, and infographics</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Email newsletters and eBooks</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Content strategy and calendar planning</span>
              </li>
            </ul>
          </div>

          {/* Website Design */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl text-purple-600">🖥️</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Website Design & Development</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Responsive and SEO-friendly websites</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>UX/UI design and branding</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Landing pages and lead generation tools</span>
              </li>
            </ul>
          </div>

          {/* Email Marketing */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl text-purple-600">✉️</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Email Marketing</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>List building and segmentation</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Drip campaigns and automation</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Campaign analytics and A/B testing</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesLandingPage;