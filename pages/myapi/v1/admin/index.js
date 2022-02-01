import Header from "@comp/utils/Header";
import Head from "next/head";
import dummyData from "@as/data/dummy.json";
import { Grid } from "@mui/material";
import AdminCard from "@comp/cards/AdminCard";
import {
  AppsRounded,
  DateRangeRounded,
  GroupsRounded,
} from "@mui/icons-material";

const ICONS = {
  Persons: <GroupsRounded fontSize="large" color="primary" />,
  Organizations: <AppsRounded fontSize="large" color="primary" />,
  Activities: <DateRangeRounded fontSize="large" color="primary" />,
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jina CODE ESI ADMIN DASHBOARD</title>
      </Head>
      <Header title="Jina CODE ESI ADMIN DASHBOARD" />
      <div className="min-h-[400px]">
        <Grid container className="py-8" spacing={3}>
          {dummyData.map((cardItem) => (
            <Grid item xs={12} sm={6} md={4} key={cardItem.title}>
              <AdminCard
                link={cardItem.link}
                title={cardItem.title}
                description={cardItem.description}
                icon={ICONS[cardItem.title]}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
