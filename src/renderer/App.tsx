import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from 'react-query';
import Layout from './components/Layout';
import DataTable from './components/DataTable';
import './App.css';

const theme = createTheme({
  palette: {
    primary: { main: '#2C5F2D' },
    secondary: { main: '#97BC62FF' },
  },
});

const MainComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <DataTable />
      </Layout>
    </ThemeProvider>
  );
};

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<MainComponent />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}
