import Box from "./components/Box/Box";
import EmptyBox from "./components/EmptyBox/EmptyBox";
import MainLayout from "./components/MainLayout/MainLayout";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <EmptyBox>
          <h1>Example Text</h1>
          
        </EmptyBox>

        <Box>
          <h1>Example Text</h1>
        </Box>
      </MainLayout>
    </div>
  );
}

export default App;
