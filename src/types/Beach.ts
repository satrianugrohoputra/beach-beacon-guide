
export interface Beach {
  id: number;
  name: string;
  country: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  rating: number;
  category: string;
  image: string;
  tagline: string;
  scores: {
    beauty: number;
    cleanliness: number;
    accessibility: number;
    activities: number;
  };
}
