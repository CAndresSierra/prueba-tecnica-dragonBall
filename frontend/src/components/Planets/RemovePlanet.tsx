import Swal from "sweetalert2";
import { Button } from "../ui/button";
import { ApiPlanetsUrl } from "@/config/envs";

const RemovePlanet: React.FC<{ planetId: string | undefined }> = ({
  planetId,
}) => {
  const handleRemovePlanet = async () => {
    Swal.fire({
      title: "¿Estas seguro de eliminar el planeta?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "Cerrar",
    }).then((result) => {
      if (result.isConfirmed) {
        const removePlanet = async () => {
          try {
            await fetch(`${ApiPlanetsUrl}/${planetId}`, {
              method: "DELETE",
            });
            await Swal.fire({
              title: "Elimando!",
              text: "¡Haz eliminado el planeta con exito!",
              icon: "success",
            });

            window.location.reload();
          } catch (error: any) {
            Swal.fire({
              title: "¡Ha ocurrido un error!",
              text: `${error.message}`,
              icon: "error",
            });
          }
        };
        removePlanet();
      }
    });
  };

  return (
    <>
      <Button
        variant="secondary"
        className="bg-red-500/20 hover:bg-red-500/35 rounded-3xl dark:bg-red-500/20 dark:hover:bg-red-500/35"
        onClick={handleRemovePlanet}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 stroke-red-700"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 7l16 0" />
          <path d="M10 11l0 6" />
          <path d="M14 11l0 6" />
          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
        </svg>
      </Button>
    </>
  );
};

export default RemovePlanet;
