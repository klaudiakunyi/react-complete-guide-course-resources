import { CORE_CONCEPTS } from "../assets/data-with-examples";
import CoreConcept from "./CoreConcept";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map(
          (conceptItem) => (
            <CoreConcept key={conceptItem.title} {...conceptItem} />
          ) //key is needed! even if not used
        )}
        {/* <CoreConcepts {...CORE_CONCEPTS[0]}/>
      <CoreConcepts {...CORE_CONCEPTS[1]}/>
      <CoreConcepts {...CORE_CONCEPTS[2]}/> */}
      </ul>
    </section>
  );
}
