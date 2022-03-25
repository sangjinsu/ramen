import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import BarCustom from "./BarCustom";
import { DataProps } from "./Types";

function createData(
  name: string,
  ingredient: number,
  ingredient_average: number,
  ingredient_recommend: number
) {
  return {
    name,
    ingredient,
    ingredient_average,
    ingredient_recommend,
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  const [barChartData, setData] = React.useState<DataProps>({
    data: [0, 0, 0],
  });
  React.useEffect(() => {
    setData({
      data: [row.ingredient, row.ingredient_average, row.ingredient_recommend],
    });
  }, []);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.ingredient}</TableCell>
        <TableCell align="right">{row.ingredient_average}</TableCell>
        <TableCell align="right">{row.ingredient_recommend}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                막대 Chart로 비교
              </Typography>
              {barChartData.data[0] !== 0 && (
                <BarCustom barChartData={barChartData} />
              )}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function RamenTable({
  barChartData,
}: {
  barChartData: DataProps;
}) {
  const rows = [
    createData("에너지 (Kcal)", barChartData.data[0], 443.26, 2000),
    createData("탄수화물(g)", barChartData.data[1], 68.05, 330),
    createData("단백질(g)", barChartData.data[2], 8.32, 50),
    createData("지방(g)", barChartData.data[3], 13.56, 0),
    createData("당류(g)", barChartData.data[4], 4.72, 25),
    createData("나트륨(mg)", barChartData.data[5], 1467.95, 1500),
  ];

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>성분</TableCell>
            <TableCell align="right">One</TableCell>
            <TableCell align="right">Average</TableCell>
            <TableCell align="right">Recommend</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
