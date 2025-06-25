import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Define the shape of a single history log entry
interface HistoryLog {
  id: string;
  date: string;
  totalClicks: number;
  distanceTraveled: number; // Assuming this is in pixels
}

// Define the props for the component
interface HistoryLogTableProps {
  logs: HistoryLog[];
}

const HistoryLogTable: React.FC<HistoryLogTableProps> = ({ logs }) => {
  console.log('HistoryLogTable loaded');

  // Function to format the distance for better readability
  const formatDistance = (pixels: number) => {
    if (pixels < 1000) {
      return `${pixels} px`;
    }
    const meters = pixels / 3779.5; // Approximate conversion: 1m ≈ 3779.5 pixels
    if (meters < 1000) {
      return `${meters.toFixed(2)} m`;
    }
    const kilometers = meters / 1000;
    return `${kilometers.toFixed(2)} km`;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Activity History</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Date</TableHead>
              <TableHead className="text-right">Total Clicks</TableHead>
              <TableHead className="text-right">Distance Traveled</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {logs && logs.length > 0 ? (
              logs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell className="font-medium">{new Date(log.date).toLocaleString()}</TableCell>
                  <TableCell className="text-right">{log.totalClicks.toLocaleString()}</TableCell>
                  <TableCell className="text-right">{formatDistance(log.distanceTraveled)}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} className="text-center h-24">
                  No tracking history found. Start a session on the dashboard to see your data here.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default HistoryLogTable;