import { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  IconButton,
} from "@mui/material";
import { useQuery } from "@apollo/client";
import { GET_PEOPLE } from "apollo/graphql/queries";
import Image from "next/image";
import moment from "moment";
import {
  DeleteForeverRounded,
  ModeEditOutlineRounded,
} from "@mui/icons-material";

const columns = [
  { id: "id", label: "ID", minWidth: 180 },
  { id: "first_name", label: "First Name", minWidth: 180 },
  { id: "last_name", label: "Last Name", minWidth: 180 },
  { id: "email", label: "Email", minWidth: 180 },
  { id: "linkedin", label: "Linkedin", minWidth: 180 },
  { id: "profession", label: "Profession", minWidth: 180 },
  { id: "image", label: "Image", minWidth: 180 },
  { id: "category", label: "Category", minWidth: 180 },
  { id: "post", label: "Post", minWidth: 180 },
  { id: "is_hidden", label: "Is Hidden", minWidth: 180 },
  { id: "createdAt", label: "Created At", minWidth: 180 },
  { id: "updatedAt", label: "Updated At", minWidth: 180 },
];

export default function PersonTable({
  setPerson,
  handleClickOpen,
  handleDeleteOpen,
}) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const { data: personsData, loading: personsLoading } = useQuery(GET_PEOPLE);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const updatePerson = (personToUpdate) => {
    setPerson({
      id: personToUpdate.id,
      first_name: personToUpdate.first_name,
      last_name: personToUpdate.last_name,
      email: personToUpdate.email,
      linkedin: personToUpdate.linkedin,
      profession: personToUpdate.profession,
      image: personToUpdate.image,
      category: personToUpdate.category,
      post: personToUpdate.post,
      is_hidden: personToUpdate.is_hidden,
    });
    handleClickOpen();
  };
  const deletePerson = (personToDeleteId) => {
    handleDeleteOpen(personToDeleteId);
  };
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 480 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell style={{ minWidth: 100 }}></TableCell>
              <TableCell style={{ minWidth: 100 }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {personsData &&
              personsData.getPeople
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((person) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={person.id}
                    >
                      {columns.map((column) => {
                        const value = person[column.id];
                        return (
                          <TableCell key={column.id}>
                            {column.id === "image" &&
                            value &&
                            value.startsWith(
                              "https://firebasestorage.googleapis.com"
                            ) ? (
                              <Image
                                src={value}
                                alt={`${person.first_name} ${person.last_name}`}
                                width={100}
                                height={100}
                                objectFit="cover"
                                className="rounded-lg"
                              />
                            ) : column.id === "createdAt" ||
                              column.id === "updatedAt" ? (
                              moment(parseInt(value)).format(
                                "DD MM YYYY, h:mm:ss"
                              )
                            ) : (
                              value
                            )}
                          </TableCell>
                        );
                      })}
                      <TableCell>
                        <IconButton onClick={() => updatePerson(person)}>
                          <ModeEditOutlineRounded
                            fontSize="large"
                            color="primary"
                          />
                        </IconButton>
                      </TableCell>
                      <TableCell>
                        <IconButton onClick={() => deletePerson(person.id)}>
                          <DeleteForeverRounded
                            fontSize="large"
                            style={{
                              color: "red",
                            }}
                          />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 15, 25, 50, 100]}
        component="div"
        count={personsLoading ? 0 : personsData.getPeople.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
