import { Calendar, Clock, MapPin, Trophy } from "lucide-react"

export default function Timeline() {
  const timelineEvents = [
    {
      date: "March 15, 2025",
      time: "9:00 AM",
      title: "Registration & Check-in",
      description: "Welcome breakfast, team formation, and event kickoff",
      icon: <Calendar className="w-6 h-6" />,
      color: "bg-blue-500",
    },
    {
      date: "March 15, 2025",
      time: "10:00 AM",
      title: "Opening Ceremony",
      description: "Keynote speakers, track introductions, and rules overview",
      icon: <Clock className="w-6 h-6" />,
      color: "bg-purple-500",
    },
    {
      date: "March 15, 2025",
      time: "11:00 AM",
      title: "Hacking Begins!",
      description: "48 hours of non-stop coding and innovation starts now",
      icon: <MapPin className="w-6 h-6" />,
      color: "bg-green-500",
    },
    {
      date: "March 16, 2025",
      time: "12:00 PM",
      title: "Mentor Check-ins",
      description: "Mid-hackathon mentorship sessions and progress reviews",
      icon: <Clock className="w-6 h-6" />,
      color: "bg-orange-500",
    },
    {
      date: "March 17, 2025",
      time: "10:00 AM",
      title: "Submission Deadline",
      description: "Final submissions and project demonstrations",
      icon: <Trophy className="w-6 h-6" />,
      color: "bg-red-500",
    },
    {
      date: "March 17, 2025",
      time: "2:00 PM",
      title: "Judging & Awards",
      description: "Project presentations, judging, and award ceremony",
      icon: <Trophy className="w-6 h-6" />,
      color: "bg-yellow-500",
    },
  ]

  const rules = [
    "Teams can have 2-4 members maximum",
    "All code must be written during the hackathon",
    "Open source libraries and APIs are allowed",
    "Projects must be submitted by the deadline",
    "All team members must be present for judging",
    "Respect the code of conduct at all times",
  ]

  return (
    <section id="timeline" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Timeline & Rules</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here's everything you need to know about the event schedule and competition rules.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Event Timeline</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>

              <div className="space-y-8">
                {timelineEvents.map((event, index) => (
                  <div key={index} className="relative flex items-start">
                    {/* Timeline dot */}
                    <div
                      className={`${event.color} w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg z-10`}
                    >
                      {event.icon}
                    </div>

                    {/* Event content */}
                    <div className="ml-6 flex-1">
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{event.title}</h4>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {event.date} • {event.time}
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Rules */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Competition Rules</h3>
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-8">
              <ul className="space-y-4">
                {rules.map((rule, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{rule}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🏆 Prizes Worth $50,000+</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-yellow-600 dark:text-yellow-400">1st Place</div>
                    <div className="text-gray-600 dark:text-gray-300">$15,000</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-600 dark:text-gray-400">2nd Place</div>
                    <div className="text-gray-600 dark:text-gray-300">$10,000</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-orange-600 dark:text-orange-400">3rd Place</div>
                    <div className="text-gray-600 dark:text-gray-300">$5,000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
