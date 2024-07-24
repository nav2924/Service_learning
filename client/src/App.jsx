import react from "react";
import { Button } from "./components/ui/button";
import BlurIn from "./components/magicui/blur-in";

function App() {
  return (
    <>
      <Button>Hey</Button>
      <BlurIn word={"hello world"}></BlurIn>
    </>
  );
}

export default App;
