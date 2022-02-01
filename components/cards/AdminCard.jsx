import { CardActionArea, Paper } from "@mui/material";
import Link from "next/link";

function AdminCard({ link, icon, description, title }) {
  return (
    <Link href={link} passHref>
      <CardActionArea style={{ borderRadius: 18 }}>
        <Paper
          elevation={3}
          style={{
            borderRadius: 18,
          }}
          className=" w-full relative space-y-4 p-5 flex flex-col"
        >
          {icon}
          <h3 className="text-2xl font-semibold opacity-90 text-left">
            {title}
          </h3>
          <h1 className="text-base opacity-80">{description}</h1>
        </Paper>
      </CardActionArea>
    </Link>
  );
}

export default AdminCard;
