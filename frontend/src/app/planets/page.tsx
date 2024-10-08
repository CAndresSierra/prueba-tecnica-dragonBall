"use client";

import { IOriginPlanet } from "@/interfaces/IOriginPlanet";
import { useEffect, useState } from "react";

import { ApiPlanetsUrl } from "@/config/envs";
import PlanetsComponent from "@/components/Planets/PlanetsComponent";
import Loading from "../loading";

const Planets: React.FC = () => {
  const [planets, setPlanets] = useState<IOriginPlanet[]>();
  const [skeleton, setSkeleton] = useState<boolean>(false);

  useEffect(() => {
    const fetchDta = async () => {
      setSkeleton(true);
      try {
        const res = await fetch(ApiPlanetsUrl, { method: "GET" });
        const data: IOriginPlanet[] = await res.json();

        setPlanets(data);
      } catch (error: any) {
        console.log(error.message);
      } finally {
        setSkeleton(false);
      }
    };

    fetchDta();
  }, []);

  if (skeleton) {
    return (
      <div className="flex  container items-start justify-center h-screen w-screen">
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex flex-col container">
      <PlanetsComponent planets={planets} />
    </div>
  );
};

export default Planets;
