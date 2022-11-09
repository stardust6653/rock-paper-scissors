import styled from "styled-components";
import BattleField from "./components/BattleField/BattleField";

const BodyLayout = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <BodyLayout>
      <BattleField />
    </BodyLayout>
  );
}

export default App;
