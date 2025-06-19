"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { User, Mail, GraduationCap, Code } from "lucide-react"

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    university: "",
    major: "",
    experience: "",
    track: "",
    teamName: "",
    teamMembers: "",
    dietaryRestrictions: "",
    agreeToTerms: false,
    agreeToEmails: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Registration submitted! We'll be in touch soon.")
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section
      id="register"
      className="py-20 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Register for FrontEnd Battle 2025</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to join the ultimate frontend battle experience? Fill out the form below to secure your spot!
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <User className="w-5 h-5" />
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    First Name *
                  </label>
                  <Input
                    required
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name *</label>
                  <Input
                    required
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
            </div>

            {/* Academic Information */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                Academic Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    University/Institution *
                  </label>
                  <Input
                    required
                    value={formData.university}
                    onChange={(e) => handleInputChange("university", e.target.value)}
                    placeholder="Your university name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Major/Field of Study
                  </label>
                  <Input
                    value={formData.major}
                    onChange={(e) => handleInputChange("major", e.target.value)}
                    placeholder="Computer Science, Engineering, etc."
                  />
                </div>
              </div>
            </div>

            {/* Hackathon Information */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Code className="w-5 h-5" />
                Hackathon Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Experience Level *
                  </label>
                  <Select onValueChange={(value) => handleInputChange("experience", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                      <SelectItem value="intermediate">Intermediate (2-3 years)</SelectItem>
                      <SelectItem value="advanced">Advanced (4+ years)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Preferred Track
                  </label>
                  <Select onValueChange={(value) => handleInputChange("track", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a track" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ai-ml">AI & Machine Learning</SelectItem>
                      <SelectItem value="web3">Web3 & Blockchain</SelectItem>
                      <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                      <SelectItem value="mobile">Mobile Innovation</SelectItem>
                      <SelectItem value="iot">IoT & Hardware</SelectItem>
                      <SelectItem value="social">Social Impact</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Team Information */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Team Name (if you have one)
                  </label>
                  <Input
                    value={formData.teamName}
                    onChange={(e) => handleInputChange("teamName", e.target.value)}
                    placeholder="Your awesome team name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Dietary Restrictions
                  </label>
                  <Input
                    value={formData.dietaryRestrictions}
                    onChange={(e) => handleInputChange("dietaryRestrictions", e.target.value)}
                    placeholder="Vegetarian, Vegan, Allergies, etc."
                  />
                </div>
              </div>
            </div>

            {/* Team Members */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Team Members (if you have teammates, list their emails)
              </label>
              <Textarea
                value={formData.teamMembers}
                onChange={(e) => handleInputChange("teamMembers", e.target.value)}
                placeholder="teammate1@email.com, teammate2@email.com"
                rows={3}
              />
            </div>

            {/* Agreements */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="terms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                />
                <label htmlFor="terms" className="text-sm text-gray-700 dark:text-gray-300">
                  I agree to the{" "}
                  <a href="#" className="text-purple-600 hover:text-purple-800 underline">
                    Terms and Conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-purple-600 hover:text-purple-800 underline">
                    Code of Conduct
                  </a>
                  *
                </label>
              </div>
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="emails"
                  checked={formData.agreeToEmails}
                  onCheckedChange={(checked) => handleInputChange("agreeToEmails", checked as boolean)}
                />
                <label htmlFor="emails" className="text-sm text-gray-700 dark:text-gray-300">
                  I would like to receive updates about future hackathons and events
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <Button
                type="submit"
                disabled={!formData.agreeToTerms}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                Register for FrontEnd Battle 2025
              </Button>
            </div>
          </form>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            Questions about registration?{" "}
            <a href="mailto:hello@frontendbattle.com" className="text-purple-600 hover:text-purple-800 underline">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
