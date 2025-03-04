import { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ChevronDown, 
  Star, 
  Code, 
  Users, 
  ExternalLink
} from 'lucide-react';
import { ProfileImg } from './assets';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-blue-50 shadow-sm z-50">
        <div className="container mx-auto px-12 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-blue-950">Ujash Patel</div>
            <div className="hidden md:flex space-x-8">
              {['about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`${
                    activeSection === section ? 'text-blue-950 font-medium' : 'text-gray-600 hover:text-blue-700'
                  } capitalize transition-colors duration-300`}
                >
                  {section}
                </button>
              ))}
            </div>
            <button className="md:hidden text-gray-600">
              <ChevronDown size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 bg-gradient-to-r from-black to-blue-950 text-white">
        <div className="container mx-auto px-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Ujash Patel</h1>
              <h2 className="text-2xl md:text-3xl font-light mb-6">Senior Android Developer & Team Lead</h2>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl">
                Building exceptional mobile experiences with cutting-edge Android technologies and leading high-performing development teams.
              </p>
              <div className="flex space-x-4">
                <a href="mailto:ujashpatel169@gmail.com" className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all">
                  <Mail size={20} />
                </a>
                <a href="https://www.linkedin.com/in/ujash-patel-758651120" target="_blank" rel="noopener noreferrer" className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/patel0912" target="_blank" rel="noopener noreferrer" className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all">
                  <Github size={20} />
                </a>
              </div>
            </div>
            <div className="md:w-1/3 mt-10 md:mt-0 flex justify-center">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-50 shadow-lg">
                <img 
                  src={ProfileImg}
                  alt="Ujash Patel" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-blue-50">
        <div className="container mx-auto px-12">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-950">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6 text-gray-700 leading-relaxed">
            With over four years of experience in Android development, I specialize in building robust, scalable, and user-centric mobile applications. As a team lead, I have successfully managed and mentored development teams of up to five engineers, fostering a culture of continuous improvement through Agile methodologies.
            </p>
            <p className="text-lg mb-6 text-gray-700 leading-relaxed">
            My expertise covers the entire Android ecosystem, including architecture design using MVVM, MVC, and Clean Architecture. I am proficient in Kotlin and Java, with foundational knowledge of Jetpack Compose and the latest Android libraries. Passionate about writing clean, maintainable code, I prioritize delivering seamless and intuitive user experiences.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
            Throughout my career, I have developed and delivered over 15 successful applications across diverse domains, including healthcare, e-commerce, social media, video calling, and live streaming. I thrive in collaborative environments and take pride in mentoring junior developers to help them grow their skills.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="container mx-auto px-12">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-950">Skills & Tech Stack</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Code size={24} className="text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">Android Development</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Star size={16} className="text-teal-500 mr-2" />
                  <span>Kotlin, Java & Jetpack Compose</span>
                </li>
                <li className="flex items-center">
                  <Star size={16} className="text-teal-500 mr-2" />
                  <span>Android Framework</span>
                </li>
                <li className="flex items-center">
                  <Star size={16} className="text-teal-500 mr-2" />
                  <span>Dependency Injection</span>
                </li>
                <li className="flex items-center">
                  <Star size={16} className="text-teal-500 mr-2" />
                  <span>MVVM, MVC Architecture</span>
                </li>
                <li className="flex items-center">
                  <Star size={16} className="text-teal-500 mr-2" />
                  <span>Bitbucket, Sourcetree</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Code size={24} className="text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">Libraries & Tools</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Star size={16} className="text-teal-500 mr-2" />
                  <span>Dagger/Hilt</span>
                </li>
                <li className="flex items-center">
                  <Star size={16} className="text-teal-500 mr-2" />
                  <span>Room Database</span>
                </li>
                <li className="flex items-center">
                  <Star size={16} className="text-teal-500 mr-2" />
                  <span>Retrofit, JSON & OkHttp</span>
                </li>
                <li className="flex items-center">
                  <Star size={16} className="text-teal-500 mr-2" />
                  <span>Coroutines & Flow</span>
                </li>
                <li className="flex items-center">
                  <Star size={16} className="text-teal-500 mr-2" />
                  <span>Firebase Suite & Github</span>
                </li>
                <li className="flex items-center">
                  <Star size={16} className="text-teal-500 mr-2" />
                  <span>JUnit & Espresso</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Users size={24} className="text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">Leadership & Soft Skills</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Star size={16} className="text-teal-500 mr-2" />
                  <span>Team Leadership</span>
                </li>
                <li className="flex items-center">
                  <Star size={16} className="text-teal-500 mr-2" />
                  <span>Agile/Scrum Methodologies</span>
                </li>
                <li className="flex items-center">
                  <Star size={16} className="text-teal-500 mr-2" />
                  <span>Code Reviews & Mentoring</span>
                </li>
                <li className="flex items-center">
                  <Star size={16} className="text-teal-500 mr-2" />
                  <span>Technical Documentation</span>
                </li>
                <li className="flex items-center">
                  <Star size={16} className="text-teal-500 mr-2" />
                  <span>Project Planning</span>
                </li>
                <li className="flex items-center">
                  <Star size={16} className="text-teal-500 mr-2" />
                  <span>Cross-team Collaboration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-blue-50">
        <div className="container mx-auto px-12">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-950">Work Experience</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-2 border-blue-600 pl-8 pb-8">

              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-0"/>
              <div className="mb-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-800">Senior Android Developer & Team Lead</h3>
                  <div className="text-teal-600 font-medium">Jan 2023 - Present</div>
                </div>
                <div className="text-lg font-medium text-blue-700 mb-4">Devine Globe Technologies Pvt. Ltd., Ahmedabad</div>
                <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700">
                  <li>Led a team of four Android developers, applying Agile methodologies and CI/CD practices to streamline development</li>
                  <li>Designed and developed scalable and high-performance Android applications using MVVM,MVC, Kotlin Coroutines, and Java, ensuring maintainability and efficiency</li>
                  <li>Collaborated closely with product and design teams to define feature requirements, enhance user experience, and drive product innovation</li>
                  <li>Successfully integrated multiple payment systems, including Stripe and Squareup, ensuring secure and seamless transactions</li>
                  <li>Mentored junior developers, conducted regular code reviews, and enforced best coding practices to ensure maintainable and high-quality code</li>
                  <li>Implemented real-time data synchronization using Socket, enhancing responsiveness and user engagement</li>
                </ul>
              </div>
              
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-[400px]"/>
              <div className="mb-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-800">Senior Android Developer</h3>
                  <div className="text-teal-600 font-medium">Jul 2022 - Jun 2023</div>
                </div>
                <div className="text-lg font-medium text-blue-700 mb-4">Unitech IT Solutions Pvt. Ltd., Surat</div>
                <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700">
                  <li>Developed a diverse range of Android applications, including an Astrology app, a Tinder clone, an Uber clone, and an eCommerce app, showcasing versatility in app development</li>
                  <li>This company has provided me with a solid platform to enhance my technical skills and expertise in mobile app development</li>
                  <li>I have successfully integrated multiple payment systems, including RazorPay, PayUMoney, and Google Pay, ensuring seamless and secure transactions</li>
                  <li>Optimized app performance by reducing load times by 40% and memory usage by 30%, enhancing overall efficiency and user experience</li>
                </ul>
              </div>
              
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-[730px]"/>
              <div className="mb-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-800">Android Developer</h3>
                  <div className="text-teal-600 font-medium">Jul 2021 - Jun 2022</div>
                </div>
                <div className="text-lg font-medium text-blue-700 mb-4">IVISION INFOTECH  PVT. LTD., Ahmedabad</div>
                <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700">
                  <li>Assisted in Android application development using Java and XML layouts, contributing to feature implementation and optimization</li>
                  <li>Designed and implemented UI components following Material Design guidelines, ensuring a modern and user-friendly interface</li>
                  <li>Developed programs for modification and integration to ensure seamless compatibility with third-party software, enhancing system interoperability</li>
                  <li>Designed and built a robust application platform to support migration from client-server product lines to enterprise architectures and services</li>
                  <li>Created Android applications across diverse domains, including a Hospital App, 3D Wallpaper App, Visa Consultant App, and Online Medicine Delivery App, demonstrating adaptability and technical proficiency</li>
                </ul>
              </div>

              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-[1115px]"/>
              <div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-800">Intern & Junior Android Developer</h3>
                  <div className="text-teal-600 font-medium">Feb 2021 - May 2021</div>
                </div>
                <div className="text-lg font-medium text-blue-700 mb-4">WEBEARL TECHNOLOGIES PVT. LTD., Ahmedabad</div>
                <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700">
                  <li>I worked as intern in this company from June,2018 to April,2019, It was a great experience working as an intern in this company, I learned a lot about the android architecture and worked over some of the projects as an Android Developer</li>
                  <li>Designed and developed advanced applications for the Android platform, focusing on scalability and user experience</li>
                  <li>Focused on bug fixing and performance improvements to optimize application functionality</li>
                  <li> Performed thorough unit tests on the Android emulator to verify smooth, efficient operation across various devices and environments</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-12">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-950">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="FinTrack App" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">FinTrack - Personal Finance App</h3>
                <p className="text-gray-600 mb-4">A comprehensive personal finance tracking application with budgeting features, expense categorization, and financial insights.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Kotlin</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">MVVM</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Compose</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Room</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Hilt</span>
                </div>
                <div className="flex space-x-4">
                  <a href="https://github.com/alexmorgan/fintrack" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800">
                    <Github size={18} className="mr-1" />
                    <span>Repository</span>
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.alexmorgan.fintrack" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800">
                    <ExternalLink size={18} className="mr-1" />
                    <span>Play Store</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="FitSync App" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">FitSync - Fitness Tracking</h3>
                <p className="text-gray-600 mb-4">A fitness tracking application with workout plans, progress monitoring, and social features for connecting with fitness communities.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Kotlin</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Clean Architecture</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Coroutines</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Firebase</span>
                </div>
                <div className="flex space-x-4">
                  <a href="https://github.com/alexmorgan/fitsync" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800">
                    <Github size={18} className="mr-1" />
                    <span>Repository</span>
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.alexmorgan.fitsync" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800">
                    <ExternalLink size={18} className="mr-1" />
                    <span>Play Store</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="SecureChat App" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">SecureChat - Encrypted Messaging</h3>
                <p className="text-gray-600 mb-4">An end-to-end encrypted messaging application with focus on privacy and security, featuring self-destructing messages and biometric authentication.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Kotlin</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">MVVM</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">WebSockets</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Encryption</span>
                </div>
                <div className="flex space-x-4">
                  <a href="https://github.com/alexmorgan/securechat" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800">
                    <Github size={18} className="mr-1" />
                    <span>Repository</span>
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.alexmorgan.securechat" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800">
                    <ExternalLink size={18} className="mr-1" />
                    <span>Play Store</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="TravelBuddy App" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">TravelBuddy - Travel Companion</h3>
                <p className="text-gray-600 mb-4">A travel companion app with itinerary planning, offline maps, local recommendations, and travel journal features.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Kotlin</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Jetpack</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Maps API</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Room</span>
                </div>
                <div className="flex space-x-4">
                  <a href="https://github.com/alexmorgan/travelbuddy" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800">
                    <Github size={18} className="mr-1" />
                    <span>Repository</span>
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.alexmorgan.travelbuddy" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800">
                    <ExternalLink size={18} className="mr-1" />
                    <span>Play Store</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-black to-blue-950 text-white">
        <div className="container mx-auto px-12">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          
          <div className="max-w-3xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-950">Contact Me</h3>
              <p className="text-gray-600 mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <a href="mailto:ujashpatel169@gmail.com" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                  <Mail size={20} className="mr-3" />
                  <span>ujashpatel169@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/in/ujash-patel-758651120" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                  <Linkedin size={20} className="mr-3" />
                  <span>linkedin.com/in/ujashpatel</span>
                </a>
                <a href="https://github.com/patel0912" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                  <Github size={20} className="mr-3" />
                  <span>github.com/ujashpatel</span>
                </a>
              </div>
              
              <div className="mt-8">
                <a 
                  href="mailto:ujashpatel169@gmail.com" 
                  className="inline-block bg-gradient-to-r from-black to-blue-950 hover:bg-white text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  Send Me a Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-400">
        <div className="container mx-auto px-12 text-center">
          <p>© {new Date().getFullYear()} Ujash Patel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;