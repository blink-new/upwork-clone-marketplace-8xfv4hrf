import { useState } from 'react'
import { Search, Filter, MapPin, Clock, DollarSign, Star } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { Checkbox } from '../components/ui/checkbox'
import { Link } from 'react-router-dom'

export default function FindWorkPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedBudget, setSelectedBudget] = useState('')
  const [selectedDuration, setSelectedDuration] = useState('')

  const jobs = [
    {
      id: 1,
      title: 'Senior React Developer for E-commerce Platform',
      company: 'TechCorp Inc.',
      location: 'Remote',
      budget: '$5,000 - $8,000',
      duration: '3-6 months',
      skills: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
      description: 'We are looking for an experienced React developer to help build our new e-commerce platform. You will work with our team to create a modern, responsive web application.',
      posted: '2 hours ago',
      proposals: 12,
      clientRating: 4.8,
      clientSpent: '$50K+',
      paymentVerified: true
    },
    {
      id: 2,
      title: 'UI/UX Designer for Mobile App Redesign',
      company: 'StartupXYZ',
      location: 'Remote',
      budget: '$3,000 - $5,000',
      duration: '1-3 months',
      skills: ['Figma', 'UI Design', 'Mobile Design', 'Prototyping'],
      description: 'Looking for a talented UI/UX designer to redesign our mobile application. The project involves creating wireframes, mockups, and interactive prototypes.',
      posted: '5 hours ago',
      proposals: 8,
      clientRating: 4.6,
      clientSpent: '$25K+',
      paymentVerified: true
    },
    {
      id: 3,
      title: 'Content Writer for Tech Blog',
      company: 'ContentCo',
      location: 'Remote',
      budget: '$1,500 - $2,500',
      duration: '1-2 months',
      skills: ['Content Writing', 'SEO', 'Research', 'Technical Writing'],
      description: 'We need a skilled content writer to create engaging blog posts about technology trends, software development, and digital marketing.',
      posted: '1 day ago',
      proposals: 15,
      clientRating: 4.9,
      clientSpent: '$15K+',
      paymentVerified: true
    },
    {
      id: 4,
      title: 'Python Developer for Data Analysis Tool',
      company: 'DataTech Solutions',
      location: 'Remote',
      budget: '$4,000 - $6,000',
      duration: '2-4 months',
      skills: ['Python', 'Pandas', 'NumPy', 'Data Visualization'],
      description: 'Seeking a Python developer to build a data analysis tool that can process large datasets and generate insightful reports.',
      posted: '2 days ago',
      proposals: 6,
      clientRating: 4.7,
      clientSpent: '$30K+',
      paymentVerified: true
    },
    {
      id: 5,
      title: 'WordPress Developer for Business Website',
      company: 'Local Business Co.',
      location: 'Remote',
      budget: '$2,000 - $3,500',
      duration: '1 month',
      skills: ['WordPress', 'PHP', 'CSS', 'JavaScript'],
      description: 'Need a WordPress developer to create a professional business website with custom theme and functionality.',
      posted: '3 days ago',
      proposals: 22,
      clientRating: 4.5,
      clientSpent: '$10K+',
      paymentVerified: false
    }
  ]

  const categories = [
    'Web Development',
    'Mobile Development',
    'Design & Creative',
    'Writing & Translation',
    'Marketing & Sales',
    'Data Science',
    'DevOps & Cloud',
    'AI & Machine Learning'
  ]

  const budgetRanges = [
    'Under $1,000',
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000+'
  ]

  const durations = [
    'Less than 1 month',
    '1-3 months',
    '3-6 months',
    '6+ months'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Find Work</h1>
          <p className="text-lg text-gray-600">Discover opportunities that match your skills</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search for jobs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Button>
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedBudget} onValueChange={setSelectedBudget}>
              <SelectTrigger>
                <SelectValue placeholder="Budget" />
              </SelectTrigger>
              <SelectContent>
                {budgetRanges.map((range) => (
                  <SelectItem key={range} value={range}>
                    {range}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedDuration} onValueChange={setSelectedDuration}>
              <SelectTrigger>
                <SelectValue placeholder="Duration" />
              </SelectTrigger>
              <SelectContent>
                {durations.map((duration) => (
                  <SelectItem key={duration} value={duration}>
                    {duration}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <div className="hidden lg:block w-64 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Job Type</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="fixed-price" />
                  <label htmlFor="fixed-price" className="text-sm">Fixed Price</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="hourly" />
                  <label htmlFor="hourly" className="text-sm">Hourly</label>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Experience Level</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="entry-level" />
                  <label htmlFor="entry-level" className="text-sm">Entry Level</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="intermediate" />
                  <label htmlFor="intermediate" className="text-sm">Intermediate</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="expert" />
                  <label htmlFor="expert" className="text-sm">Expert</label>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Client History</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="payment-verified" />
                  <label htmlFor="payment-verified" className="text-sm">Payment Verified</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="high-rating" />
                  <label htmlFor="high-rating" className="text-sm">High Rating (4.5+)</label>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Job Listings */}
          <div className="flex-1 space-y-6">
            <div className="flex justify-between items-center">
              <p className="text-gray-600">{jobs.length} jobs found</p>
              <Select defaultValue="newest">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="budget-high">Highest Budget</SelectItem>
                  <SelectItem value="budget-low">Lowest Budget</SelectItem>
                  <SelectItem value="proposals">Fewest Proposals</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {jobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <Link to={`/job/${job.id}`} className="hover:text-primary">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                      </Link>
                      <p className="text-gray-600 mb-3">{job.description}</p>
                    </div>
                    <div className="text-right ml-4">
                      <p className="text-lg font-semibold text-primary">{job.budget}</p>
                      <p className="text-sm text-gray-600">{job.duration}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {job.posted}
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                        {job.clientRating}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {job.paymentVerified && (
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          Payment Verified
                        </Badge>
                      )}
                      <span>{job.proposals} proposals</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">{job.company}</span> • {job.clientSpent} spent
                    </div>
                    <Button asChild>
                      <Link to={`/job/${job.id}`}>Apply Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Load More */}
            <div className="text-center">
              <Button variant="outline" size="lg">
                Load More Jobs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}