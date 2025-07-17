import { useState } from 'react'
import { User, Bell, Shield, CreditCard, Globe, Save } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Textarea } from '../components/ui/textarea'
import { Switch } from '../components/ui/switch'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'
import { Badge } from '../components/ui/badge'

export default function SettingsPage() {
  const [profile, setProfile] = useState({
    displayName: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    title: 'Full Stack Developer',
    location: 'New York, USA',
    hourlyRate: '85',
    bio: 'Experienced full-stack developer with 8+ years of experience building scalable web applications.',
    skills: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS'],
    languages: [
      { name: 'English', level: 'Native' },
      { name: 'Spanish', level: 'Conversational' }
    ]
  })

  const [notifications, setNotifications] = useState({
    emailProposals: true,
    emailMessages: true,
    emailMarketing: false,
    pushProposals: true,
    pushMessages: true,
    pushMarketing: false
  })

  const [privacy, setPrivacy] = useState({
    profileVisibility: 'public',
    showEarnings: false,
    showLocation: true,
    allowDirectContact: true
  })

  const handleProfileUpdate = () => {
    // Handle profile update
    console.log('Updating profile:', profile)
  }

  const handleNotificationUpdate = () => {
    // Handle notification settings update
    console.log('Updating notifications:', notifications)
  }

  const handlePrivacyUpdate = () => {
    // Handle privacy settings update
    console.log('Updating privacy:', privacy)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Settings</h1>
          <p className="text-lg text-gray-600">Manage your account settings and preferences</p>
        </div>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="profile">
              <User className="w-4 h-4 mr-2" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="notifications">
              <Bell className="w-4 h-4 mr-2" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="privacy">
              <Shield className="w-4 h-4 mr-2" />
              Privacy
            </TabsTrigger>
            <TabsTrigger value="billing">
              <CreditCard className="w-4 h-4 mr-2" />
              Billing
            </TabsTrigger>
            <TabsTrigger value="preferences">
              <Globe className="w-4 h-4 mr-2" />
              Preferences
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Avatar */}
                <div className="flex items-center space-x-6">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b9e0e4e0?w=150&h=150&fit=crop&crop=face" />
                    <AvatarFallback className="text-xl">SJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <Button variant="outline">Change Photo</Button>
                    <p className="text-sm text-gray-600 mt-2">JPG, GIF or PNG. Max size 2MB.</p>
                  </div>
                </div>

                {/* Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="displayName">Display Name</Label>
                    <Input
                      id="displayName"
                      value={profile.displayName}
                      onChange={(e) => setProfile({...profile, displayName: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile({...profile, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="title">Professional Title</Label>
                    <Input
                      id="title"
                      value={profile.title}
                      onChange={(e) => setProfile({...profile, title: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={profile.location}
                      onChange={(e) => setProfile({...profile, location: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="hourlyRate">Hourly Rate ($)</Label>
                    <Input
                      id="hourlyRate"
                      type="number"
                      value={profile.hourlyRate}
                      onChange={(e) => setProfile({...profile, hourlyRate: e.target.value})}
                    />
                  </div>
                </div>

                {/* Bio */}
                <div>
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    rows={4}
                    value={profile.bio}
                    onChange={(e) => setProfile({...profile, bio: e.target.value})}
                    placeholder="Tell clients about your experience and expertise..."
                  />
                </div>

                {/* Skills */}
                <div>
                  <Label>Skills</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {profile.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary">
                        {skill}
                        <button className="ml-2 text-xs">×</button>
                      </Badge>
                    ))}
                    <Button variant="outline" size="sm">+ Add Skill</Button>
                  </div>
                </div>

                <Button onClick={handleProfileUpdate}>
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Email Notifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>New Proposals</Label>
                    <p className="text-sm text-gray-600">Get notified when you receive new job proposals</p>
                  </div>
                  <Switch
                    checked={notifications.emailProposals}
                    onCheckedChange={(checked) => setNotifications({...notifications, emailProposals: checked})}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Messages</Label>
                    <p className="text-sm text-gray-600">Get notified about new messages from clients</p>
                  </div>
                  <Switch
                    checked={notifications.emailMessages}
                    onCheckedChange={(checked) => setNotifications({...notifications, emailMessages: checked})}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Marketing Updates</Label>
                    <p className="text-sm text-gray-600">Receive updates about new features and promotions</p>
                  </div>
                  <Switch
                    checked={notifications.emailMarketing}
                    onCheckedChange={(checked) => setNotifications({...notifications, emailMarketing: checked})}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Push Notifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>New Proposals</Label>
                    <p className="text-sm text-gray-600">Push notifications for new job proposals</p>
                  </div>
                  <Switch
                    checked={notifications.pushProposals}
                    onCheckedChange={(checked) => setNotifications({...notifications, pushProposals: checked})}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Messages</Label>
                    <p className="text-sm text-gray-600">Push notifications for new messages</p>
                  </div>
                  <Switch
                    checked={notifications.pushMessages}
                    onCheckedChange={(checked) => setNotifications({...notifications, pushMessages: checked})}
                  />
                </div>
              </CardContent>
            </Card>

            <Button onClick={handleNotificationUpdate}>
              <Save className="w-4 h-4 mr-2" />
              Save Notification Settings
            </Button>
          </TabsContent>

          {/* Privacy Tab */}
          <TabsContent value="privacy" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Privacy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Profile Visibility</Label>
                  <Select value={privacy.profileVisibility} onValueChange={(value) => setPrivacy({...privacy, profileVisibility: value})}>
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="public">Public - Anyone can view</SelectItem>
                      <SelectItem value="clients">Clients Only - Only clients can view</SelectItem>
                      <SelectItem value="private">Private - Hidden from search</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Show Earnings</Label>
                    <p className="text-sm text-gray-600">Display your total earnings on your profile</p>
                  </div>
                  <Switch
                    checked={privacy.showEarnings}
                    onCheckedChange={(checked) => setPrivacy({...privacy, showEarnings: checked})}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Show Location</Label>
                    <p className="text-sm text-gray-600">Display your location on your profile</p>
                  </div>
                  <Switch
                    checked={privacy.showLocation}
                    onCheckedChange={(checked) => setPrivacy({...privacy, showLocation: checked})}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Allow Direct Contact</Label>
                    <p className="text-sm text-gray-600">Allow clients to contact you directly</p>
                  </div>
                  <Switch
                    checked={privacy.allowDirectContact}
                    onCheckedChange={(checked) => setPrivacy({...privacy, allowDirectContact: checked})}
                  />
                </div>
              </CardContent>
            </Card>

            <Button onClick={handlePrivacyUpdate}>
              <Save className="w-4 h-4 mr-2" />
              Save Privacy Settings
            </Button>
          </TabsContent>

          {/* Billing Tab */}
          <TabsContent value="billing" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                          <CreditCard className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">•••• •••• •••• 4242</p>
                          <p className="text-sm text-gray-600">Expires 12/25</p>
                        </div>
                      </div>
                      <Badge>Primary</Badge>
                    </div>
                  </div>
                  <Button variant="outline">Add Payment Method</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Billing History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b">
                    <div>
                      <p className="font-medium">Service Fee - January 2024</p>
                      <p className="text-sm text-gray-600">Jan 31, 2024</p>
                    </div>
                    <p className="font-medium">$125.00</p>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <div>
                      <p className="font-medium">Service Fee - December 2023</p>
                      <p className="text-sm text-gray-600">Dec 31, 2023</p>
                    </div>
                    <p className="font-medium">$98.50</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Preferences Tab */}
          <TabsContent value="preferences" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>General Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Timezone</Label>
                  <Select defaultValue="est">
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="est">Eastern Time (EST)</SelectItem>
                      <SelectItem value="pst">Pacific Time (PST)</SelectItem>
                      <SelectItem value="utc">UTC</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Currency</Label>
                  <Select defaultValue="usd">
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usd">USD ($)</SelectItem>
                      <SelectItem value="eur">EUR (€)</SelectItem>
                      <SelectItem value="gbp">GBP (£)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Button>
              <Save className="w-4 h-4 mr-2" />
              Save Preferences
            </Button>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}