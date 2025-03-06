import Image from "next/image";
import Link from "next/link";
import { IDestinationDT } from "@/types/destination-d-t";

interface DestinationItemProps {
  destination: IDestinationDT;
}

const DestinationItemOne = ({ destination }: DestinationItemProps) => {
  return (
    <div className="it-destination-item p-relative">
      <div
        style={{ height: "305px", overflow: "hidden" }}
        className="it-destination-thumb "
      >
        <Image
          src={destination.image}
          alt={destination.title}
          width={270}
          height={305}
          style={{ height: "auto" }}
        />
      </div>
      <div className="it-destination-content">
        <h3 className="it-destination-title">
          <div>{destination.title}</div>
        </h3>
        <span>{destination.tourCount} Tours</span>
      </div>
    </div>
  );
};
export default DestinationItemOne;
