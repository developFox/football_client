interface InterFacePlayerInfo {
  id: number;
  year: string;
  region: string;
  city: string;
  fio: string;
  coefficient: string;
  images: string;
  birth_date: string;
  address: string;
  mother: string;
  father: string;
  mother_telephone: string;
  father_telephone: string;
  phone: string;
  clubs: string;
  email: string;
  imagesList: any;
  videosList: any;
  awardsList: { photo: string, name: string }[];
  description: string;
  marks: {
    name: string;
    params: {
      name: string;
      markcol: string;
      val: string;
    }[];
  }[];
  coach: string;
  coach_img: string;
  statistics: {
    played: string;
    wins: string;
    draw: string;
    goals: string;
    pass: string;
  };
}
