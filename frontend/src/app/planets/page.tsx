"use client";

import { IOriginPlanet } from "@/interfaces/IOriginPlanet";
import { useEffect, useState } from "react";

import { ApiPlanetsUrl } from "@/config/envs";
import PlanetsComponent from "@/components/Planets/PlanetsComponent";

const Planets: React.FC = () => {
  const [planets, setPlanets] = useState<IOriginPlanet[]>();

  useEffect(() => {
    const fetchDta = async () => {
      try {
        const res = await fetch(ApiPlanetsUrl, { method: "GET" });
        const data: IOriginPlanet[] = await res.json();

        setPlanets(data);
      } catch (error: any) {
        console.log(error.message);
      }
    };

    fetchDta();
  }, []);

  return (
    <div className="flex flex-col container">
      <PlanetsComponent planets={planets} />
    </div>
  );
};

export default Planets;
