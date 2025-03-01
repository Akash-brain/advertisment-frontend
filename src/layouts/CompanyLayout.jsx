import Footer from "../Components/Footer";
import Header from "..//Components/Header";
import {
  Building2,
  Target,
  Users,
  Rocket,
  Award,
  TrendingUp,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
const CompanyLayout = () => {
  const teamD = [
    {
      name: "John Doe",
      designation: "Founder & CEO",
      image:
        "https://www.institutobrasilisrael.org/wp-content/uploads/2017/10/speaker3-min.jpg",
      bio: "Visionary leader driving innovative strategies and excellence.",
    },
    {
      name: "John Doe",
      designation: "Founder & CEO",
      image:
        "https://www.institutobrasilisrael.org/wp-content/uploads/2017/10/speaker3-min.jpg",
      bio: "Visionary leader driving innovative strategies and excellence.",
    },
    {
      name: "Jane Smith",
      designation: "Marketing Head",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQGZCGQ387Jvew/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1689804636851?e=2147483647&v=beta&t=nAhb00Wk0O4yZQhsUWYDVcITAjU5oDz1CNS9yYuomMQ",
      bio: "Expert in creating impactful marketing campaigns that deliver results.",
    },
    {
      name: "Emily Johnson",
      designation: "Creative Director",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQxT_6QtNc-lSNswmaGmyJFKL9Rlrmh7xrxQ&s",
      bio: "Bringing brands to life through creative storytelling and design.",
    },
    {
      name: "Michael Brown",
      designation: "Public Relations Manager",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQGM--wxZwIZwg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1680220082934?e=2147483647&v=beta&t=iTSyvL4kGXt1oZYjrOZ6h544u5Hq_l6uzwqVOVvp6-o",
      bio: "Driving technological innovations to enhance user experiences.",
    },
  ];
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="min-h-screen mt-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero Section with Compact Height and Gradient Background */}
          <div className="relative h-[200px] mb-12">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-0 via-green-200 to-0">
              <div className="absolute inset-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
                  {/* Content */}
                  <div className="text-center opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
                    <h1 className="text-4xl font-bold text-gray-900 mb-3">
                      About Blink Beats
                    </h1>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                      Where creativity meets strategy to build exceptional brand
                      experiences
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Story with Slide-in Animation */}
          <section className="mb-14 opacity-0 animate-[slideUp_1s_ease-out_0.5s_forwards]">
            <div className="flex flex-col md:flex-row justify-center gap-12">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Our Team"
                className="rounded-2xl shadow-2xl w-full md:w-1/3 object-cover transform hover:scale-105 transition-all duration-500 hover:shadow-3xl"
              />
              <div className="w-full md:w-1/2 space-y-6">
                <div className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300">
                  <Building2 className="w-8 h-8 text-indigo-600 flex-shrink-0 mt-1 animate-pulse" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      More Than an Agency
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We are a team of researchers, media strategists,
                      storytellers, and engagement experts who meet you at the
                      intersection of business and communications.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300">
                  <Target className="w-8 h-8 text-indigo-600 flex-shrink-0 mt-1 animate-pulse" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                    <p className="text-gray-600 leading-relaxed">
                      At Blink Beats, we are committed to expanding your brand
                      with high-quality service that combines creativity with
                      value pricing. Our passion stems from our admiration for
                      the advertising world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us with Staggered Card Animation */}
          <section className="mb-14 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 py-16 rounded-3xl opacity-0 animate-[fadeIn_1s_ease-out_1s_forwards]">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
              Why Choose Us?
            </h2>
            <div className="grid md:grid-cols-3 gap-12 px-8">
              <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl opacity-0 animate-[slideUp_1s_ease-out_1.2s_forwards]">
                <Users className="w-12 h-12 text-indigo-600 mb-6 animate-bounce" />
                <h3 className="text-xl font-semibold mb-4">Brand Visibility</h3>
                <p className="text-gray-600">
                  Elevate your brand's presence across platforms with our
                  strategic approach to digital visibility.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl opacity-0 animate-[slideUp_1s_ease-out_1.4s_forwards]">
                <Rocket className="w-12 h-12 text-purple-600 mb-6 animate-bounce" />
                <h3 className="text-xl font-semibold mb-4">
                  Connect with Customers
                </h3>
                <p className="text-gray-600">
                  Foster meaningful connections with your audience through
                  engaging content and interactions.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl opacity-0 animate-[slideUp_1s_ease-out_1.6s_forwards]">
                <TrendingUp className="w-12 h-12 text-pink-600 mb-6 animate-bounce" />
                <h3 className="text-xl font-semibold mb-4">Boost Sales</h3>
                <p className="text-gray-600">
                  Transform visibility into tangible growth with our proven
                  strategies and techniques.
                </p>
              </div>
            </div>
          </section>

          {/* Digital Marketing with Slide-in Animation */}
          <section className="mb-20 opacity-0 animate-[slideUp_1s_ease-out_1.8s_forwards]">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
              India's Best Creative Agency
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-12">
              <div className="w-full md:w-1/2 space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  FMCG marketing has transformed. Your audience has moved from
                  TV to Instagram, Facebook, and YouTube. What worked yesterday
                  is already outdated with today's digital-first consumers.
                </p>
                <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-xl transform hover:scale-105 transition-all duration-500">
                  <h3 className="text-xl font-semibold mb-4">
                    We help you stay ahead:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                      <Award className="w-5 h-5 text-indigo-600 animate-pulse" />
                      <span>Viral meme marketing</span>
                    </li>
                    <li className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                      <Award className="w-5 h-5 text-indigo-600 animate-pulse" />
                      <span>Influencer partnerships</span>
                    </li>
                    <li className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                      <Award className="w-5 h-5 text-indigo-600 animate-pulse" />
                      <span>Precision-targeted ads</span>
                    </li>
                  </ul>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                alt="Digital Marketing Team"
                className="rounded-2xl shadow-2xl w-full md:w-1/3 object-cover transform hover:scale-105 transition-all duration-500"
              />
            </div>
          </section>

          {/* Your Life. Your Terms. with Fade-in Animation */}
          <section className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-12 opacity-0 animate-[fadeIn_1s_ease-out_2s_forwards]">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
              Your Life. Your Terms.
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-12">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80"
                alt="Life on Your Terms"
                className="rounded-2xl shadow-2xl w-full md:w-1/3 object-cover transform hover:scale-105 transition-all duration-500"
              />
              <div className="w-full md:w-1/2 space-y-10">
                <p className="text-gray-600 leading-relaxed">
                  We offer opportunities for freedom, flexibility, and fun.
                  Build your life around your dreams with Forever Living. From
                  extra income to unlimited earning potential, opportunity
                  abounds.
                </p>
                <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-500">
                  <h3 className="text-xl font-semibold mb-4">
                    Benefits of joining us:
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300">
                      <Award className="w-5 h-5 text-indigo-600 mt-1 animate-pulse" />
                      <span>
                        Preferred Customers get 5% off future purchases
                      </span>
                    </li>
                    <li className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300">
                      <Award className="w-5 h-5 text-indigo-600 mt-1 animate-pulse" />
                      <span>
                        Exclusive insider updates on new products and promotions
                      </span>
                    </li>
                    <li className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300">
                      <Award className="w-10 h-5 text-indigo-600 mt-1 animate-pulse" />
                      <span>
                        Save more with our loyalty program—earn a 30% discount
                        after 2 Case Credits of purchases in 2 consecutive
                        months
                      </span>
                    </li>
                  </ul>
                </div>
                <button
                  onClick={() => {
                    navigate("/join-us"), window.scroll(0, 0);
                  }}
                  className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
                >
                  Join Us Now
                </button>
              </div>
            </div>
          </section>
          {/* Team Members Section */}
          <section className="mt-20 mb-20 opacity-0 animate-[slideUp_1s_ease-out_2.2s_forwards]">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-2 px-2">
              {/* Team Member Card */}
              {teamD.map((member, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 mx-auto rounded-full mb-6 shadow-md object-cover"
                  />
                  <h3 className="text-xl font-semibold text-center mb-2">
                    {member.name}
                  </h3>
                  <p className="text-indigo-600 text-center font-medium mb-4">
                    {member.designation}
                  </p>
                  <p className="text-gray-600 text-center">{member.bio}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CompanyLayout;
