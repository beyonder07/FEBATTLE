import { Code, Lightbulb, Trophy, Users } from "lucide-react"
import Image from "next/image"

export default function About() {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "48 Hours of Coding",
      description: "Non-stop innovation and development in an intensive weekend format.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Creative Solutions",
      description: "Tackle real-world problems with cutting-edge technology and creative thinking.",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Amazing Prizes",
      description: "Win cash prizes, internships, and exclusive tech gadgets worth $50,000+.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Networking",
      description: "Connect with industry experts, mentors, and like-minded developers.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About FrontEnd Battle 2025</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            FrontEnd Battle 2025 is more than just a hackathon—it's a launchpad for the next generation of tech innovators.
            Join us for 48 hours of intense coding, creative problem-solving, and endless possibilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-purple-600 dark:text-purple-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Why Participate?</h3>
            <ul className="space-y-4">
              {[
                "Learn from industry experts and experienced mentors",
                "Build innovative solutions to real-world challenges",
                "Network with top tech companies and startups",
                "Showcase your skills to potential employers",
                "Win amazing prizes and recognition",
                "Be part of a vibrant tech community",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            {/* About image from gallery */}
            <div className="aspect-square bg-gradient-to-br from-purple-400 to-blue-500 rounded-2xl flex items-center justify-center overflow-hidden">
              <Image
                src="/gallery/446335784_1137296877388359_3286871903558315538_n.jpg"
                alt="About FrontEnd Battle"
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
