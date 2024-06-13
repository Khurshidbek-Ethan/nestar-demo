import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import TrendProperties from "@/libs/components/homepage/TrendProperties";
import PopularProperties from "@/libs/components/homepage/PopularProperties";
import Advertisement from "@/libs/components/homepage/Advertisement";
import TopProperties from "@/libs/components/homepage/TopProperties";
import TopAgents from "@/libs/components/homepage/TopAgents";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { GET_PROPERTIES } from "@/apollo/user/query";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { useQuery } from "@apollo/client";

const Home: NextPage = () => {
  const {
    loading: getPRopertiesLoading,
    data: getPropertiesData,
    error: getPropertiesError,
    refetch: getPropertiesRefetch,
  } = useQuery(GET_PROPERTIES, {
    fetchPolicy: "network-only",
    variables: {
      input: {
        page: 1,
        limit: 5,
        sort: "createdAt",
        direction: "DESC",
        search: {},
      },
    },
  });
  console.log("getPropertiesData:", getPropertiesData);

  const device = useDeviceDetect();
  if (device === "mobile") {
    return <Stack>HOMEPAGE MOBILE</Stack>;
  } else {
    return (
      <Stack className={"home-page"}>
        <TrendProperties />
        <PopularProperties />
        <Advertisement />
        <TopProperties />
        <TopAgents />
      </Stack>
    );
  }
};

// withLayoutMain ga Home ni wrap qilsak oziga yutib oladi va uni biz LayoutMain filega uni joylaymiz for rendering purpose
export default withLayoutMain(Home);
// function useQuery(GET_PROPERTIES: any, arg1: { fetchPolicy: string; variables: { input: { page: number; limit: number; sort: string; direction: string; search: {}; }; }; }): { loading: any; data: any; error: any; refetch: any; } {
//   throw new Error("Function not implemented.");
// }

