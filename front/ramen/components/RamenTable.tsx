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
import { getCookie } from "cookies-next";

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
              {/* <Typography variant="h6" gutterBottom component="div">
                막대 Chart로 비교
              </Typography> */}
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

export default React.memo(function RamenTable({
  barChartData,
}: {
  barChartData: DataProps;
}) {
  const gender = getCookie("gender");
  const age = Number(getCookie("age"));
  const [ageKey, setAgeKey] = React.useState(0);

  const recommendData = {
    M: {
      0: [900, 330, 25, 55, 25, 1000],
      1: [1400, 130, 25, 55, 25, 1000],
      2: [1700, 130, 35, 55, 25, 1200],
      3: [2000, 130, 50, 55, 25, 1500],
      4: [2500, 130, 60, 55, 25, 1500],
      5: [2700, 130, 65, 55, 25, 1500],
      6: [2600, 130, 65, 55, 25, 1500],
      7: [2500, 130, 65, 55, 25, 1500],
      8: [2200, 130, 60, 55, 25, 1500],
      9: [2000, 130, 60, 55, 25, 1300],
      10: [1900, 130, 60, 55, 25, 1100],
    },
    F: {
      0: [900, 330, 25, 55, 25, 1000],
      1: [1400, 130, 25, 55, 25, 1000],
      2: [1500, 130, 35, 55, 25, 1200],
      3: [1800, 130, 45, 55, 25, 1500],
      4: [2000, 130, 55, 55, 25, 1500],
      5: [2000, 130, 55, 55, 25, 1500],
      6: [2000, 130, 55, 55, 25, 1500],
      7: [1900, 130, 50, 55, 25, 1500],
      8: [1700, 130, 50, 55, 25, 1500],
      9: [1600, 130, 50, 55, 25, 1300],
      10: [1500, 130, 50, 55, 25, 1100],
    },
  };
  // const user_recommend_

  function createData(
    name: string,
    ingredient: number,
    ingredient_average: number,
    ageKey: number,
    gender: string
  ) {
    console.log(gender);
    // let ingredient_recommend = 0;
    // if (name === "에너지 (Kcal)") {
    //   ingredient_recommend = recommendData[gender][ageKey][0];
    // } else if (name === "탄수화물(g)") {
    //   ingredient_recommend = recommendData[gender][ageKey][0];
    // } else if (name === "단백질(g)") {
    //   ingredient_recommend = recommendData[gender][ageKey][0];
    // } else if (name === "지방(g)") {
    //   ingredient_recommend = recommendData[gender][ageKey][0];
    // } else if (name === "나트륨(mg)") {
    //   ingredient_recommend = recommendData[gender][ageKey][0];
    // }
    return {
      name,
      ingredient,
      ingredient_average,
      ingredient_recommend,
    };
  }

  const rows = [
    createData("에너지 (Kcal)", barChartData.data[0], 443.26, ageKey, gender),
    createData("탄수화물(g)", barChartData.data[1], 68.05, 330, gender),
    createData("단백질(g)", barChartData.data[2], 8.32, 50, gender),
    createData("지방(g)", barChartData.data[3], 13.56, 0, gender),
    createData("당류(g)", barChartData.data[4], 4.72, 25, gender),
    createData("나트륨(mg)", barChartData.data[5], 1467.95, 1500, gender),
  ];

  React.useEffect(() => {
    if (age <= 2) {
      setAgeKey(0);
    } else if (3 <= age && age <= 5) {
      setAgeKey(1);
    } else if (6 <= age && age <= 8) {
      setAgeKey(2);
    } else if (9 <= age && age <= 11) {
      setAgeKey(3);
    } else if (12 <= age && age <= 14) {
      setAgeKey(4);
    } else if (15 <= age && age <= 18) {
      setAgeKey(5);
    } else if (19 <= age && age <= 29) {
      setAgeKey(6);
    } else if (30 <= age && age <= 49) {
      setAgeKey(7);
    } else if (50 <= age && age <= 64) {
      setAgeKey(8);
    } else if (65 <= age && age <= 74) {
      setAgeKey(9);
    } else {
      setAgeKey(10);
    }
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>성분</TableCell>
            <TableCell align="right">현재</TableCell>
            <TableCell align="right">평균</TableCell>
            <TableCell align="right">1일 권장량</TableCell>
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
});
