import { TrendingUp, DollarSign, Briefcase, Star, Clock, MessageCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { Link } from 'react-router-dom'

export default function DashboardPage() {
  const stats = {
    totalEarnings: '$12,450',
    activeProjects: 3,
    completedJobs: 27,
    averageRating: 4.8
  }

  const activeProjects = [
    {
      id: 1,
      title: 'E-commerce Platform Development',
      client: 'TechCorp Inc.',
      budget: '$5,000',
      progress: 75,
      deadline: '2024-02-15',
      status: 'In Progress'
    },
    {
      id: 2,
      title: 'Mobile App UI Design',
      client: 'StartupXYZ',
      budget: '$3,000',
      progress: 45,
      deadline: '2024-02-20',
      status: 'In Progress'
    },
    {
      id: 3,
      title: 'Content Writing Project',
      client: 'ContentCo',
      budget: '$1,500',
      progress: 90,
      deadline: '2024-02-10',
      status: 'Review'
    }
  ]

  const recentMessages = [
    {
      id: 1,
      client: 'TechCorp Inc.',
      message: 'Great progress on the project! Can we schedule a call?',
      time: '2 hours ago',
      unread: true
    },
    {
      id: 2,
      client: 'StartupXYZ',
      message: 'The designs look amazing. Just a few minor changes needed.',
      time: '5 hours ago',
      unread: true
    },
    {
      id: 3,
      client: 'ContentCo',
      message: 'Thanks for the quick turnaround on the articles.',
      time: '1 day ago',
      unread: false
    }
  ]

  const recentProposals = [
    {
      id: 1,
      title: 'React Developer for SaaS Platform',
      submittedAt: '2 days ago',
      status: 'Pending',
      budget: '$4,000'
    },
    {
      id: 2,
      title: 'Full Stack Developer for Startup',
      submittedAt: '3 days ago',
      status: 'Shortlisted',
      budget: '$6,000'
    },
    {
      id: 3,
      title: 'Frontend Developer Position',
      submittedAt: '5 days ago',
      status: 'Declined',
      budget: '$3,500'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Progress':
        return 'bg-blue-100 text-blue-800'
      case 'Review':
        return 'bg-yellow-100 text-yellow-800'
      case 'Pending':
        return 'bg-gray-100 text-gray-800'
      case 'Shortlisted':
        return 'bg-green-100 text-green-800'
      case 'Declined':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Dashboard</h1>
          <p className="text-lg text-gray-600">Welcome back! Here's what's happening with your projects.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Earnings</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalEarnings}</p>
                </div>
                <div className="p-3 bg-primary/10 rounded-full">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="flex items-center mt-4 text-sm">
                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-green-500">+12%</span>
                <span className="text-gray-600 ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Projects</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.activeProjects}</p>
                </div>
                <div className="p-3 bg-blue-100 rounded-full">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="flex items-center mt-4 text-sm">
                <Clock className="w-4 h-4 text-blue-500 mr-1" />
                <span className="text-gray-600">2 due this week</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Completed Jobs</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.completedJobs}</p>
                </div>
                <div className="p-3 bg-green-100 rounded-full">
                  <Briefcase className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <div className="flex items-center mt-4 text-sm">
                <span className="text-green-500">+3</span>
                <span className="text-gray-600 ml-1">this month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Average Rating</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.averageRating}</p>
                </div>
                <div className="p-3 bg-yellow-100 rounded-full">
                  <Star className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
              <div className="flex items-center mt-4 text-sm">
                <Star className="w-4 h-4 text-yellow-500 mr-1 fill-current" />
                <span className="text-gray-600">Based on 27 reviews</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Active Projects */}
          <div className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Active Projects</CardTitle>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/find-work">Find More Work</Link>
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {activeProjects.map((project) => (
                  <div key={project.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900">{project.title}</h3>
                        <p className="text-sm text-gray-600">{project.client}</p>
                      </div>
                      <Badge className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                    </div>
                    
                    <div className="flex justify-between text-sm text-gray-600 mb-3">
                      <span>Budget: {project.budget}</span>
                      <span>Due: {project.deadline}</span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full" 
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{project.progress}% complete</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Proposals */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Recent Proposals</CardTitle>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/proposals">View All</Link>
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentProposals.map((proposal) => (
                  <div key={proposal.id} className="flex justify-between items-center py-3 border-b last:border-b-0">
                    <div>
                      <h4 className="font-medium text-gray-900">{proposal.title}</h4>
                      <p className="text-sm text-gray-600">{proposal.submittedAt} • {proposal.budget}</p>
                    </div>
                    <Badge className={getStatusColor(proposal.status)}>
                      {proposal.status}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Messages and Activity */}
          <div className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Recent Messages</CardTitle>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/messages">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    View All
                  </Link>
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentMessages.map((message) => (
                  <div key={message.id} className="flex items-start space-x-3 py-3 border-b last:border-b-0">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-medium text-sm">
                        {message.client.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-gray-900">{message.client}</p>
                        <div className="flex items-center space-x-2">
                          {message.unread && (
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                          )}
                          <span className="text-sm text-gray-600">{message.time}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 truncate">{message.message}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" asChild>
                  <Link to="/find-work">
                    <Briefcase className="w-4 h-4 mr-2" />
                    Browse New Jobs
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/proposals">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    View Proposals
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/settings">
                    <Star className="w-4 h-4 mr-2" />
                    Update Profile
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}