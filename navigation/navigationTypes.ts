export type RootStackParamList = {
  Login: undefined;
  DashboardPage: undefined;
  ProfilePage: {
    name: string;
    email: string;
    mobile: string;
    profilePhotoUrl: string;
    tradeBalance: number;
    bankAccounts: string[];
  };
  HoldingsPage: undefined;
  StockTradingPage: {
    stockName: string;
    carbonFootprint: string;
    stockPrices?: number[];
    greenScore: number;
    marketCap: string;
    peRatio: number;
    pbRatio: number;
    roe: number;
    dividendYield: number;
  };
};