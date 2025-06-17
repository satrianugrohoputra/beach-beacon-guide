
export interface Beach {
  id: string;
  name: string;
  country: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  rating: number;
  category: string;
  categories: string[];
  image: string;
  tagline: string;
  scores: {
    beauty: number;
    cleanliness: number;
    accessibility: number;
    activities: number;
  };
  stories: string[];
  planLink: string;
  planText: string;
}
