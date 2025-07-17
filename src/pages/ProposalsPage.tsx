import { useState } from 'react'
import { Eye, Edit, Trash2, Clock, DollarSign, MessageCircle } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { Link } from 'react-router-dom'

export default function ProposalsPage() {
  const [activeTab, setActiveTab] = useState('all')

  const proposals = [
    {
      id: 1,
      jobTitle: 'Senior React Developer for E-commerce Platform',
      client: 'TechCorp Inc.',
      submittedAt: '2024-01-15',
      status: 'Pending',
      budget: '$5,000',
      timeline: '4 weeks',
      coverLetter: 'I am excited to work on your e-commerce platform. With over 8 years of experience in React development...',
      clientViewed: true,
      clientRating: 4.8
    },
    {
      id: 2,
      jobTitle: 'UI/UX Designer for Mobile App Redesign',
      client: 'StartupXYZ',
      submittedAt: '2024-01-14',
      status: 'Shortlisted',
      budget: '$3,500',
      timeline: '3 weeks',
      coverLetter: 'Your mobile app redesign project caught my attention. I specialize in creating intuitive user experiences...',
      clientViewed: true,
      clientRating: 4.6
    },
    {
      id: 3,
      jobTitle: 'Content Writer for Tech Blog',
      client: 'ContentCo',
      submittedAt: '2024-01-13',
      status: 'Accepted',
      budget: '$2,000',
      timeline: '2 weeks',
      coverLetter: 'I have extensive experience writing technical content and would love to contribute to your blog...',
      clientViewed: true,
      clientRating: 4.9
    },
    {
      id: 4,
      jobTitle: 'Python Developer for Data Analysis Tool',
      client: 'DataTech Solutions',
      submittedAt: '2024-01-12',
      status: 'Declined',
      budget: '$4,500',
      timeline: '5 weeks',
      coverLetter: 'I am a Python developer with strong experience in data analysis and visualization...',
      clientViewed: true,
      clientRating: 4.7
    },
    {
      id: 5,
      jobTitle: 'WordPress Developer for Business Website',
      client: 'Local Business Co.',
      submittedAt: '2024-01-11',
      status: 'Pending',
      budget: '$2,500',
      timeline: '3 weeks',
      coverLetter: 'I can help you create a professional WordPress website that meets all your business needs...',
      clientViewed: false,
      clientRating: 4.5
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'Shortlisted':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'Accepted':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'Declined':
        return 'bg-red-100 text-red-800 border-red-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Pending':
        return <Clock className="w-4 h-4" />
      case 'Shortlisted':
        return <Eye className="w-4 h-4" />
      case 'Accepted':
        return <MessageCircle className="w-4 h-4" />
      case 'Declined':
        return <Trash2 className="w-4 h-4" />
      default:
        return <Clock className="w-4 h-4" />
    }
  }

  const filteredProposals = proposals.filter(proposal => {
    if (activeTab === 'all') return true
    return proposal.status.toLowerCase() === activeTab
  })

  const stats = {
    total: proposals.length,
    pending: proposals.filter(p => p.status === 'Pending').length,
    shortlisted: proposals.filter(p => p.status === 'Shortlisted').length,
    accepted: proposals.filter(p => p.status === 'Accepted').length,
    declined: proposals.filter(p => p.status === 'Declined').length
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">My Proposals</h1>
          <p className="text-lg text-gray-600">Track your job applications and their status</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-gray-900">{stats.total}</div>
              <div className="text-sm text-gray-600">Total</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-yellow-600">{stats.pending}</div>
              <div className="text-sm text-gray-600">Pending</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{stats.shortlisted}</div>
              <div className="text-sm text-gray-600">Shortlisted</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{stats.accepted}</div>
              <div className="text-sm text-gray-600">Accepted</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-red-600">{stats.declined}</div>
              <div className="text-sm text-gray-600">Declined</div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="all">All ({stats.total})</TabsTrigger>
            <TabsTrigger value="pending">Pending ({stats.pending})</TabsTrigger>
            <TabsTrigger value="shortlisted">Shortlisted ({stats.shortlisted})</TabsTrigger>
            <TabsTrigger value="accepted">Accepted ({stats.accepted})</TabsTrigger>
            <TabsTrigger value="declined">Declined ({stats.declined})</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-6">
            <div className="space-y-6">
              {filteredProposals.length === 0 ? (
                <Card>
                  <CardContent className="p-12 text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No proposals found</h3>
                    <p className="text-gray-600 mb-6">
                      {activeTab === 'all' 
                        ? "You haven't submitted any proposals yet."
                        : `No ${activeTab} proposals at the moment.`
                      }
                    </p>
                    <Button asChild>
                      <Link to="/find-work">Browse Jobs</Link>
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                filteredProposals.map((proposal) => (
                  <Card key={proposal.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <Link 
                              to={`/job/${proposal.id}`} 
                              className="text-xl font-semibold text-gray-900 hover:text-primary"
                            >
                              {proposal.jobTitle}
                            </Link>
                            {!proposal.clientViewed && (
                              <Badge variant="outline" className="text-xs">
                                Not viewed
                              </Badge>
                            )}
                          </div>
                          <p className="text-gray-600 mb-3">{proposal.client}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className={getStatusColor(proposal.status)}>
                            {getStatusIcon(proposal.status)}
                            <span className="ml-1">{proposal.status}</span>
                          </Badge>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-sm">
                        <div className="flex items-center text-gray-600">
                          <DollarSign className="w-4 h-4 mr-2" />
                          <span>Budget: {proposal.budget}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>Timeline: {proposal.timeline}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <span>Submitted: {new Date(proposal.submittedAt).toLocaleDateString()}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-medium text-gray-900 mb-2">Cover Letter</h4>
                        <p className="text-gray-700 text-sm line-clamp-2">{proposal.coverLetter}</p>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-600">
                          Client Rating: 
                          <span className="font-medium ml-1">{proposal.clientRating}/5</span>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4 mr-2" />
                            View
                          </Button>
                          {proposal.status === 'Pending' && (
                            <>
                              <Button variant="outline" size="sm">
                                <Edit className="w-4 h-4 mr-2" />
                                Edit
                              </Button>
                              <Button variant="outline" size="sm">
                                <Trash2 className="w-4 h-4 mr-2" />
                                Withdraw
                              </Button>
                            </>
                          )}
                          {proposal.status === 'Accepted' && (
                            <Button size="sm" asChild>
                              <Link to="/messages">
                                <MessageCircle className="w-4 h-4 mr-2" />
                                Message Client
                              </Link>
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        {filteredProposals.length > 0 && (
          <div className="mt-12 text-center">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Ready to find more opportunities?
                </h3>
                <p className="text-gray-600 mb-6">
                  Browse thousands of jobs and submit proposals to grow your freelance business
                </p>
                <Button size="lg" asChild>
                  <Link to="/find-work">Browse Jobs</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}