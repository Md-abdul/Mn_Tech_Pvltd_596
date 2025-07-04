import React from "react";
// import img from "next/img";
import managedIT from "../assets/managed-it.jpg";
import softwareDev from "../assets/software-dev.jpg";
import cloudServices from "../assets/cloudcomputer.jpg";
import cybersecurity from "../assets/cybersecurity.jpg";
import itConsulting from "../assets/itConsulting.jpg";
import exportServices from "../assets/exportServices.jpg";
import importServices from "../assets/importServices.jpg";
import seo from "../assets/seo.jpg";
import smm from "../assets/smm.jpg";
import ppc from "../assets/ppc.jpg";
import contentMarketing from "../assets/contentMarketing.jpg";
import webDesign from "../assets/webDesign.jpg";
import emailMarketing from "../assets/emailMarketing.jpg";

const ServicesLandingPage = () => {
  return (
    <section id="services" className="py-16 px-4 max-w-7xl mx-auto">
      {/* Services Header */}
      <div className="text-center mb-16">
        <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-sm">
          OUR SERVICES
        </span>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Comprehensive Solutions For Your Business</h2>
        <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
          We deliver tailored solutions across multiple industries to help your business grow and thrive in the digital age.
        </p>
      </div>

      {/* IT Services Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-3">IT Industry Solutions</h3>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Cutting-edge technology services to power your digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Managed IT Services */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
            <div className="relative h-48 rounded-t-lg overflow-hidden mb-4">
              <img 
                src={managedIT} 
                alt="Managed IT Services" 
                layout="fill"
                objectFit="cover"
                className="transition duration-500 hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Managed IT Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>24/7 system monitoring and maintenance</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Remote IT support</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Backup and disaster recovery solutions</span>
              </li>
            </ul>
          </div>

          {/* Software Development */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
            <div className="relative h-48 rounded-t-lg overflow-hidden mb-4">
              <img 
                src={softwareDev} 
                alt="Software Development" 
                layout="fill"
                objectFit="cover"
                className="transition duration-500 hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Software Development</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Web and mobile application development</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Custom software solutions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Software integration and automation</span>
              </li>
            </ul>
          </div>

          {/* Cloud Services */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
            <div className="relative h-48 rounded-t-lg overflow-hidden mb-4">
              <img 
                src={cloudServices} 
                alt="Cloud Services" 
                layout="fill"
                objectFit="cover"
                className="transition duration-500 hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Cloud Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Cloud migration and management</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>SaaS, IaaS, and PaaS solutions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Hybrid and multi-cloud support</span>
              </li>
            </ul>
          </div>

          {/* Cybersecurity Services */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
            <div className="relative h-48 rounded-t-lg overflow-hidden mb-4">
              <img 
                src={cybersecurity} 
                alt="Cybersecurity Services" 
                layout="fill"
                objectFit="cover"
                className="transition duration-500 hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Cybersecurity Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Risk assessment and penetration testing</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Firewall and antivirus solutions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Data encryption and compliance</span>
              </li>
            </ul>
          </div>

          {/* IT Consulting */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
            <div className="relative h-48 rounded-t-lg overflow-hidden mb-4">
              <img 
                src={itConsulting} 
                alt="IT Consulting" 
                layout="fill"
                objectFit="cover"
                className="transition duration-500 hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">IT Consulting</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Digital transformation strategy</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Infrastructure design and optimization</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Business process automation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Trade Services Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-3">International & Domestic Trade Solutions</h3>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Streamlining global commerce with end-to-end trade management
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Export Services */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 overflow-hidden">
            <div className="relative h-64 rounded-t-lg overflow-hidden mb-6">
              <img 
                src={exportServices} 
                alt="Export Services" 
                layout="fill"
                objectFit="cover"
                className="transition duration-500 hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">Export Services</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2 text-green-600">•</span>
                <span>Market research and lead generation</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-600">•</span>
                <span>Documentation (invoice, packing list, shipping bill, etc.)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-600">•</span>
                <span>Assistance with licensing and export permits</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-600">•</span>
                <span>Freight forwarding and logistics coordination</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-600">•</span>
                <span>Foreign exchange and payment guidance</span>
              </li>
            </ul>
          </div>

          {/* Import Services */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 overflow-hidden">
            <div className="relative h-64 rounded-t-lg overflow-hidden mb-6">
              <img 
                src={importServices} 
                alt="Import Services" 
                layout="fill"
                objectFit="cover"
                className="transition duration-500 hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">Import Services</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2 text-green-600">•</span>
                <span>Sourcing international suppliers</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-600">•</span>
                <span>Risk assessment and quality control</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-600">•</span>
                <span>Customs clearance and duty consultation</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-600">•</span>
                <span>Warehouse and inland transportation support</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-600">•</span>
                <span>Compliance with domestic import laws</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Digital Marketing Section */}
      <div>
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-3">Digital Marketing Solutions</h3>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We help businesses generate leads, boost conversions, and build long-term customer relationships through strategic digital marketing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* SEO */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
            <div className="relative h-48 rounded-t-lg overflow-hidden mb-4">
              <img 
                src={seo} 
                alt="Search Engine Optimization" 
                layout="fill"
                objectFit="cover"
                className="transition duration-500 hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Search Engine Optimization (SEO)</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2 text-purple-600">•</span>
                <span>On-page and off-page optimization</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-600">•</span>
                <span>Keyword research and strategy</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-600">•</span>
                <span>Technical SEO and website audits</span>
              </li>
            </ul>
          </div>

          {/* SMM */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
            <div className="relative h-48 rounded-t-lg overflow-hidden mb-4">
              <img 
                src={smm} 
                alt="Social Media Marketing" 
                layout="fill"
                objectFit="cover"
                className="transition duration-500 hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Social Media Marketing (SMM)</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2 text-purple-600">•</span>
                <span>Social media strategy and content creation</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-600">•</span>
                <span>Facebook, Instagram, LinkedIn, and Twitter campaigns</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-600">•</span>
                <span>Influencer collaborations and brand awareness</span>
              </li>
            </ul>
          </div>

          {/* PPC */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
            <div className="relative h-48 rounded-t-lg overflow-hidden mb-4">
              <img 
                src={ppc} 
                alt="Pay-Per-Click Advertising" 
                layout="fill"
                objectFit="cover"
                className="transition duration-500 hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Pay-Per-Click Advertising (PPC)</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2 text-purple-600">•</span>
                <span>Google Ads and Bing Ads management</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-600">•</span>
                <span>Display and retargeting campaigns</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-600">•</span>
                <span>Performance analysis and ROI tracking</span>
              </li>
            </ul>
          </div>

          {/* Content Marketing */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
            <div className="relative h-48 rounded-t-lg overflow-hidden mb-4">
              <img 
                src={contentMarketing} 
                alt="Content Marketing" 
                layout="fill"
                objectFit="cover"
                className="transition duration-500 hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Content Marketing</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2 text-purple-600">•</span>
                <span>Blog writing, video production, and infographics</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-600">•</span>
                <span>Email newsletters and eBooks</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-600">•</span>
                <span>Content strategy and calendar planning</span>
              </li>
            </ul>
          </div>

          {/* Website Design */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
            <div className="relative h-48 rounded-t-lg overflow-hidden mb-4">
              <img 
                src={webDesign} 
                alt="Website Design & Development" 
                layout="fill"
                objectFit="cover"
                className="transition duration-500 hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Website Design & Development</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2 text-purple-600">•</span>
                <span>Responsive and SEO-friendly websites</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-600">•</span>
                <span>UX/UI design and branding</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-600">•</span>
                <span>Landing pages and lead generation tools</span>
              </li>
            </ul>
          </div>

          {/* Email Marketing */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
            <div className="relative h-48 rounded-t-lg overflow-hidden mb-4">
              <img 
                src={emailMarketing} 
                alt="Email Marketing" 
                layout="fill"
                objectFit="cover"
                className="transition duration-500 hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Email Marketing</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2 text-purple-600">•</span>
                <span>List building and segmentation</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-600">•</span>
                <span>Drip campaigns and automation</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-600">•</span>
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