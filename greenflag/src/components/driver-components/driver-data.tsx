import React, { useState, useEffect } from 'react';
import { fetchDrivers } from '../../apis/apiClient';
import driverImages from '../../models/drivers';
import LoadingStandings from '../ui/loading-standings';
import {Driver } from "../../types/driver"
// Define the interface for a driver

interface DriverDataProps {
  children: (data: {
    drivers: Driver[];
    isLoading: boolean;
    error: string | null;
  }) => JSX.Element;
}

const DriverData: React.FC<DriverDataProps> = ({ children }) => {
  const [driverList, setDriverList] = useState<Driver[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      // Fetch drivers with seasonYear = 2024 and pageSize = 24
      const fetchedData = await fetchDrivers(24);

      // Ensure fetchedData has the items key and it's an array
      if (!fetchedData || !Array.isArray(fetchedData.items)) {
        throw new Error('Invalid data structure');
      }

      const items = fetchedData.items;

      // Map images and driver numbers to driver IDs
      const driverMap: { [key: string]: any } = {};
      driverImages.forEach((driver) => {
        driverMap[driver.id] = {
          image: driver.image,
          driver_number: driver.driver_number,
          suitColor: driver.suitColor,
        };
      });

      // Extract and transform drivers
      const drivers: Driver[] = items.map((item: { constructors: any[]; id: string ; firstName: string; lastName: string; number: string; code: string; isChampion: boolean; standing: { position: number; points: number;}; }) => {
        const constructor = item.constructors[0]; // Assuming there's only one constructor per driver
        return {
          id: item.id,
          firstName: item.firstName,
          lastName: item.lastName,
          number: item.number,
          code: item.code,
          isChampion: item.isChampion,
          standing: item.standing,
          teamName: constructor.fullName,
          imageUrl: driverMap[item.id] ? driverMap[item.id].image : null,
          driver_number: driverMap[item.id] ? driverMap[item.id].driver_number : null,
          suitColor: driverMap[item.id] ? driverMap[item.id].suitColor : null,
        };
      });

      // Sort drivers by their standing position, defaulting to Infinity if position is undefined
      drivers.sort((a, b) => {
        const positionA = a.standing?.position ?? Infinity;
        const positionB = b.standing?.position ?? Infinity;
        return positionA - positionB;
      });


      console.log('Processed Drivers:', drivers)
      setDriverList(drivers);
      setIsLoading(false);
    } catch (error: any ) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <div><LoadingStandings/></div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return children({ drivers: driverList, isLoading, error: null });
};

export default DriverData;
