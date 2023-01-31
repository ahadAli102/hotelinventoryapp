export interface RoomSummery{
    totalRooms:number;
    avaiableRooms?: number;
    bookedRooms: number;
}

export interface Room{
    roomNumber : number;
    roomType : string;
    amenities : string;
    price : number;
    photo : string;
    checkInTime : Date;
    checkOutTime : Date;
    rating:number;
}