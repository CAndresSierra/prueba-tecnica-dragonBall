import { Spinner } from "@nextui-org/react";

const LoadingSpinner: React.FC = () => {
  return (
    <Spinner
      label="Cargando..."
      className="text-orange-500 text-2xl"
      color="warning"
      size="lg"
    />
  );
};

export default LoadingSpinner;
