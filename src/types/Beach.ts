
export interface Beach {
  id: number;
  name: string;
  country: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  rating: number;
  categories: string[];
  image: string;
  tagline: string;
  scores: {
    beauty: number;
    accessibility: number;
    activities: number;
    safety: number;
  };
  stories: string[];
  planLink: string;
  planText: string;
}
