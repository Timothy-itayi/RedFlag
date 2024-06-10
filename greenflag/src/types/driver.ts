export interface Driver {
    id: string;
    firstName: string;
    lastName: string;
    number: string;
    code: string;
    isChampion: boolean;
    standing: {
      position: number;
      points: number;
    };
    teamName: string;
    imageUrl: string | null;
    driver_number: string | null;
    suitColor: string | null;
  }
  