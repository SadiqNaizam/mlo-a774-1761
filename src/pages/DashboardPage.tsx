import React, { useState, useEffect, useRef } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StatCard from '@/components/StatCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { LayoutDashboard } from 'lucide-react';

const DashboardPage = () => {
  console.log('DashboardPage loaded');
  
  const [isTracking, setIsTracking] = useState(false);
  const [clicks, setClicks] = useState(0);
  const [distance, setDistance] = useState(0);
  const lastPosition = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const handleMouseDown = () => {
      setClicks(prev => prev + 1);
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (lastPosition.current) {
        const dx = event.clientX - lastPosition.current.x;
        const dy = event.clientY - lastPosition.current.y;
        const newDistance = Math.sqrt(dx * dx + dy * dy);
        setDistance(prev => prev + newDistance);
      }
      lastPosition.current = { x: event.clientX, y: event.clientY };
    };

    if (isTracking) {
      window.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Cleanup function
    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isTracking]);

  const handleToggleTracking = () => {
    if (isTracking) {
      // Stopping tracking
      setIsTracking(false);
      lastPosition.current = null;
      // In a real app, you would save this session's data here.
      // e.g., saveToHistory({ clicks, distance, date: new Date() });
      toast.success("Session saved.", {
        description: "You can view the summary on the History page.",
        action: {
          label: "View History",
          onClick: () => window.location.href = '/history',
        },
      });
    } else {
      // Starting tracking
      setClicks(0);
      setDistance(0);
      setIsTracking(true);
      toast.info("Mouse tracking has started!");
    }
  };
  
  const formatDistance = (pixels: number) => {
    const roundedPixels = Math.round(pixels);
    if (roundedPixels < 1000) {
      return { value: roundedPixels, unit: 'px' };
    }
    const meters = roundedPixels / 3779.5; // Approx. 3779.5 pixels per meter
    return { value: meters.toFixed(2), unit: 'm' };
  };
  
  const displayDistance = formatDistance(distance);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-2">
            Mouse Usage Dashboard
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Click the button below to start tracking your mouse activity for this session in real-time.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="mb-8 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Live Session Tracker</CardTitle>
              <LayoutDashboard className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent className="flex justify-center items-center py-10">
              <Button
                size="lg"
                variant={isTracking ? "destructive" : "default"}
                onClick={handleToggleTracking}
                className="w-64 h-16 text-xl font-bold"
              >
                {isTracking ? 'Stop Tracking' : 'Start Tracking'}
              </Button>
            </CardContent>
          </Card>
          
          <section aria-labelledby="stats-heading">
            <h2 id="stats-heading" className="sr-only">Real-time Statistics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <StatCard
                label="Total Clicks"
                value={clicks}
                unit="clicks"
              />
              <StatCard
                label="Distance Traveled"
                value={displayDistance.value}
                unit={displayDistance.unit}
              />
            </div>
          </section>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;