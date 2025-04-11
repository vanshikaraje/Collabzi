import React from "react";

const contacts = [
  { id: 1, name: "John Doe", avatar: "/images/avatar.png", status: "online", lastMessage: "Hey, how are you?", time: "2m ago", unread: 3 },
  { id: 2, name: "Jane Smith", avatar: "/images/avatar.png", status: "offline", lastMessage: "Can we meet tomorrow?", time: "1h ago", unread: 0 },
  { id: 3, name: "Mike Johnson", avatar: "/images/avatar.png", status: "online", lastMessage: "I sent you the files", time: "3h ago", unread: 1 },
  { id: 4, name: "Sarah Williams", avatar: "/images/avatar.png", status: "offline", lastMessage: "Thanks for your help!", time: "1d ago", unread: 0 },
  { id: 5, name: "David Brown", avatar: "/images/avatar.png", status: "online", lastMessage: "Let's discuss the project", time: "2d ago", unread: 0 },
];

const messages = [
  { id: 1, sender: "John Doe", content: "Hey, how are you doing today?", time: "10:30 AM", isMine: false },
  { id: 2, sender: "You", content: "I'm good, thanks! Just working on some new features for the dashboard.", time: "10:32 AM", isMine: true },
  { id: 3, sender: "John Doe", content: "That sounds great! Can you share some details about what you're building?", time: "10:34 AM", isMine: false },
  { id: 4, sender: "You", content: "Sure! I'm creating a messaging dashboard with three columns - contacts on the left, messages in the middle, and analytics on the right.", time: "10:36 AM", isMine: true },
  { id: 5, sender: "John Doe", content: "That sounds awesome! I'd love to see it when you're done.", time: "10:38 AM", isMine: false },
];

const analyticsData = {
  messagesReceived: 128,
  messagesSent: 145,
  averageResponseTime: "10 min",
  activeChats: 5,
  popularTimes: [
    { day: "Mon", value: 65 },
    { day: "Tue", value: 45 },
    { day: "Wed", value: 90 },
    { day: "Thu", value: 55 },
    { day: "Fri", value: 78 },
    { day: "Sat", value: 40 },
    { day: "Sun", value: 35 },
  ]
};

const Header = () => (
  <div className="bg-gray-900 text-white p-4">
    <h1 className="text-lg md:text-xl font-semibold">Messaging Dashboard</h1>
  </div>
);

const Avatar = ({ src, alt, fallback, className }) => (
  <div className={`relative rounded-full overflow-hidden ${className}`} style={{ width: '32px', height: '32px' }}>
    <img src="/images/avatar.png" alt={alt} className="object-cover w-full h-full" />
  </div>
);

const Badge = ({ children, className }) => (
  <span className={`inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold rounded-full bg-blue-600 text-white ${className}`}>{children}</span>
);

const Card = ({ children, className }) => (
  <div className={`bg-gray-800 rounded-md shadow ${className} text-white`}>{children}</div>
);

const CardHeader = ({ children, className }) => (
  <div className={`p-2 md:p-4 border-b border-gray-700 ${className}`}>{children}</div>
);

const CardTitle = ({ children, className }) => (
  <h3 className={`text-sm md:text-lg font-semibold ${className}`}>{children}</h3>
);

const CardDescription = ({ children, className }) => (
  <p className={`text-xs md:text-sm text-gray-400 ${className}`}>{children}</p>
);

const CardContent = ({ children, className }) => (
  <div className={`p-2 md:p-4 ${className}`}>{children}</div>
);

const CardFooter = ({ children, className }) => (
  <div className={`p-2 md:p-4 border-t border-gray-700 ${className}`}>{children}</div>
);

const Input = ({ placeholder, className }) => (
  <input type="text" placeholder={placeholder} className={`w-full p-1 md:p-2 border border-gray-700 rounded bg-gray-700 text-white text-sm ${className}`} />
);

const Button = ({ children, className }) => (
  <button className={`bg-blue-600 hover:bg-blue-800 text-white font-bold py-1 md:py-2 px-2 md:px-4 rounded text-sm ${className}`}>{children}</button>
);

const Separator = ({ className }) => (
  <hr className={`border-gray-700 my-2 md:my-4 ${className}`} />
);

const ScrollArea = ({ children, className }) => (
  <div className={`overflow-y-auto ${className}`}>{children}</div>
);

export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col p-2 md:p-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 max-h-[calc(100vh-60px)]">
          {/* Left Sidebar - Profile and Contacts */}
          <div className="md:col-span-3 flex flex-col gap-2 md:gap-4">
            {/* User Profile */}
            <Card>
              <CardContent className="p-2 md:p-4">
                <div className="flex items-center gap-2 md:gap-4">
                  <Avatar src="/images/avatar.png" alt="User" fallback="UN" className="h-10 w-10 md:h-16 md:w-16" />
                  <div>
                    <h3 className="font-semibold text-sm md:text-lg">User Name</h3>
                    <p className="text-xs md:text-sm text-gray-400">Online</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contacts List */}
            <Card className="flex-1 overflow-hidden">
              <CardHeader className="p-2 md:p-4 pb-1 md:pb-2">
                <CardTitle className="text-sm md:text-lg">Messages</CardTitle>
                <div className="mt-1 md:mt-2">
                  <Input placeholder="Search..." className="w-full text-xs md:text-sm" />
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="max-h-[calc(100vh-220px)] md:max-h-[calc(100vh-280px)]">
                  <div className="px-2 md:px-4 py-1 md:py-2">
                    {contacts.map((contact) => (
                      <div key={contact.id} className="flex items-center gap-2 md:gap-3 p-1 md:p-2 hover:bg-gray-700 rounded-md cursor-pointer mb-1 md:mb-2">
                        <div className="relative">
                          <Avatar src="/images/avatar.png" alt={contact.name} fallback={contact.name.substring(0, 2)} className="h-8 w-8 md:h-10 md:w-10" />
                          <span className={`absolute bottom-0 right-0 h-2 w-2 md:h-3 md:w-3 rounded-full border-2 border-gray-900 ${contact.status === 'online' ? 'bg-green-500' : 'bg-gray-600'}`}></span>
                        </div>
                        <div className="flex-1 overflow-hidden">
                          <div className="flex justify-between items-center">
                            <h4 className="font-medium truncate text-sm">{contact.name}</h4>
                            <span className="text-xs text-gray-400">{contact.time}</span>
                          </div>
                          <p className="text-xs text-gray-400 truncate">{contact.lastMessage}</p>
                        </div>
                        {contact.unread > 0 && (
                          <Badge className="rounded-full h-4 w-4 md:h-5 md:w-5 flex items-center justify-center p-0 text-[0.7rem]">
                            {contact.unread}
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* Middle Section - Message Box */}
          <div className="md:col-span-6 flex flex-col">
            <Card className="flex-1 flex flex-col">
              <CardHeader className="p-2 md:p-4 border-b border-gray-700">
                <div className="flex items-center gap-2 md:gap-3">
                  <Avatar src="/images/avatar.png" alt="John Doe" fallback="JD" className="h-10 w-10 md:h-12 md:w-12" />
                  <div>
                    <CardTitle className="text-sm md:text-lg">John Doe</CardTitle>
                    <CardDescription className="text-xs">Online • Last seen 2m ago</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 p-0 overflow-hidden">
                <ScrollArea className="max-h-[calc(100vh-220px)] md:max-h-[calc(100vh-280px)]">
                  <div className="p-2 md:p-4 space-y-2 md:space-y-4">
                    {messages.map((message) => (
                      <div key={message.id} className={`flex ${message.isMine ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[70%] text-sm md:text-base ${message.isMine ? 'bg-blue-600 text-white' : 'bg-gray-700 text-white'} rounded-lg p-2 md:p-3`}>
                          {!message.isMine && <p className="font-medium text-xs md:text-sm">{message.sender}</p>}
                          <p>{message.content}</p>
                          <p className="text-xs mt-1 text-gray-400">{message.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
              <CardFooter className="p-2 md:p-4 border-t border-gray-700">
                <div className="flex w-full gap-1 md:gap-2">
                  <Input placeholder="Type your message..." className="flex-1 text-xs md:text-sm" />
                  <Button className="text-xs md:text-sm">Send</Button>
                </div>
              </CardFooter>
            </Card>
          </div>

          {/* Right Sidebar - Analytics */}
          <div className="md:col-span-3 flex flex-col gap-2 md:gap-4">
            <Card>
              <CardHeader className="pb-1 md:pb-2">
                <CardTitle className="text-sm md:text-lg">Profile Analytics</CardTitle>
              </CardHeader>
              <CardContent className="p-2 md:p-4">
                <div className="space-y-2 md:space-y-4">
                  <div className="grid grid-cols-2 gap-2 md:gap-4">
                    <div className="bg-gray-700 rounded-lg p-2 text-center">
                      <p className="text-xs text-gray-400">Messages Received</p>
                      <p className="text-lg font-bold">{analyticsData.messagesReceived}</p>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-2 text-center">
                      <p className="text-xs text-gray-400">Messages Sent</p>
                      <p className="text-lg font-bold">{analyticsData.messagesSent}</p>
                    </div>
                  </div>

                  <div className="space-y-1 md:space-y-2">
                    <h4 className="font-medium text-sm">Response Time</h4>
                    <div className="bg-gray-700 rounded-lg p-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-400">Average</span>
                        <span className="font-medium">{analyticsData.averageResponseTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1 md:space-y-2">
                    <h4 className="font-medium text-sm">Active Chats</h4>
                    <div className="bg-gray-700 rounded-lg p-2">
                      <p className="text-lg font-bold">{analyticsData.activeChats}</p>
                    </div>
                  </div>

                  <div className="space-y-1 md:space-y-2">
                    <h4 className="font-medium text-sm">Activity by Day</h4>
                    <div className="bg-gray-700 rounded-lg p-2 h-20 md:h-28 flex items-end justify-between">
                      {analyticsData.popularTimes.map((day) => (
                        <div key={day.day} className="flex flex-col items-center gap-0.5 md:gap-1">
                          <div
                            className="bg-blue-600 w-4 md:w-6"
                            style={{ height: `${(day.value / 100) * 60}px` }}
                          ></div>
                          <span className="text-xs text-gray-400">{day.day}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}