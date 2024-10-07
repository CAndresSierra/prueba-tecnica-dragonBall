import { IOriginPlanet } from "@/interfaces/IOriginPlanet";
import PlanetCard from "./PlanetCard";

const PlanetsComponent: React.FC<{
  planets: IOriginPlanet[] | undefined;
}> = ({ planets }) => {
  return (
    <div className="flex justify-evenly  flex-wrap gap-5">
      {planets?.map((planet: IOriginPlanet, index) => {
        return (
          <PlanetCard
            key={index}
            _id={planet._id}
            name={planet.name}
            image={planet.image}
            description={planet.description}
            characters={planet.characters}
            isDestroyed={planet.isDestroyed}
          />
        );
      })}
    </div>
  );
};

export default PlanetsComponent;
