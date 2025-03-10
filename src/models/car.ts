
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
    image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80",
    description: "Reliable and economical daily commuter with excellent fuel efficiency."
  },
  {
    id: "2",
    name: "Honda Civic",
    type: CarType.DailyDriver,
    price: 27000,
    image: "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&q=80",
    description: "Popular compact car with modern features and dependable performance."
  },
  {
    id: "3",
    name: "Mazda 3",
    type: CarType.DailyDriver,
    price: 30000,
    image: "https://images.unsplash.com/photo-1597007030739-6d2e7172ce2e?auto=format&fit=crop&q=80",
    description: "Stylish daily driver with premium feel and engaging driving dynamics."
  },
  {
    id: "4",
    name: "BMW M3",
    type: CarType.SportsCar,
    price: 75000,
    image: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?auto=format&fit=crop&q=80",
    description: "High-performance sports sedan with precision handling and luxury features."
  },
  {
    id: "5",
    name: "Porsche 911",
    type: CarType.SportsCar,
    price: 120000,
    image: "https://images.unsplash.com/photo-1611821064430-0d303500588a?auto=format&fit=crop&q=80",
    description: "Iconic sports car with perfect balance of performance and everyday usability."
  },
  {
    id: "6",
    name: "Chevrolet Corvette",
    type: CarType.SportsCar,
    price: 65000,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80",
    description: "American sports car legend offering exceptional performance value."
  },
  {
    id: "7",
    name: "Ferrari 488",
    type: CarType.Supercar,
    price: 350000,
    image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80",
    description: "Italian masterpiece blending cutting-edge technology with breathtaking design."
  },
  {
    id: "8",
    name: "Lamborghini Huracán",
    type: CarType.Supercar,
    price: 320000,
    image: "https://images.unsplash.com/photo-1580414057403-c5f451f30e1c?auto=format&fit=crop&q=80",
    description: "Dramatic styling with race-car performance and an unforgettable V10 engine."
  },
  {
    id: "9",
    name: "McLaren 720S",
    type: CarType.Supercar,
    price: 300000,
    image: "https://images.unsplash.com/photo-1632245889029-e406faaa34cd?auto=format&fit=crop&q=80",
    description: "Engineering excellence with futuristic design and blistering acceleration."
  }
];

export const getCarsByType = (type: CarType): Car[] => {
  return cars.filter(car => car.type === type);
};

export const getCarById = (id: string): Car | undefined => {
  return cars.find(car => car.id === id);
};
