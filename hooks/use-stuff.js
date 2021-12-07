import { useState } from "react"

export default function useStuff() {
  const [animal, setAnimal] = useState("horse");

  const thing = "house";

  const changeAnimal = a => {
    setAnimal(a)
    return animal
  };

  return { animal, thing, changeAnimal }
}
