import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HistoryLogTable from '@/components/HistoryLogTable';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { Trash2 } from 'lucide-react';

// Placeholder data for the page, as described in the user journey
const sampleLogs = [
  { id: '3', date: new Date(new Date().setDate(new Date().getDate() - 1)).toISOString(), totalClicks: 2103, distanceTraveled: 56840 },
  { id: '2', date: new Date(new Date().setDate(new Date().getDate() - 2)).toISOString(), totalClicks: 890, distanceTraveled: 21230 },
  { id: '1', date: new Date(new Date().setDate(new Date().getDate() - 3)).toISOString(), totalClicks: 1254, distanceTraveled: 34500 },
  { id: '4', date: new Date(new Date().setDate(new Date().getDate() - 4)).toISOString(), totalClicks: 1530, distanceTraveled: 41300 },
  { id: '5', date: new Date(new Date().setDate(new Date().getDate() - 5)).toISOString(), totalClicks: 950, distanceTraveled: 25000 },
];

// Format data for the chart
const chartData = sampleLogs.map(log => ({
  name: new Date(log.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
  clicks: log.totalClicks,
})).reverse(); // Reverse to show in chronological order

const HistoryPage = () => {
  console.log('HistoryPage loaded');

  const handleClearHistory = () => {
    // In a real application, this would trigger an API call or clear local storage
    console.log("History cleared!");
    // You might want to show a toast notification here
  };

  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <Header />
      <main className="flex-1">
        <div className="container py-8 md:py-12">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold tracking-tight">
              Tracking History
            </h1>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" className="flex items-center gap-2">
                  <Trash2 className="h-4 w-4" />
                  Clear History
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete all your tracking data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleClearHistory}>
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>

          <section className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Clicks Over Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={chartData}
                      margin={{
                        top: 5,
                        right: 20,
                        left: -10,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip
                        contentStyle={{
                          background: "hsl(var(--background))",
                          borderColor: "hsl(var(--border))",
                        }}
                      />
                      <Bar dataKey="clicks" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <HistoryLogTable logs={sampleLogs} />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HistoryPage;