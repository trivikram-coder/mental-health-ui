import React, { useState } from 'react';

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState(null);

  const moods = [
    { id: 'happy', emoji: '😃', label: 'Happy', color: 'mood-happy' },
    { id: 'neutral', emoji: '😐', label: 'Neutral', color: 'mood-neutral' },
    { id: 'sad', emoji: '😢', label: 'Sad', color: 'mood-sad' },
    { id: 'angry', emoji: '😡', label: 'Angry', color: 'mood-angry' }
  ];

  const handleMoodSelect = (moodId) => {
    setSelectedMood(moodId);
    // Here you could also save to localStorage or send to a backend
    console.log(`Mood selected: ${moodId}`);
  };

  return (
    <div className="bg-card rounded-xl shadow-lg p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">How are you feeling?</h3>
      <div className="grid grid-cols-2 gap-3">
        {moods.map((mood) => (
          <button
            key={mood.id}
            onClick={() => handleMoodSelect(mood.id)}
            className={`p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary ${
              selectedMood === mood.id
                ? `bg-${mood.color}/20 border-${mood.color} shadow-lg scale-105`
                : 'bg-muted/50 border-border hover:bg-muted/80 hover:border-primary/50'
            }`}
            aria-label={`Select ${mood.label} mood`}
          >
            <div className="text-center">
              <div className="text-3xl mb-2">{mood.emoji}</div>
              <div className="text-sm font-medium text-foreground">{mood.label}</div>
            </div>
          </button>
        ))}
      </div>
      
      {selectedMood && (
        <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
          <p className="text-sm text-primary font-medium">
            Mood logged: {moods.find(m => m.id === selectedMood)?.label}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>
      )}
    </div>
  );
};

export default MoodTracker;