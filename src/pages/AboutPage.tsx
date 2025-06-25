import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HelpCircle, ShieldCheck, Cpu } from 'lucide-react';

const AboutPage: React.FC = () => {
  console.log('AboutPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto max-w-4xl py-12 px-4">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">
                About MouseTrack
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 text-gray-700 dark:text-gray-300">
              
              <section className="space-y-3">
                <h2 className="flex items-center text-2xl font-semibold">
                  <HelpCircle className="mr-3 h-6 w-6 text-primary" />
                  What Is This?
                </h2>
                <p className="leading-relaxed">
                  MouseTrack is a simple yet powerful web utility designed to bring awareness to your digital habits. 
                  Out of curiosity, for productivity analysis, or for ergonomic reasons, this tool provides real-time data 
                  on your mouse usage, including total clicks and distance traveled. It's a fun way to see just how much 
                  work your mouse does every day.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="flex items-center text-2xl font-semibold">
                  <Cpu className="mr-3 h-6 w-6 text-primary" />
                  How It Works
                </h2>
                <p className="leading-relaxed">
                  The application operates entirely within your browser (client-side). When you click "Start Tracking", 
                  we simply begin listening for mouse events—clicks and movements—on the current web page. All calculations 
                  happen locally on your machine. The data for your session is temporarily stored in your browser's local storage,
                  allowing you to view your history across sessions.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="flex items-center text-2xl font-semibold">
                  <ShieldCheck className="mr-3 h-6 w-6 text-primary" />
                  Your Privacy Matters
                </h2>
                <p className="font-semibold text-lg">
                  We take your privacy seriously. Here's our promise:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>
                    <strong>No Server-Side Tracking:</strong> Your mouse activity data is never sent to, or stored on, any external server. It stays on your computer.
                  </li>
                  <li>
                    <strong>No Data Collection:</strong> We do not collect, share, or sell any personal information or usage data. The application is purely for your own use and insight.
                  </li>
                  <li>
                    <strong>Complete Control:</strong> You are in full control. You decide when to start and stop tracking, and you can clear your history from your browser's local storage at any time.
                  </li>
                </ul>
                <p className="leading-relaxed pt-2">
                  This tool is built for transparency and personal use. Feel free to inspect the page's source code to verify how it works.
                </p>
              </section>

            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;