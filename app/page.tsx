import Image from "next/image";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline } from "@mui/material";
import Nav from "@/app/components/nav/page";
import Lists from "@/app/components/lists/page";
import ListItems from "@/app/components/list-items/page"

export default function Home() {
  return (
    <>
      <CssBaseline enableColorScheme />
      <Nav />
      <Lists/>
      <ListItems/>
    </>
  );
}
