import { ITourDT } from "@/types/tour-packages-d-t";

import detailsImg from "@/assets/img/inner-page/discover/discover-1.jpg";
import packageImg1 from "@/assets/img/home-1/featured/img/img-1.webp";
import packageImg2 from "@/assets/img/home-1/featured/img/img-2.webp";
import packageImg3 from "@/assets/img/home-1/featured/img/img-3.webp";
import packageImg4 from "@/assets/img/home-2/featured/thumb/f-2-1.jpg";
import packageImg5 from "@/assets/img/home-2/featured/thumb/f-2-2.jpg";
import packageImg6 from "@/assets/img/home-2/featured/thumb/f-2-3.jpg";
import packageImg7 from "@/assets/img/home-2/featured/thumb/f-2-4.jpg";
import packageImg8 from "@/assets/img/home-4/destination/d-4-1.jpg";
import packageImg9 from "@/assets/img/home-4/destination/d-4-2.jpg";
import packageImg10 from "@/assets/img/home-4/destination/d-4-3.jpg";
import packageImg11 from "@/assets/img/home-4/destination/d-4-4.jpg";
import packageImg12 from "@/assets/img/home-4/destination/d-4-5.jpg";
import packageImg13 from "@/assets/img/home-4/destination/d-4-6.jpg";
import { CheckMarkSvg } from "@/components/svg/tour-details-svg";
import { v4 as uuidv4 } from "uuid";

export const tourPackagesDataOne: ITourDT[] = [
  {
    id: 1,
    image: packageImg1,
    title: "Wayanad Wonder",
    price: 6999,
    badgeTitle: "10%",
    address: "traford Park Lexington,40507",
    rating: "4.9",
    review: "1.8",
    tourType: "Adventure",
    duration: "3 Days 2 Nights",
    travelerCount: 15,
    detailsImg: detailsImg,
    description: `Embark on a thrilling 3-day escape to Wayanad’s enchanting highlands with Skyfall Jewel Tours & Travels. Nestled in Kerala’s Western Ghats, this package blends nature, adventure, and culture. Explore ancient caves, serene dams, and dense forests, enjoy bamboo rafting, and connect with tribal heritage. Opt for luxury or budget stays, including our exclusive Skyfall Bungalow, with private transportation and expert guides ensuring a seamless journey. Ideal for adventure seekers and nature lovers alike!  
`,
    progresses: [
      { title: "Service", value: "98%" },
      { title: "Accommodation", value: "92%" },
      { title: "Location", value: "80%" },
      { title: "Price", value: "72%" },
    ],
    advanceContent: [
      {
        title: "Unveiling Wayanad’s Natural Gems",
        description: `
      Discover the prehistoric Edakkal Caves and the majestic Banasura Dam. Thrill your senses with a wildlife safari at Tholpetty and a scenic bamboo rafting experience along serene rivers.  
      `,
      },
      {
        title: "Adventure Meets Serenity",
        description: `
      Experience the new Skyfall Adventure @ 900 Kandi glass bridge, offering breathtaking views. Opt for a starry night at our campsite or unwind at the luxurious Skyfall Bungalow villa resort.
      `,
      },
    ],
    amenities: [
      {
        title: "Luxury or budget accommodation (Skyfall Bungalow option)",
        icon: CheckMarkSvg,
      },
      {
        title: "Private transportation throughout",
        icon: CheckMarkSvg,
      },
      {
        title: "Breakfast and dinner included",
        icon: CheckMarkSvg,
      },
      {
        title: "Bamboo rafting and safari",
        icon: CheckMarkSvg,
      },
      {
        title: "Entry to key attractions",
        icon: CheckMarkSvg,
      },
    ],
    included: [
      "Pick and drop services",
      "Breakfast daily",
      "Guided wildlife safari ",
      "Visit to Edakkal Caves and Banasura Dam",
    ],
    excluded: [
      "Additional adventure activities",
      "Travel insurance",
      "Lunch and snacks",
      "Personal shopping expenses",
    ],
    tourPlans: [
      {
        uuid: uuidv4(),
        title: "Day 1: Arrival in Wayanad and Edakkal Caves",
        description:
          "Arrive in Wayanad and check into your accommodation. Explore the ancient Edakkal Caves, revealing prehistoric carvings, followed by an evening at Skyfall Bungalow or your chosen stay. ",
      },
      {
        uuid: uuidv4(),
        title: "Day 2: Wildlife Safari and Bamboo Rafting",
        description:
          "Start with a thrilling safari at Tholpetty Wildlife Sanctuary. Enjoy bamboo rafting on serene waters, then visit a tribal village. Optional camping under the stars awaits!",
      },
      {
        uuid: uuidv4(),
        title: "Day 3: Banasura Dam and Glass Bridge Adventure",
        description:
          "Visit the stunning Banasura Dam, followed by the Skyfall Adventure @ 9000 Kandi glass bridge. Depart with unforgettable memories after a hearty breakfast.",
      },
    ],
    btnText: "Explore more",
  },
  {
    id: 2,
    image: packageImg2,
    title: "Kerala Complete",
    price: 24999,
    badgeTitle: "10%",
    tourType: "Family",
    address: "traford Park Lexington,40507",
    rating: "4.8",
    review: "2.6",
    duration: "3 Days 2 Nights",
    travelerCount: 15,
    detailsImg: detailsImg,
    description: `Dive into the ultimate Kerala adventure with Skyfall Jewel Tours & Travels over 7 enriching days. From serene backwaters to lush tea estates, this package covers it all. Stay on a traditional houseboat, explore wildlife in Thekkady, relax on Kovalam’s beaches, and savor authentic Kerala cuisine. With luxury or budget stays and all transportation included, this family-friendly journey offers cultural immersion and natural beauty for all ages.
`,
    progresses: [
      { title: "Service", value: "98%" },
      { title: "Accommodation", value: "92%" },
      { title: "Location", value: "80%" },
      { title: "Price", value: "72%" },
    ],
    advanceContent: [
      {
        title: "A Cultural Odyssey",
        description: `
      Enjoy traditional dance shows and indulge in Kerala’s spicy cuisine. Visit historic sites, cruise the backwaters of Alleppey, and witness the vibrant local life unfold around you.  
      `,
      },
      {
        title: "Nature’s Finest Moments",
        description: `
      Stroll through Munnar’s tea plantations, spot wildlife in Thekkady, and unwind on Kovalam’s golden sands. This tour blends relaxation with exploration for a perfect family getaway.
      `,
      },
    ],
    amenities: [
      {
        title: "Luxury or budget accommodation",
        icon: CheckMarkSvg,
      },
      {
        title: "Traditional houseboat stay",
        icon: CheckMarkSvg,
      },
      {
        title: "All internal transportation",
        icon: CheckMarkSvg,
      },
      {
        title: "Breakfast and dinner daily",
        icon: CheckMarkSvg,
      },
      {
        title: "Cultural show tickets",
        icon: CheckMarkSvg,
      },
      {
        title: "Guided tours at key spots",
        icon: CheckMarkSvg,
      },
      {
        title: "Beach access in Kovalam",
        icon: CheckMarkSvg,
      },
    ],
    included: [
      "Pick and drop services",
      "1 meal per day",
      "Houseboat stay with dinner",
      "Tea plantation tour in Munnar",
    ],
    excluded: [
      "Additional excursions",
      "Travel insurance",
      "Alcoholic beverages",
      "Entry fees for optional sites",
    ],
    tourPlans: [
      {
        uuid: uuidv4(),
        title: "Day 1: Arrival in Kochi and Munnar",
        description:
          "Arrive in Kochi, transfer to Munnar. Check into your hotel and explore nearby tea plantations, breathing in the fresh hill air amidst stunning landscapes.",
      },
      {
        uuid: uuidv4(),
        title: "Day 2: Munnar Exploration",
        description:
          "Visit tea estates and enjoy a guided tour. Relax with scenic views and a cultural show in the evening, savoring Kerala’s culinary delights.",
      },
      {
        uuid: uuidv4(),
        title: "Day 3: Thekkady Wildlife",
        description:
          "Travel to Thekkady for a wildlife adventure. Spot animals in Periyar National Park, followed by a relaxing evening at your accommodation.",
      },
      {
        uuid: uuidv4(),
        title: "Day 4: Alleppey Houseboat",
        description:
          "Cruise the backwaters on a traditional houseboat. Enjoy onboard meals and serene views as you drift through Kerala’s iconic waterways.",
      },
      {
        uuid: uuidv4(),
        title: "Day 5: Kovalam Arrival",
        description:
          "Head to Kovalam, check into your beachside stay, and spend the day unwinding by the Arabian Sea with family-friendly activities.",
      },
      {
        uuid: uuidv4(),
        title: "Day 6: Kovalam Leisure",
        description:
          "Relax on the beach or explore local markets. Enjoy a farewell dinner featuring Kerala’s signature dishes under the stars.",
      },
      {
        uuid: uuidv4(),
        title: "Day 7: Departure ",
        description:
          "After breakfast, depart from Trivandrum with memories of Kerala’s diverse landscapes, culture, and hospitality etched in your heart.",
      },
    ],
    btnText: "Explore more",
  },
  {
    id: 3,
    image: packageImg3,
    title: "Munnar escape",
    price: 49500,
    badgeTitle: "10%",
    tourType: "Adventure",
    address: "traford Park Lexington,40507",
    rating: "4.5",
    review: "1.9",
    duration: "4 Days 3 Nights",
    travelerCount: 15,
    detailsImg: detailsImg,
    description: `Embark on a breathtaking 4-day Munnar escape with Skyfall Jewel Tours & Travels. Experience misty hills, sprawling tea gardens, and cascading waterfalls in Kerala’s most beloved hill station. Stay in cozy resorts, visit Eravikulam National Park, take a spice plantation tour, and enjoy scenic viewpoints. With seamless transportation and customizable stay options, this package is perfect for nature lovers and adventure seekers alike.
`,
    progresses: [
      { title: "Service", value: "98%" },
      { title: "Accommodation", value: "92%" },
      { title: "Location", value: "80%" },
      { title: "Price", value: "72%" },
    ],
    advanceContent: [
      {
        title: "A Tranquil Retreat",
        description: `
    Discover Munnar’s charm with visits to Mattupetty Dam, Echo Point, and tea museums. Enjoy authentic Kerala cuisine and explore the vibrant markets filled with local crafts and flavors.
      `,
      },
      {
        title: "Nature & Adventure Awaits",
        description: `
      Trek through lush trails, capture stunning waterfalls, and visit Periyar Lake for a serene boat ride. Whether you seek relaxation or adventure, this tour offers the perfect balance for an unforgettable getaway
      `,
      },
    ],
    amenities: [
      {
        title: "Luxury or budget accommodation",
        icon: CheckMarkSvg,
      },
      {
        title: "Scenic tea plantation stays",
        icon: CheckMarkSvg,
      },
      {
        title: "All internal transportation",
        icon: CheckMarkSvg,
      },
      {
        title: "Daily breakfast and dinner",
        icon: CheckMarkSvg,
      },
      {
        title: "Entry tickets to key attractions",
        icon: CheckMarkSvg,
      },
      {
        title: "Guided tours at major landmarks",
        icon: CheckMarkSvg,
      },
      {
        title: "Adventure activities and nature walks",
        icon: CheckMarkSvg,
      },
    ],
    included: [
      "Pick up from Cochin",
      "Drop at Cochin",
      "Breakfast",
      "Dinner/candlelight dinner",
      "Campfire",
      "Swimming pool",
      "Sightseeing",
    ],
    excluded: ["Lunch", "Ticket charges", "Extra foods"],
    tourPlans: [
      {
        uuid: uuidv4(),
        title: "Day 1: Arrival in Bangkok",
        description:
          "Land in Bangkok, check into your 4-star hotel, and explore nearby markets. Evening at leisure to enjoy the city’s vibrant street food scene.",
      },
      {
        uuid: uuidv4(),
        title: "Day 2: Bangkok City Tour",
        description:
          "Visit the Grand Palace, Wat Pho, and Wat Arun. End the day with a Thai cooking class, learning to whip up local delicacies.",
      },
      {
        uuid: uuidv4(),
        title: "Day 3: Phuket Arrival and Island Hopping",
        description:
          "Fly to Phuket, check in, and start island-hopping. Explore Phang Nga Bay’s limestone cliffs and emerald waters with a guided tour.",
      },
      {
        uuid: uuidv4(),
        title: "Day 4: Phi Phi Islands Excursion",
        description:
          "Sail to Phi Phi Islands for swimming and snorkeling. Relax on pristine beaches, capturing Thailand’s tropical beauty under the sun.",
      },
      {
        uuid: uuidv4(),
        title: "Day 5: Floating Markets and Departure",
        description:
          "Shop at a floating market in the morning. After breakfast, transfer to the airport with assistance, bidding farewell to Thailand.",
      },
    ],
    btnText: "Explore more",
  },
];

export const tourPackagesDataTwo: ITourDT[] = [
  {
    id: 4,
    image: packageImg4,
    title: "Cuba Sailing Adventure",
    price: 110,
    badgeTitle: "10%",
    isFeature: true,
    address: "traford Park Lexington,40507",
    rating: "4.8",
    review: "1.6",
    duration: 5,
    travelerCount: 12,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: "Service", value: "80%" },
      { title: "Accommodation", value: "95%" },
      { title: "Location", value: "70%" },
      { title: "Price", value: "92%" },
    ],
    btnText: "Explore more",
  },
  {
    id: 5,
    image: packageImg5,
    title: "Tour in New York",
    price: 115,
    badgeTitle: "15%",
    address: "new your city, 22054",
    rating: "4.9",
    review: "2.4",
    duration: 7,
    travelerCount: 15,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: "Service", value: "90%" },
      { title: "Accommodation", value: "95%" },
      { title: "Location", value: "80%" },
      { title: "Price", value: "92%" },
    ],
    btnText: "Explore more",
  },
  {
    id: 6,
    image: packageImg6,
    title: "Beach tour in Miami",
    isFeature: true,
    price: 99,
    address: "new your city, 22054",
    rating: "4.5",
    review: "2.4",
    duration: 3,
    travelerCount: 10,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: "Service", value: "90%" },
      { title: "Accommodation", value: "95%" },
      { title: "Location", value: "80%" },
      { title: "Price", value: "92%" },
    ],
    btnText: "Explore more",
  },
  {
    id: 7,
    image: packageImg7,
    title: "Cuba Sailing Adventure",
    price: 101,
    badgeTitle: "12%",
    isFeature: true,
    address: "traford Park Lexington,40507",
    rating: "4.8",
    review: "1.6",
    duration: 5,
    travelerCount: 15,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: "Service", value: "90%" },
      { title: "Accommodation", value: "95%" },
      { title: "Location", value: "80%" },
      { title: "Price", value: "92%" },
    ],
    btnText: "Explore more",
  },
];

export const tourPackagesDataThree: ITourDT[] = [
  {
    id: 8,
    image: packageImg8,
    title: "Cuba Sailing Adventure",
    price: 101,
    badgeTitle: "12%",
    isFeature: true,
    address: "traford Park Lexington,40507",
    rating: "4.8",
    review: "1.6",
    duration: 5,
    travelerCount: 15,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: "Service", value: "90%" },
      { title: "Accommodation", value: "95%" },
      { title: "Location", value: "80%" },
      { title: "Price", value: "92%" },
    ],
    btnText: "Explore more",
  },
  {
    id: 9,
    image: packageImg9,
    title: "Discovery island kayak..",
    price: 181,
    isFeature: true,
    address: "traford Park Lexington,40507",
    rating: "4.8",
    review: "1.6",
    duration: 2,
    travelerCount: 15,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: "Service", value: "90%" },
      { title: "Accommodation", value: "95%" },
      { title: "Location", value: "80%" },
      { title: "Price", value: "92%" },
    ],
    btnText: "Explore more",
  },
  {
    id: 10,
    image: packageImg10,
    title: "Beautiful parasailing",
    price: 171,
    badgeTitle: "15%",
    address: "traford Park Lexington,40507",
    rating: "4.8",
    review: "1.6",
    duration: 3,
    travelerCount: 15,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: "Service", value: "90%" },
      { title: "Accommodation", value: "95%" },
      { title: "Location", value: "80%" },
      { title: "Price", value: "92%" },
    ],
    btnText: "Explore more",
  },
  {
    id: 11,
    image: packageImg11,
    title: "Sight seeing & taj Mahal..",
    price: 171,
    isFeature: true,
    address: "traford Park Lexington,40507",
    rating: "4.5",
    review: "1.7",
    duration: 5,
    travelerCount: 15,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: "Service", value: "90%" },
      { title: "Accommodation", value: "95%" },
      { title: "Location", value: "80%" },
      { title: "Price", value: "92%" },
    ],
    btnText: "Explore more",
  },
  {
    id: 12,
    image: packageImg12,
    title: "Peninsula & Caribbean..",
    price: 151,
    badgeTitle: "12%",
    isFeature: true,
    address: "traford Park Lexington,40507",
    rating: "4.7",
    review: "1.2",
    duration: 4,
    travelerCount: 15,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: "Service", value: "90%" },
      { title: "Accommodation", value: "95%" },
      { title: "Location", value: "80%" },
      { title: "Price", value: "92%" },
    ],
    btnText: "Explore more",
  },
  {
    id: 13,
    image: packageImg13,
    title: "Boathouse Neighborhood",
    price: 151,
    badgeTitle: "12%",
    address: "traford Park Lexington,40507",
    rating: "4.7",
    review: "1.2",
    duration: 8,
    travelerCount: 17,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: "Service", value: "90%" },
      { title: "Accommodation", value: "95%" },
      { title: "Location", value: "80%" },
      { title: "Price", value: "92%" },
    ],
    btnText: "Explore more",
  },
  {
    id: 14,
    image: packageImg13,
    title: "Cuba Sailing Adventure",
    price: 101,
    badgeTitle: "12%",
    isFeature: true,
    address: "traford Park Lexington,40507",
    rating: "4.8",
    review: "1.6",
    duration: 5,
    travelerCount: 15,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: "Service", value: "90%" },
      { title: "Accommodation", value: "95%" },
      { title: "Location", value: "80%" },
      { title: "Price", value: "92%" },
    ],
    btnText: "Explore more",
  },
  {
    id: 15,
    image: packageImg12,
    title: "Discovery island kayak..",
    price: 181,
    isFeature: true,
    address: "traford Park Lexington,40507",
    rating: "4.8",
    review: "1.6",
    duration: 2,
    travelerCount: 15,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: "Service", value: "70%" },
      { title: "Accommodation", value: "85%" },
      { title: "Location", value: "90%" },
      { title: "Price", value: "82%" },
    ],
    btnText: "Explore more",
  },
  {
    id: 16,
    image: packageImg11,
    title: "Beautiful parasailing",
    price: 171,
    badgeTitle: "15%",
    address: "traford Park Lexington,40507",
    rating: "4.8",
    review: "1.6",
    duration: 3,
    travelerCount: 15,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: "Service", value: "90%" },
      { title: "Accommodation", value: "75%" },
      { title: "Location", value: "80%" },
      { title: "Price", value: "82%" },
    ],
    btnText: "Explore more",
  },
  {
    id: 17,
    image: packageImg10,
    title: "Sight seeing & taj Mahal..",
    price: 171,
    isFeature: true,
    address: "traford Park Lexington,40507",
    rating: "4.5",
    review: "1.7",
    duration: 5,
    travelerCount: 15,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: "Service", value: "90%" },
      { title: "Accommodation", value: "85%" },
      { title: "Location", value: "70%" },
      { title: "Price", value: "92%" },
    ],
    btnText: "Explore more",
  },
  {
    id: 18,
    image: packageImg9,
    title: "Peninsula & Caribbean..",
    price: 151,
    badgeTitle: "12%",
    isFeature: true,
    address: "traford Park Lexington,40507",
    rating: "4.7",
    review: "1.2",
    duration: 4,
    travelerCount: 15,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: "Service", value: "90%" },
      { title: "Accommodation", value: "95%" },
      { title: "Location", value: "80%" },
      { title: "Price", value: "92%" },
    ],
    btnText: "Explore more",
  },
  {
    id: 19,
    image: packageImg8,
    title: "Boathouse Neighborhood",
    price: 151,
    badgeTitle: "12%",
    address: "traford Park Lexington,40507",
    rating: "4.7",
    review: "1.2",
    duration: 8,
    travelerCount: 17,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: "Service", value: "80%" },
      { title: "Accommodation", value: "75%" },
      { title: "Location", value: "85%" },
      { title: "Price", value: "95%" },
    ],
    btnText: "Explore more",
  },
  {
    id: 20,
    image: packageImg10,
    title: "Cuba Sailing Adventure",
    price: 101,
    badgeTitle: "12%",
    isFeature: true,
    address: "traford Park Lexington,40507",
    rating: "4.8",
    review: "1.6",
    duration: 5,
    travelerCount: 15,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: "Service", value: "70%" },
      { title: "Accommodation", value: "85%" },
      { title: "Location", value: "80%" },
      { title: "Price", value: "92%" },
    ],
    btnText: "Explore more",
  },
  {
    id: 21,
    image: packageImg11,
    title: "Discovery island kayak..",
    price: 181,
    isFeature: true,
    address: "traford Park Lexington,40507",
    rating: "4.8",
    review: "1.6",
    duration: 2,
    travelerCount: 15,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: "Service", value: "80%" },
      { title: "Accommodation", value: "95%" },
      { title: "Location", value: "90%" },
      { title: "Price", value: "82%" },
    ],
    btnText: "Explore more",
  },
  {
    id: 22,
    image: packageImg12,
    title: "Beautiful parasailing",
    price: 171,
    badgeTitle: "15%",
    address: "traford Park Lexington,40507",
    rating: "4.8",
    review: "1.6",
    duration: 3,
    travelerCount: 13,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: "Service", value: "90%" },
      { title: "Accommodation", value: "95%" },
      { title: "Location", value: "80%" },
      { title: "Price", value: "92%" },
    ],
    btnText: "Explore more",
  },
];

export const tourPackagesData: ITourDT[] = [
  ...tourPackagesDataOne,
  ...tourPackagesDataTwo,
  ...tourPackagesDataThree,
];
