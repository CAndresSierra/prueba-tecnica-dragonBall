import Link from "next/link";
import { Button } from "../ui/button";

const UpdateTransf: React.FC<{ transfId: string | undefined }> = ({
  transfId,
}) => {
  return (
    <>
      <Link href={`updateTransf/${transfId}`}>
        <Button
          variant="secondary"
          className="bg-blue-500/20 hover:bg-blue-500/35 rounded-3xl dark:bg-blue-500/20 dark:hover:bg-blue-500/35"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 stroke-blue-700"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
            <path d="M13.5 6.5l4 4" />
          </svg>
        </Button>
      </Link>
    </>
  );
};

export default UpdateTransf;
