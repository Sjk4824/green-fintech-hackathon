export type RootStackParamList = {
    Login: undefined;
    Dashboard: undefined;
    ProfilePage: {
      name: string;
      email: string;
      mobile: string;
      profilePhotoUrl: string;
      tradeBalance: number;
      bankAccounts: string[];
    };
    HoldingsPage: undefined;
  };