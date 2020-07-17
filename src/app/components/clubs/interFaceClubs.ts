interface InterFaceClubs {
  id: number;
  name: string;
  address: string;
  img: string;
  players: {
    id: number;
    name: string;
    img: string;
    address: string;
  }[];
}
