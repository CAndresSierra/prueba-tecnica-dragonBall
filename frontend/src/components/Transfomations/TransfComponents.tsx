import { ITransformation } from "@/interfaces/ITransfomation";
import TransfCard from "./TransfCard";

const TransfComponent: React.FC<{
  transf: ITransformation[] | undefined;
}> = ({ transf }) => {
  return (
    <div className="flex justify-evenly  flex-wrap gap-5">
      {transf?.map((transformation: ITransformation, index) => {
        return (
          <TransfCard
            key={index}
            _id={transformation._id}
            name={transformation.name}
            image={transformation.image}
            ki={transformation.ki}
            character={transformation.character}
          />
        );
      })}
    </div>
  );
};

export default TransfComponent;
