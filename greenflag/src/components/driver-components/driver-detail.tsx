import React, { FC, useState, useEffect } from 'react';
import LoadingDriver from '../ui/loading-driver';
import apiClient from '@/apis/apiClient';

interface Session {
  session_type: string;
  location: string;
}

interface PositionData {
  session_key: number;
  meeting_key: number;
  driver_number: number;
  date: string;
  position: number | null;
}

interface DetailProps {
  driverNumber: string; // Add driver number prop
}

const Detail: FC<DetailProps> = ({ driverNumber }) => {
  const [latestData, setLatestData] = useState<{ session: Session | null; position: number | string | null }>({
    session: null,
    position: null,
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLatestData = async () => {
      try {
        // Fetch latest session data
        const sessionResponse = await apiClient.get(`https://api.openf1.org/v1/sessions?session_key=latest`);
        const sessionData: Session[] = sessionResponse.data;
        const latestSession = sessionData.length > 0 ? sessionData[0] : null;

        // Fetch latest position data based on driver number
        const positionResponse = await apiClient.get(`https://api.openf1.org/v1/position?session_key=latest&position<22`);
        const positionData: PositionData[] = positionResponse.data;

        // Filter the data for the specified driver number
        const driverPositionData = positionData
          .filter((data) => String(data.driver_number) === driverNumber)
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        // If no position data is found, consider it as DNF
        let latestPosition: number | string | null = driverPositionData.length > 0 ? driverPositionData[0].position : 'DNF';

        setLatestData({ session: latestSession, position: latestPosition });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching latest data:', error);
        setLoading(false);
        setError(error ? 'An error occurred while fetching data.' : null);
      }
    };

    fetchLatestData();
  }, [driverNumber]);

  // Log the latest data
  console.log('Latest Data:', latestData);

  if (loading) {
    return <LoadingDriver />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!latestData.session && !latestData.position) {
    return <p>No latest data available.</p>;
  }

  return (
    <div className="driver-detail text-center text-white p-4">
      <div className="flex flex-col items-center">
        {latestData.position !== null && latestData.session !== null && (
          <p className="font-bold max-w-xs">
            {latestData.position === 'DNF' ? 'Did Not Start' : `Finished P${latestData.position}`} in {latestData.session.session_type} at {latestData.session.location}.
          </p>
        )}
      </div>
    </div>
  );
};

export default Detail;
