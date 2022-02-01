import { Paper } from "@mui/material";

function Copyright() {
  return (
    <h1>
      {"Copyright © "}
      <a
        className="font-bold underline text-center text-xs sm:text-sm"
        target="blank_"
        href="https://ahmedbargady.me"
      >
        Jina Cool Projects
      </a>{" "}
      {new Date().getFullYear()}
      {"."}
    </h1>
  );
}

function Footer() {
  return (
    <Paper
      elevation={2}
      className="mt-6 p-5 flex flex-col
     space-y-3 relative items-center justify-center"
    >
      <h1 className="sm:text-base text-sm text-center">Created with ❤️ By:</h1>
      <h1 className="sm:text-xl text-base text-center">Ahmed BARGADY</h1>

      <Copyright />
    </Paper>
  );
}

export default Footer;
