
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Send, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ChatPage = () => {
  return (
    <div>
      <PageHeader 
        title="World Chat"
        description="Connect with gamers around the world"
        action={
          <Button className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>Online Users (128)</span>
          </Button>
        }
      />

      <div className="flex flex-col md:flex-row gap-6">
        {/* Chat Sidebar */}
        <div className="w-full md:w-64 lg:w-80">
          <div className="bg-gaming-card rounded-lg p-4">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
              <Input 
                placeholder="Search channels..." 
                className="pl-10 bg-gaming-dark border-muted"
              />
            </div>

            <Tabs defaultValue="channels">
              <TabsList className="w-full">
                <TabsTrigger value="channels" className="flex-1">Channels</TabsTrigger>
                <TabsTrigger value="direct" className="flex-1">Direct</TabsTrigger>
              </TabsList>
              <TabsContent value="channels" className="mt-4">
                <div className="space-y-2">
                  <div className="bg-gaming-purple p-2 rounded flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                      <span className="font-medium"># General</span>
                    </div>
                    <Badge variant="outline" className="bg-white/10 border-none text-xs">128</Badge>
                  </div>
                  <div className="p-2 rounded hover:bg-muted/20 transition-colors flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-gaming-cyan"></span>
                      <span># BGMI</span>
                    </div>
                    <Badge variant="outline" className="bg-muted/10 border-none text-xs">56</Badge>
                  </div>
                  <div className="p-2 rounded hover:bg-muted/20 transition-colors flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-gaming-cyan"></span>
                      <span># Valorant</span>
                    </div>
                    <Badge variant="outline" className="bg-muted/10 border-none text-xs">42</Badge>
                  </div>
                  <div className="p-2 rounded hover:bg-muted/20 transition-colors flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-gaming-cyan"></span>
                      <span># Tournaments</span>
                    </div>
                    <Badge variant="outline" className="bg-muted/10 border-none text-xs">21</Badge>
                  </div>
                  <div className="p-2 rounded hover:bg-muted/20 transition-colors flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-gaming-cyan"></span>
                      <span># Help & Support</span>
                    </div>
                    <Badge variant="outline" className="bg-muted/10 border-none text-xs">15</Badge>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="direct" className="mt-4">
                <div className="space-y-2">
                  <div className="p-2 rounded hover:bg-muted/20 transition-colors flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-6 h-6">
                        <AvatarFallback>GS</AvatarFallback>
                      </Avatar>
                      <span>GamerSourav</span>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-gaming-purple"></span>
                  </div>
                  <div className="p-2 rounded hover:bg-muted/20 transition-colors flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-6 h-6">
                        <AvatarFallback>PR</AvatarFallback>
                      </Avatar>
                      <span>ProGamerRiya</span>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-gaming-cyan"></span>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Chat Main */}
        <div className="flex-1">
          <Card className="bg-gaming-card">
            <div className="p-4 border-b border-muted flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                <h3 className="font-semibold"># General</h3>
              </div>
              <Badge className="bg-gaming-purple">128 online</Badge>
            </div>
            
            {/* Chat Messages */}
            <div className="h-[400px] overflow-y-auto p-4 space-y-4">
              <div className="flex gap-3">
                <Avatar className="w-8 h-8">
                  <AvatarFallback>GS</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">GamerSourav</span>
                    <span className="text-xs text-muted-foreground">10:42 AM</span>
                  </div>
                  <p className="text-sm">Hey everyone! Any tournaments happening this weekend?</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Avatar className="w-8 h-8">
                  <AvatarFallback>PR</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">ProGamerRiya</span>
                    <span className="text-xs text-muted-foreground">10:45 AM</span>
                  </div>
                  <p className="text-sm">I'm joining the Bharat Esports Xpress tournament on Saturday! Anyone else?</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Avatar className="w-8 h-8">
                  <AvatarFallback>TG</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">TechGamerInd</span>
                    <span className="text-xs text-muted-foreground">10:48 AM</span>
                  </div>
                  <p className="text-sm">Yeah, I registered yesterday. It's going to be a big one with over 500 teams!</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Avatar className="w-8 h-8">
                  <AvatarFallback>ET</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">EsportsIndiaTV</span>
                    <span className="text-xs text-muted-foreground">10:50 AM</span>
                  </div>
                  <p className="text-sm">We'll be streaming the finals live on Sunday night. Don't miss it!</p>
                </div>
              </div>
            </div>
            
            {/* Chat Input */}
            <div className="p-4 border-t border-muted">
              <div className="flex gap-2">
                <Input 
                  placeholder="Type your message..." 
                  className="bg-gaming-dark border-muted"
                />
                <Button className="gaming-button">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                Remember: Be respectful to all members. Violating our community guidelines may result in a ban.
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
