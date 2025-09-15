import React from 'react';
import { Heart, Brain, Phone, ExternalLink } from 'lucide-react';

const ResourcesSidebar = () => {
  const resources = [
    {
      id: 'meditation',
      title: 'Meditation',
      icon: Heart,
      description: 'Guided meditation exercises',
      items: [
        { name: '5-minute breathing', url: '#' },
        { name: 'Body scan meditation', url: '#' },
        { name: 'Mindful walking', url: '#' }
      ]
    },
    {
      id: 'stress-tips',
      title: 'Stress Tips',
      icon: Brain,
      description: 'Practical stress management',
      items: [
        { name: 'Deep breathing techniques', url: '#' },
        { name: 'Progressive muscle relaxation', url: '#' },
        { name: 'Time management strategies', url: '#' }
      ]
    },
    {
      id: 'helplines',
      title: 'Helplines',
      icon: Phone,
      description: 'Professional support',
      items: [
        { name: 'Crisis Text Line: 741741', url: 'tel:741741' },
        { name: 'National Suicide Prevention: 988', url: 'tel:988' },
        { name: 'Student Mental Health Hotline', url: 'tel:1-800-273-8255' }
      ]
    }
  ];

  return (
    <div className="bg-gradient-sidebar rounded-xl shadow-lg p-6 h-full">
      <h3 className="text-xl font-semibold text-foreground mb-6">Resources</h3>
      
      <div className="space-y-6">
        {resources.map((resource) => {
          const IconComponent = resource.icon;
          return (
            <div key={resource.id} className="bg-card rounded-lg p-4 shadow-sm">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-primary/10 rounded-lg mr-3">
                  <IconComponent className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{resource.title}</h4>
                  <p className="text-xs text-muted-foreground">{resource.description}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                {resource.items.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    className="flex items-center justify-between p-2 rounded-lg bg-muted/50 hover:bg-muted transition-all duration-200 hover:scale-[1.02] group"
                  >
                    <span className="text-sm text-foreground group-hover:text-primary">
                      {item.name}
                    </span>
                    <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/10">
        <p className="text-sm text-primary font-medium mb-2">Emergency?</p>
        <p className="text-xs text-muted-foreground mb-3">
          If you're having thoughts of self-harm, please reach out immediately.
        </p>
        <a
          href="tel:911"
          className="inline-flex items-center px-3 py-2 bg-destructive text-destructive-foreground rounded-lg text-sm font-medium hover:bg-destructive/90 transition-colors duration-200"
        >
          <Phone className="w-4 h-4 mr-2" />
          Call 911
        </a>
      </div>
    </div>
  );
};

export default ResourcesSidebar;