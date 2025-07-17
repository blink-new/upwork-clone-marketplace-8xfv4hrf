import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { MapPin, Clock, DollarSign, Star, Users, ArrowLeft, Send } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Textarea } from '../components/ui/textarea'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'

export default function JobDetailsPage() {
  const { id } = useParams()
  const [proposalText, setProposalText] = useState('')
  const [proposalBudget, setProposalBudget] = useState('')
  const [proposalTimeline, setProposalTimeline] = useState('')

  // Mock job data - in real app, fetch based on id
  const job = {
    id: 1,
    title: 'Senior React Developer for E-commerce Platform',
    company: 'TechCorp Inc.',
    location: 'Remote',
    budget: '$5,000 - $8,000',
    duration: '3-6 months',
    skills: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'AWS', 'GraphQL'],
    description: `We are looking for an experienced React developer to help build our new e-commerce platform. You will work with our team to create a modern, responsive web application that can handle high traffic and provide an excellent user experience.

Key Responsibilities:
• Develop and maintain React components and applications
• Collaborate with the design team to implement UI/UX designs
• Optimize applications for maximum speed and scalability
• Write clean, maintainable, and well-documented code
• Participate in code reviews and team meetings
• Work with backend developers to integrate APIs

Requirements:
• 5+ years of experience with React and JavaScript
• Strong knowledge of TypeScript
• Experience with Node.js and Express
• Familiarity with MongoDB and database design
• Knowledge of AWS services and deployment
• Experience with GraphQL is a plus
• Strong problem-solving skills and attention to detail`,
    posted: '2 hours ago',
    proposals: 12,
    clientRating: 4.8,
    clientSpent: '$50K+',
    paymentVerified: true,
    clientInfo: {
      name: 'TechCorp Inc.',
      memberSince: '2019',
      totalSpent: '$250K+',
      jobsPosted: 45,
      hireRate: '85%',
      location: 'San Francisco, CA'
    }
  }

  const similarJobs = [
    {
      id: 2,
      title: 'Frontend Developer for SaaS Platform',
      budget: '$4,000 - $6,000',
      skills: ['React', 'TypeScript', 'CSS']
    },
    {
      id: 3,
      title: 'Full Stack Developer for Startup',
      budget: '$6,000 - $10,000',
      skills: ['React', 'Node.js', 'PostgreSQL']
    }
  ]

  const handleSubmitProposal = () => {
    // Handle proposal submission
    console.log('Submitting proposal:', {
      jobId: id,
      text: proposalText,
      budget: proposalBudget,
      timeline: proposalTimeline
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6" asChild>
          <Link to="/find-work">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Jobs
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Header */}
            <Card>
              <CardContent className="p-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">{job.title}</h1>
                
                <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {job.posted}
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-1" />
                    {job.budget}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {job.proposals} proposals
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {job.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>

                <div className="prose max-w-none">
                  <div className="whitespace-pre-line text-gray-700">{job.description}</div>
                </div>
              </CardContent>
            </Card>

            {/* Submit Proposal */}
            <Card>
              <CardHeader>
                <CardTitle>Submit a Proposal</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="proposal">Cover Letter</Label>
                  <Textarea
                    id="proposal"
                    placeholder="Describe your approach to this project..."
                    value={proposalText}
                    onChange={(e) => setProposalText(e.target.value)}
                    rows={6}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="budget">Your Budget</Label>
                    <Input
                      id="budget"
                      placeholder="$5,000"
                      value={proposalBudget}
                      onChange={(e) => setProposalBudget(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="timeline">Timeline</Label>
                    <Input
                      id="timeline"
                      placeholder="4 weeks"
                      value={proposalTimeline}
                      onChange={(e) => setProposalTimeline(e.target.value)}
                    />
                  </div>
                </div>

                <Button onClick={handleSubmitProposal} className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Submit Proposal
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Client Information */}
            <Card>
              <CardHeader>
                <CardTitle>About the Client</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">{job.clientInfo.name}</h3>
                  <div className="flex items-center mt-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="font-medium">{job.clientRating}</span>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Member since:</span>
                    <span className="font-medium">{job.clientInfo.memberSince}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total spent:</span>
                    <span className="font-medium">{job.clientInfo.totalSpent}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Jobs posted:</span>
                    <span className="font-medium">{job.clientInfo.jobsPosted}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Hire rate:</span>
                    <span className="font-medium">{job.clientInfo.hireRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium">{job.clientInfo.location}</span>
                  </div>
                </div>

                {job.paymentVerified && (
                  <Badge className="bg-green-100 text-green-800 border-green-200">
                    Payment Verified
                  </Badge>
                )}
              </CardContent>
            </Card>

            {/* Job Details */}
            <Card>
              <CardHeader>
                <CardTitle>Job Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Budget:</span>
                  <span className="font-medium">{job.budget}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">{job.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Proposals:</span>
                  <span className="font-medium">{job.proposals}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Posted:</span>
                  <span className="font-medium">{job.posted}</span>
                </div>
              </CardContent>
            </Card>

            {/* Similar Jobs */}
            <Card>
              <CardHeader>
                <CardTitle>Similar Jobs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {similarJobs.map((similarJob) => (
                  <div key={similarJob.id} className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0">
                    <Link to={`/job/${similarJob.id}`} className="hover:text-primary">
                      <h4 className="font-medium text-sm mb-2">{similarJob.title}</h4>
                    </Link>
                    <p className="text-sm text-gray-600 mb-2">{similarJob.budget}</p>
                    <div className="flex flex-wrap gap-1">
                      {similarJob.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}