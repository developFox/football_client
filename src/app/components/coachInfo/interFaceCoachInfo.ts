interface InterFaceCoachInfo {
  id: string;
  images: string;
  year: string;
  region: string;
  city: string;
  fio: string;
  birth_date: string;
  email: string;
  confirmation: string;
  phone: string;
  videosList: any;
  imagesList: any;
  awardsList: { photo: string, name: string }[];
  description: string;
  clubs: string;
  clubs_list: { name: string, string: string }[];
  tournament: { list: { name: string, state: string, date: string, year: string }[], listYear: any };
}
