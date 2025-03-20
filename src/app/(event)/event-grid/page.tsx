import { Metadata } from "next";
import EventGridMain from "@/pages/event/event-grid";

export const metadata: Metadata = {
  title: "Jewel - Event Page",
};

const EventGridPage = () => {
  return <EventGridMain />;
};

export default EventGridPage;
