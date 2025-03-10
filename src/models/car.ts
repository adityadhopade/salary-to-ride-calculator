
export interface Car {
  id: string;
  name: string;
  type: CarType;
  price: number;
  image: string;
  description: string;
}

export enum CarType {
  DailyDriver = "Daily Driver",
  SportsCar = "Sports Car",
  Supercar = "Supercar"
}

export const cars: Car[] = [
  {
    id: "1",
    name: "Toyota Corolla",
    type: CarType.DailyDriver,
    price: 25000,
    image: "/toyota-corolla.webp",
    description: "Reliable and economical daily commuter with excellent fuel efficiency."
  },
  {
    id: "2",
    name: "Honda Civic",
    type: CarType.DailyDriver,
    price: 27000,
    image: "/honda-civic.webp",
    description: "Popular compact car with modern features and dependable performance."
  },
  {
    id: "3",
    name: "Mazda 3",
    type: CarType.DailyDriver,
    price: 30000,
    image: "/mazda-3.webp",
    description: "Stylish daily driver with premium feel and engaging driving dynamics."
  },
  {
    id: "4",
    name: "BMW M3",
    type: CarType.SportsCar,
    price: 75000,
    image: "/bmw-m3.webp",
    description: "High-performance sports sedan with precision handling and luxury features."
  },
  {
    id: "5",
    name: "Porsche 911",
    type: CarType.SportsCar,
    price: 120000,
    image: "/porsche-911.webp",
    description: "Iconic sports car with perfect balance of performance and everyday usability."
  },
  {
    id: "6",
    name: "Chevrolet Corvette",
    type: CarType.SportsCar,
    price: 65000,
    image: "/chevrolet-corvette.webp",
    description: "American sports car legend offering exceptional performance value."
  },
  {
    id: "7",
    name: "Ferrari 488",
    type: CarType.Supercar,
    price: 350000,
    image: "/ferrari-488.webp",
    description: "Italian masterpiece blending cutting-edge technology with breathtaking design."
  },
  {
    id: "8",
    name: "Lamborghini Huracán",
    type: CarType.Supercar,
    price: 320000,
    image: "/lamborghini-huracan.webp",
    description: "Dramatic styling with race-car performance and an unforgettable V10 engine."
  },
  {
    id: "9",
    name: "McLaren 720S",
    type: CarType.Supercar,
    price: 300000,
    image: "/mclaren-720s.webp",
    description: "Engineering excellence with futuristic design and blistering acceleration."
  }
];

export const getCarsByType = (type: CarType): Car[] => {
  return cars.filter(car => car.type === type);
};

export const getCarById = (id: string): Car | undefined => {
  return cars.find(car => car.id === id);
};
