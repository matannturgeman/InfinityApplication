import Box from "./components/Box/Box";
import EmptyBox from "./components/EmptyBox/EmptyBox";
import MainLayout from "./components/MainLayout/MainLayout";

function App() {
  return (
    <MainLayout>
      <div className="App">
        <EmptyBox>
          <h1>Example Text</h1>
        </EmptyBox>

        <EmptyBox>
          <h1>Example Text</h1>
        </EmptyBox>

        <Box>
          <h1>Example Text</h1>
        </Box>
      </div>
    </MainLayout>
  );
}

export default App;
