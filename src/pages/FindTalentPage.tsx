import { useState } from 'react'
import { Search, Filter, MapPin, Star, DollarSign } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Card, CardContent } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { Link } from 'react-router-dom'

export default function FindTalentPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const freelancers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Full Stack Developer',
      location: 'New York, USA',
      hourlyRate: 85,
      rating: 4.9,
      completedJobs: 127,
      totalEarned: '$250K+',
      skills: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS'],
      description: 'Experienced full-stack developer with 8+ years of experience building scalable web applications. Specialized in React, Node.js, and cloud technologies.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b9e0e4e0?w=150&h=150&fit=crop&crop=face',
      availability: 'Available now',
      responseTime: '1 hour'
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'UI/UX Designer',
      location: 'San Francisco, USA',
      hourlyRate: 65,
      rating: 4.8,
      completedJobs: 89,
      totalEarned: '$180K+',
      skills: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'User Research'],
      description: 'Creative UI/UX designer passionate about creating intuitive and beautiful user experiences. 6+ years of experience in product design.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      availability: 'Available in 1 week',
      responseTime: '2 hours'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      title: 'Content Strategist',
      location: 'Austin, USA',
      hourlyRate: 55,
      rating: 4.9,
      completedJobs: 156,
      totalEarned: '$120K+',
      skills: ['Content Strategy', 'SEO', 'Copywriting', 'Social Media', 'Analytics'],
      description: 'Strategic content creator with expertise in SEO and digital marketing. Helped 100+ businesses improve their online presence.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      availability: 'Available now',
      responseTime: '30 minutes'
    },
    {
      id: 4,
      name: 'David Kim',
      title: 'Data Scientist',
      location: 'Seattle, USA',
      hourlyRate: 95,
      rating: 4.7,
      completedJobs: 73,
      totalEarned: '$200K+',
      skills: ['Python', 'Machine Learning', 'TensorFlow', 'SQL', 'Data Visualization'],
      description: 'Data scientist with PhD in Computer Science. Specialized in machine learning, predictive analytics, and big data processing.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      availability: 'Available in 2 weeks',
      responseTime: '4 hours'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      title: 'Mobile App Developer',
      location: 'Toronto, Canada',
      hourlyRate: 75,
      rating: 4.8,
      completedJobs: 94,
      totalEarned: '$160K+',
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase'],
      description: 'Mobile app developer with 7+ years of experience. Built 50+ mobile applications for startups and enterprises.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      availability: 'Available now',
      responseTime: '1 hour'
    },
    {
      id: 6,
      name: 'James Wilson',
      title: 'DevOps Engineer',
      location: 'London, UK',
      hourlyRate: 80,
      rating: 4.6,
      completedJobs: 61,
      totalEarned: '$140K+',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
      description: 'DevOps engineer specializing in cloud infrastructure and automation. Helped companies scale their applications efficiently.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      availability: 'Available in 1 week',
      responseTime: '3 hours'
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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Find Talent</h1>
          <p className="text-lg text-gray-600">Discover skilled freelancers for your projects</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search for freelancers..."
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
            <Select>
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

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Hourly Rate" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-25">$0 - $25/hr</SelectItem>
                <SelectItem value="25-50">$25 - $50/hr</SelectItem>
                <SelectItem value="50-75">$50 - $75/hr</SelectItem>
                <SelectItem value="75-100">$75 - $100/hr</SelectItem>
                <SelectItem value="100+">$100+/hr</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Experience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="entry">Entry Level</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="expert">Expert</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">{freelancers.length} freelancers found</p>
          <Select defaultValue="rating">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="rate-low">Lowest Rate</SelectItem>
              <SelectItem value="rate-high">Highest Rate</SelectItem>
              <SelectItem value="recent">Most Recent</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Freelancer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {freelancers.map((freelancer) => (
            <Card key={freelancer.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <img
                    src={freelancer.avatar}
                    alt={freelancer.name}
                    className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                  />
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">{freelancer.name}</h3>
                  <p className="text-gray-600 mb-2">{freelancer.title}</p>
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{freelancer.rating}</span>
                    <span className="text-gray-600">({freelancer.completedJobs} jobs)</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-600 text-sm mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    {freelancer.location}
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Hourly Rate:</span>
                    <span className="font-semibold text-primary">${freelancer.hourlyRate}/hr</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Total Earned:</span>
                    <span className="font-medium">{freelancer.totalEarned}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Availability:</span>
                    <span className="font-medium text-green-600">{freelancer.availability}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Response Time:</span>
                    <span className="font-medium">{freelancer.responseTime}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4 line-clamp-3">{freelancer.description}</p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {freelancer.skills.slice(0, 3).map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {freelancer.skills.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{freelancer.skills.length - 3} more
                    </Badge>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1" asChild>
                    <Link to={`/freelancer/${freelancer.id}`}>View Profile</Link>
                  </Button>
                  <Button variant="outline" size="sm">
                    Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            Load More Freelancers
          </Button>
        </div>
      </div>
    </div>
  )
}