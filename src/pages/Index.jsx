import React from 'react';
import ChatWindow from '../components/ChatWindow';
import MoodTracker from '../components/MoodTracker';
import ResourcesSidebar from '../components/ResourcesSidebar';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-main">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Student Mental Health Support
          </h1>
          <p className="text-muted-foreground">
            A safe space for your mental wellbeing
          </p>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Left Column - Mood Tracker */}
          <div className="lg:col-span-1">
            <MoodTracker />
          </div>

          {/* Center Column - Chat Window */}
          <div className="lg:col-span-2">
            <div className="h-[600px]">
              <ChatWindow />
            </div>
          </div>

          {/* Right Column - Resources Sidebar */}
          <div className="lg:col-span-1">
            <div className="h-[600px]">
              <ResourcesSidebar />
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Remember: This is a supportive tool, not a replacement for professional help.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;