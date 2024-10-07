"use client";

import { useEffect, useState } from "react";

import { ApiTransfUrl } from "@/config/envs";
import { ITransformation } from "@/interfaces/ITransfomation";
import TransfComponent from "@/components/Transfomaciones/TransfComponents";

const Transf: React.FC = () => {
  const [transf, setTransf] = useState<ITransformation[]>();

  useEffect(() => {
    const fetchDta = async () => {
      try {
        const res = await fetch(ApiTransfUrl, { method: "GET" });
        const data: ITransformation[] = await res.json();

        setTransf(data);
      } catch (error: any) {
        console.log(error.message);
      }
    };

    fetchDta();
  }, []);

  return (
    <div className="flex flex-col container">
      <TransfComponent transf={transf} />
    </div>
  );
};

export default Transf;
