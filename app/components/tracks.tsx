import { Brain, Globe, Shield, Smartphone, Zap, Heart } from "lucide-react"

export default function Tracks() {
  const tracks = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI & Machine Learning",
      description:
        "Build intelligent applications using cutting-edge AI technologies, neural networks, and machine learning algorithms.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Web3 & Blockchain",
      description:
        "Create decentralized applications, smart contracts, and explore the future of digital finance and ownership.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Cybersecurity",
      description:
        "Develop security solutions, ethical hacking tools, and protect digital infrastructure from emerging threats.",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile Innovation",
      description:
        "Design and build next-generation mobile applications for iOS, Android, and cross-platform solutions.",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "IoT & Hardware",
      description: "Connect the physical and digital worlds with Internet of Things devices and embedded systems.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Social Impact",
      description:
        "Create technology solutions that address social challenges and make a positive impact on communities.",
      color: "from-pink-500 to-rose-500",
    },
  ]

  return (
    <section id="tracks" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Hackathon Tracks</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose your path and compete in one of our exciting tracks. Each track offers unique challenges and
            opportunities to showcase your skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${track.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
              ></div>

              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${track.color} text-white mb-6`}>
                {track.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{track.title}</h3>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{track.description}</p>

              <div className="mt-6 flex items-center text-sm font-medium">
                <span className={`bg-gradient-to-r ${track.color} bg-clip-text text-transparent`}>Learn More →</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Can't Decide on a Track?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              No worries! You can work on projects that span multiple tracks or create something entirely unique. The
              most important thing is to build something amazing.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-md">
                Cross-track projects welcome
              </span>
              <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-md">
                Mentors available for all tracks
              </span>
              <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-md">
                Special prizes for innovation
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
