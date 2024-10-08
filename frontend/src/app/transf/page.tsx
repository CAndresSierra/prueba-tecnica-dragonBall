"use client";

import { useEffect, useState } from "react";

import { ApiTransfUrl } from "@/config/envs";
import { ITransformation } from "@/interfaces/ITransfomation";
import TransfComponent from "@/components/Transfomations/TransfComponents";
import Loading from "../loading";

const Transf: React.FC = () => {
  const [transf, setTransf] = useState<ITransformation[]>();
  const [skeleton, setSkeleton] = useState<boolean>(false);

  useEffect(() => {
    const fetchDta = async () => {
      setSkeleton(true);
      try {
        const res = await fetch(ApiTransfUrl, { method: "GET" });
        const data: ITransformation[] = await res.json();

        setTransf(data);
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
      <div className="flex container items-start justify-center h-screen w-screen">
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex flex-col container">
      <TransfComponent transf={transf} />
    </div>
  );
};

export default Transf;
