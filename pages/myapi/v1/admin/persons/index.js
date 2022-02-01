import DeleteDialog from "@comp/dialogs/DeleteDialog";
import PersonDialog from "@comp/dialogs/PersonDialog";
import PersonTable from "@comp/tables/PersonTable";
import Header from "@comp/utils/Header";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [personToDeleteId, setPersonToDeleteId] = useState(null);
  const [file, setFile] = useState("");
  const [person, setPerson] = useState({
    first_name: "",
    last_name: "",
    email: "",
    linkedin: "",
    profession: "",
    image: "",
    category: "",
    post: "",
    is_hidden: false,
  });
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleDeleteClose = () => {
    setOpenDelete(false);
    setPersonToDeleteId(null);
  };
  const handleDeleteOpen = (id) => {
    setPersonToDeleteId(id);
    setOpenDelete(true);
  };
  const handleClose = () => {
    setOpen(false);
    setPerson({
      id: "",
      first_name: "",
      last_name: "",
      email: "",
      linkedin: "",
      profession: "",
      image: "",
      category: "",
      post: "",
      is_hidden: false,
    });
    setFile("");
  };

  return (
    <div>
      <Head>
        <title>Jina CODE ESI PERSONS</title>
      </Head>
      <Header title="Jina CODE ESI PERSONS" />
      <div className="min-h-[400px] space-y-6 py-6">
        <PersonDialog
          open={open}
          handleClose={handleClose}
          handleClickOpen={handleClickOpen}
          person={person}
          setPerson={setPerson}
          file={file}
          setFile={setFile}
        />
        <DeleteDialog
          open={openDelete}
          handleClose={handleDeleteClose}
          personToDeleteId={personToDeleteId}
          title={"Delete Person with id: " + personToDeleteId}
          description={"Are you sure you want to delete this person?"}
          lastMsg={"Person deleted successfully"}
        />
        <PersonTable
          open={open}
          handleClose={handleClose}
          handleClickOpen={handleClickOpen}
          person={person}
          setPerson={setPerson}
          file={file}
          setFile={setFile}
          handleDeleteOpen={handleDeleteOpen}
        />
      </div>
    </div>
  );
}
