import PaintingList from './components/PaintingList';
import paintings from './paintings.json';
import Section from "./components/section";

function App() {
  return (
    <div>
      <Section title="TOP WEEKEND">
        <PaintingList items={paintings} />
      </Section>

      <Section title="BEST OF THE BEST">
        <PaintingList items={paintings} />
      </Section>
    </div>
  );
}

export default App;
