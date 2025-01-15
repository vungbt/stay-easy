import { Button } from '@stay-easy-workspace/ui';

export function App() {
  return (
    <div>
      <span className="text-brand font-bold">HELLO</span>
      <Button type="button" onClick={() => console.log('Go to here')}>
        12312
      </Button>
    </div>
  );
}

export default App;
