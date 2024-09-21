export type Trip = {
    startDate: Date
    endDate: Date
    country: string;
    notes: string[];
    id: string;
    city: string;
}

export type Hotel = {
    startDate: Date
    endDate: Date
    country: string;
    notes: string[];
    id: string;
    city: string;
    cost: number;
    hotelName: string;
    location: string;
}