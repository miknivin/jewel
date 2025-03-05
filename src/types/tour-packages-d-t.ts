import { StaticImageData } from 'next/image';
import { v4 as uuidv4 } from 'uuid';
export interface ITourDT {
  id: number;
  image: StaticImageData;
  title: string;
  price: number;
  
  badgeTitle?: string;
  isFeature?: boolean;
  address: string;
  rating: string;
  review: string;
  duration: any;
  tourType?:string;
  travelerCount: number;
  detailsImg: StaticImageData;
  description?: string;
  advanceFacilities?: string;
  advanceContent?: {
    title: string;
    description: string;
  }[];
  progresses: {
    title: string;
    value: string;
  }[];
  amenities?: {
    title: string;
    icon: React.ElementType;
  }[];
  included?:string[];
  excluded?:string[];
  tourPlans?:{
    uuid:any;
    title:string;
    description:string;
  }[]
  btnText: string;
  checkIn?: string;
}
