import React from 'react';
import { Handshake, Award, Globe, Users } from 'lucide-react';

const Partners: React.FC = () => {
  return (
    <section id="partners" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Partners</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We collaborate with leading manufacturers and suppliers to deliver the highest quality 
            electrical solutions and components for all our projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Partners Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/partners.PNG" 
                alt="Our trusted partners and suppliers"
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">Certified</div>
                  <div className="text-sm text-gray-600">Partners</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Trusted Partnerships for Quality Solutions
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our success is built on strong partnerships with renowned manufacturers and suppliers. 
                These collaborations ensure we deliver cutting-edge electrical solutions using the 
                latest technology and highest quality components.
              </p>
            </div>

            {/* Partnership Benefits */}
            <div className="space-y-6">
              {[
                {
                  icon: Handshake,
                  title: "Strategic Partnerships",
                  description: "Long-term relationships with leading electrical equipment manufacturers"
                },
                {
                  icon: Globe,
                  title: "Global Standards",
                  description: "Access to international quality products and latest technologies"
                },
                {
                  icon: Users,
                  title: "Technical Support",
                  description: "Comprehensive technical support and training from our partners"
                },
                {
                  icon: Award,
                  title: "Quality Assurance",
                  description: "Certified products with warranties and quality guarantees"
                }
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">{benefit.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-6 border border-blue-200">
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-blue-600">Partnership Benefits:</strong> Through our strategic 
                partnerships, we ensure competitive pricing, reliable supply chains, and access to 
                the latest electrical technologies for all our projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;