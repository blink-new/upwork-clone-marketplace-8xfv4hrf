import { Link } from 'react-router-dom'
import { Search, Star, Users, Briefcase, TrendingUp, ArrowRight } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'

export default function HomePage() {
  const categories = [
    { name: 'Web Development', jobs: 1234, icon: '💻' },
    { name: 'Mobile Development', jobs: 856, icon: '📱' },
    { name: 'Design & Creative', jobs: 967, icon: '🎨' },
    { name: 'Writing & Translation', jobs: 543, icon: '✍️' },
    { name: 'Marketing & Sales', jobs: 789, icon: '📈' },
    { name: 'Data Science', jobs: 432, icon: '📊' },
  ]

  const featuredJobs = [
    {
      id: 1,
      title: 'Senior React Developer',
      company: 'TechCorp Inc.',
      budget: '$5,000 - $8,000',
      duration: '3-6 months',
      skills: ['React', 'TypeScript', 'Node.js'],
      posted: '2 hours ago',
      proposals: 12
    },
    {
      id: 2,
      title: 'UI/UX Designer for Mobile App',
      company: 'StartupXYZ',
      budget: '$3,000 - $5,000',
      duration: '1-3 months',
      skills: ['Figma', 'UI Design', 'Mobile Design'],
      posted: '5 hours ago',
      proposals: 8
    },
    {
      id: 3,
      title: 'Content Writer for Blog',
      company: 'ContentCo',
      budget: '$1,500 - $2,500',
      duration: '1-2 months',
      skills: ['Content Writing', 'SEO', 'Research'],
      posted: '1 day ago',
      proposals: 15
    }
  ]

  const topFreelancers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Full Stack Developer',
      rating: 4.9,
      hourlyRate: '$85',
      completedJobs: 127,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b9e0e4e0?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'UI/UX Designer',
      rating: 4.8,
      hourlyRate: '$65',
      completedJobs: 89,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      title: 'Content Strategist',
      rating: 4.9,
      hourlyRate: '$55',
      completedJobs: 156,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-white to-accent/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Find the perfect <span className="text-primary">freelance</span> services for your business
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Connect with talented freelancers from around the world. Get your projects done faster, better, and more affordably.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Search for any service..."
                    className="pl-12 pr-4 py-4 text-lg"
                  />
                </div>
                <Button size="lg" className="px-8">
                  Search
                </Button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/find-work">
                  <Briefcase className="w-5 h-5 mr-2" />
                  Find Work
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/find-talent">
                  <Users className="w-5 h-5 mr-2" />
                  Hire Talent
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-gray-600">Active Freelancers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">25K+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-lg text-gray-600">Find the perfect freelancer for your project</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Card key={category.name} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{category.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{category.name}</h3>
                      <p className="text-sm text-gray-600">{category.jobs.toLocaleString()} jobs available</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Jobs</h2>
              <p className="text-lg text-gray-600">Hand-picked opportunities for you</p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/find-work">
                View All Jobs
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{job.title}</CardTitle>
                  <p className="text-sm text-gray-600">{job.company}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Budget:</span>
                      <span className="font-medium">{job.budget}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium">{job.duration}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{job.posted}</span>
                      <span>{job.proposals} proposals</span>
                    </div>
                    <Button className="w-full" asChild>
                      <Link to={`/job/${job.id}`}>View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Freelancers Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Top Freelancers</h2>
              <p className="text-lg text-gray-600">Work with the best talent</p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/find-talent">
                View All Freelancers
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topFreelancers.map((freelancer) => (
              <Card key={freelancer.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <img
                    src={freelancer.avatar}
                    alt={freelancer.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">{freelancer.name}</h3>
                  <p className="text-gray-600 mb-3">{freelancer.title}</p>
                  <div className="flex items-center justify-center space-x-1 mb-3">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{freelancer.rating}</span>
                    <span className="text-gray-600">({freelancer.completedJobs} jobs)</span>
                  </div>
                  <p className="text-lg font-semibold text-primary mb-4">{freelancer.hourlyRate}/hr</p>
                  <Button className="w-full" asChild>
                    <Link to={`/freelancer/${freelancer.id}`}>View Profile</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses and freelancers who trust FreelanceHub for their projects
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/find-work">Start as Freelancer</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/find-talent">Hire Talent</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}