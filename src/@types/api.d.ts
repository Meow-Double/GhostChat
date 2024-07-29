type AuthAnswer = AuthErrorAnswer | AuthSuccessAnswer;

interface AuthErrorAnswer {
  message: string;
}

interface AuthSuccessAnswer {
  name: string;
  email: string;
  avatarUrl: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  token: string;
}

interface GetMeData {
  _id: string;
  name: string;
  email: string;
  avatarUrl: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
