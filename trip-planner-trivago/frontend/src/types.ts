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

export type Budget = {
    cost: number;
    startDate: Date;
    endDate: Date;
    country: string;
    id: string;
    city: string;
}

export type Travel = {
    startDate: Date;
    endDate: Date;
    id: string;
    before: string
    after: string
    departureTime: string
    arrivalTime: string
    notes: string[];
    transportation: string;
}
