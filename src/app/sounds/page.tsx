import SoundsContent from "@/components/contents/sounds";
import { Metadata } from "next";

export const metadata: Metadata = {
     title: "Հանգստացնող ձայններ"
}

export default function SoundsPage() {
     return (
          <SoundsContent/>
     )
}