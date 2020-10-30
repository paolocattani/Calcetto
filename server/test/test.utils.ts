export const getRandomUser = async (size?: number): Promise<RandomUserList | null> => {
  try {
    const response = await fetch('https://randomuser.me/api/');
    return await response.json();
  } catch (error) {
    return null;
  }
};

export type RandomUserList = {
  results: Array<RandomUser>;
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
};

export type RandomUser = {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: string;
    city: string;
    state: string;
    postcode: string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: Date;
    age: number;
  };
  registered: {
    date: Date;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
};
