import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { MapPin, Star, DollarSign, Clock, MessageCircle, Heart, Share2 } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'

export default function FreelancerProfilePage() {
  const { id } = useParams()
  const [isFollowing, setIsFollowing] = useState(false)

  // Mock freelancer data - in real app, fetch based on id
  const freelancer = {
    id: 1,
    name: 'Sarah Johnson',
    title: 'Full Stack Developer',
    location: 'New York, USA',
    hourlyRate: 85,
    rating: 4.9,
    completedJobs: 127,
    totalEarned: '$250K+',
    responseTime: '1 hour',
    availability: 'Available now',
    memberSince: 'March 2019',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b9e0e4e0?w=150&h=150&fit=crop&crop=face',
    skills: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS', 'GraphQL', 'Python', 'Docker'],
    languages: [
      { name: 'English', level: 'Native' },
      { name: 'Spanish', level: 'Conversational' },
      { name: 'French', level: 'Basic' }
    ],
    overview: `I'm a passionate full-stack developer with over 8 years of experience building scalable web applications. I specialize in React, Node.js, and cloud technologies, helping businesses transform their ideas into robust digital solutions.

My expertise includes:
• Frontend development with React, TypeScript, and modern CSS frameworks
• Backend development with Node.js, Express, and RESTful APIs
• Database design and optimization (MongoDB, PostgreSQL)
• Cloud deployment and DevOps (AWS, Docker, CI/CD)
• Performance optimization and security best practices

I pride myself on delivering high-quality code, meeting deadlines, and maintaining clear communication throughout the project lifecycle. Let's work together to bring your vision to life!`,
    
    portfolio: [
      {
        id: 1,
        title: 'E-commerce Platform',
        description: 'Full-stack e-commerce solution with React and Node.js',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        url: 'https://example.com'
      },
      {
        id: 2,
        title: 'Task Management App',
        description: 'Collaborative project management tool with real-time updates',
        image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
        technologies: ['React', 'Socket.io', 'PostgreSQL'],
        url: 'https://example.com'
      },
      {
        id: 3,
        title: 'Analytics Dashboard',
        description: 'Data visualization dashboard for business intelligence',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
        technologies: ['React', 'D3.js', 'Python', 'AWS'],
        url: 'https://example.com'
      }
    ],

    reviews: [
      {
        id: 1,
        client: 'TechCorp Inc.',
        rating: 5,
        comment: 'Sarah delivered exceptional work on our e-commerce platform. Her attention to detail and technical expertise exceeded our expectations. Highly recommended!',
        project: 'E-commerce Platform Development',
        date: '2 weeks ago'
      },
      {
        id: 2,
        client: 'StartupXYZ',
        rating: 5,
        comment: 'Outstanding developer! Sarah completed the project ahead of schedule and the code quality was excellent. Great communication throughout.',
        project: 'React Dashboard Development',
        date: '1 month ago'
      },
      {
        id: 3,
        client: 'Digital Agency Co.',
        rating: 4,
        comment: 'Very professional and skilled developer. Sarah helped us optimize our application performance significantly.',
        project: 'Performance Optimization',
        date: '2 months ago'
      }
    ],

    workHistory: [
      {
        id: 1,
        title: 'Senior Full Stack Developer',
        client: 'TechCorp Inc.',
        duration: '6 months',
        budget: '$15,000',
        rating: 5,
        feedback: 'Excellent work on our e-commerce platform'
      },
      {
        id: 2,
        title: 'React Developer',
        client: 'StartupXYZ',
        duration: '3 months',
        budget: '$8,500',
        rating: 5,
        feedback: 'Great developer, delivered on time'
      },
      {
        id: 3,
        title: 'Performance Optimization',
        client: 'Digital Agency Co.',
        duration: '1 month',
        budget: '$3,200',
        rating: 4,
        feedback: 'Good technical skills'
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Header */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <Avatar className="w-32 h-32 mx-auto md:mx-0">
                    <AvatarImage src={freelancer.avatar} />
                    <AvatarFallback className="text-2xl">
                      {freelancer.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 text-center md:text-left">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{freelancer.name}</h1>
                    <p className="text-xl text-gray-600 mb-3">{freelancer.title}</p>
                    
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {freelancer.location}
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                        {freelancer.rating} ({freelancer.completedJobs} reviews)
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-1" />
                        ${freelancer.hourlyRate}/hr
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {freelancer.skills.slice(0, 6).map((skill) => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                      {freelancer.skills.length > 6 && (
                        <Badge variant="outline">+{freelancer.skills.length - 6} more</Badge>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                      <Button>
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Contact
                      </Button>
                      <Button variant="outline">
                        Hire Now
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => setIsFollowing(!isFollowing)}
                      >
                        <Heart className={`w-4 h-4 mr-2 ${isFollowing ? 'fill-red-500 text-red-500' : ''}`} />
                        {isFollowing ? 'Following' : 'Follow'}
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tabs */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="history">Work History</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose max-w-none">
                      <div className="whitespace-pre-line text-gray-700">{freelancer.overview}</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Skills</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {freelancer.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Languages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {freelancer.languages.map((language) => (
                        <div key={language.name} className="flex justify-between">
                          <span className="font-medium">{language.name}</span>
                          <span className="text-gray-600">{language.level}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="portfolio" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {freelancer.portfolio.map((project) => (
                    <Card key={project.id} className="overflow-hidden">
                      <div className="aspect-video">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                        <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <Button variant="outline" size="sm" className="w-full">
                          View Project
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6">
                {freelancer.reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold text-gray-900">{review.client}</h3>
                          <p className="text-sm text-gray-600">{review.project}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating
                                    ? 'fill-yellow-400 text-yellow-400'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{review.date}</p>
                        </div>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="history" className="space-y-6">
                {freelancer.workHistory.map((work) => (
                  <Card key={work.id}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold text-gray-900">{work.title}</h3>
                          <p className="text-sm text-gray-600">{work.client}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-primary">{work.budget}</p>
                          <p className="text-sm text-gray-600">{work.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < work.rating
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                        <span className="ml-2 text-sm text-gray-600">({work.rating}/5)</span>
                      </div>
                      <p className="text-gray-700 italic">"{work.feedback}"</p>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Earned:</span>
                  <span className="font-semibold">{freelancer.totalEarned}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Jobs Completed:</span>
                  <span className="font-semibold">{freelancer.completedJobs}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Response Time:</span>
                  <span className="font-semibold">{freelancer.responseTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Availability:</span>
                  <span className="font-semibold text-green-600">{freelancer.availability}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Member Since:</span>
                  <span className="font-semibold">{freelancer.memberSince}</span>
                </div>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
                <Button variant="outline" className="w-full">
                  Hire {freelancer.name.split(' ')[0]}
                </Button>
                <p className="text-sm text-gray-600 text-center">
                  Response time: {freelancer.responseTime}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}