import { useState, useEffect } from 'react';
import { useHomeStore } from '../store/homeStore';
import { HealthCheck } from '../components/HealthCheck';
import { Test } from '../components/Test';

export default function Home() {
  const { 
    mood, 
    currentCollection, 
    setMood, 
    featuredProducts, 
    setCurrentCollection 
  } = useHomeStore();
  const [isDay, setIsDay] = useState(true);

  useEffect(() => {
    // Toggle day/night based on mood
    if (mood === 'tired' || mood === 'stressed') {
      setIsDay(false)
    } else {
      setIsDay(true)
    }
  }, [mood]);

  const moodOptions = [
    { value: 'tired', label: 'Feeling Tired' },
    { value: 'focused', label: 'Need Focus' },
    { value: 'creative', label: 'Seeking Inspiration' },
    { value: 'stressed', label: 'Stressed Out' }
  ];

  const collectionOptions = [
    { value: 'nostalgia', label: 'Nostalgia Collection' },
    { value: 'focus', label: 'Focus Collection' },
    { value: 'fun', label: 'Fun Collection' },
    { value: 'relax', label: 'Relax Collection' }
  ];

  return (
    <div className={`min-h-screen ${isDay ? 'bg-background' : 'bg-gray-900'}`}>
      {/* Mood Selector */}
      <div className="fixed top-4 right-4 z-50">
        <div className="bg-primary/10 rounded-lg p-4 shadow-lg">
          <select
            value={mood}
            onChange={(e) => setMood(e.target.value as any)}
            className="bg-background border border-primary rounded-lg p-2 text-primary"
          >
            {moodOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-fadeIn">
            Recharge Your Code
          </h1>
          <p className="text-xl text-secondary mb-8 animate-fadeIn delay-500">
            Find the perfect tools to help you unwind, focus, and rediscover your passion for coding
          </p>

          {/* Collection Selector */}
          <div className="mb-12">
            <select
              value={currentCollection}
              onChange={(e) => setCurrentCollection(e.target.value as any)}
              className="bg-background border border-primary rounded-lg p-2 text-primary"
            >
              {collectionOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Featured Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-background border border-primary/10 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow animate-fadeIn delay-[100ms]"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-secondary mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-bold">${product.price}</span>
                  <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fun Facts Section */}
      <div className="bg-background/10 p-8 text-center animate-fadeIn delay-1000">
        <h2 className="text-3xl font-bold mb-6">Fun Facts for Developers</h2>
        <p className="text-secondary">
          Did you know? The first computer programmer was a woman named Ada Lovelace in the 1800s!
        </p>
      </div>

      {/* Daily Challenge */}
      <div className="bg-background/10 p-8 text-center animate-fadeIn delay-1500">
        <h2 className="text-3xl font-bold mb-6">Daily Coding Challenge</h2>
        <div className="bg-background border border-primary/10 rounded-lg p-4">
          <p className="text-secondary">
            Today's challenge: Create a function that finds the longest palindrome in a string
          </p>
          <button className="mt-4 bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary/90 transition-colors">
            Try the Challenge
          </button>
        </div>
      </div>

      {/* Health Check and Test */}
      <div className="container mx-auto px-4 py-8">
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Welcome to Gotore
          </h1>
          <div className="space-y-8">
            <HealthCheck />
            <Test />
          </div>
        </main>
      </div>
    </div>
  )
}
