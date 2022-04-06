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
  console.log(row);

  const [barChartData, setData] = React.useState<DataProps>({
    data: [0, 0, 0],
  });

  React.useEffect(() => {
    setData({
      data: [row.ingredient, row.ingredient_average, row.ingredient_recommend],
    });
  }, [row]);

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

export default function RamenTable({
  barChartData,
}: {
  barChartData: DataProps;
}) {
  // const [ageKey, setAgeKey] = React.useState(0);
  console.log(barChartData.data);

  const recommendData = {
    M: {
      0: [900, 130, 25, 55, 25, 1000],
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
      0: [900, 130, 25, 55, 25, 1000],
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

  const [row1, setRow1] = React.useState({
    name: "에너지 (Kcal)",
    ingredient: 490,
    ingredient_average: 443.26,
    ingredient_recommend: 2000,
  });

  const [row2, setRow2] = React.useState({
    name: "탄수화물(g)",
    ingredient: 75,
    ingredient_average: 68.05,
    ingredient_recommend: 324,
  });

  const [row3, setRow3] = React.useState({
    name: "단백질(g)",
    ingredient: 9,
    ingredient_average: 8.32,
    ingredient_recommend: 55,
  });

  const [row4, setRow4] = React.useState({
    name: "지방(g)",
    ingredient: 17,
    ingredient_average: 13.56,
    ingredient_recommend: 54,
  });

  const [row5, setRow5] = React.useState({
    name: "당류(g)",
    ingredient: 6,
    ingredient_average: 4.72,
    ingredient_recommend: 100,
  });

  const [row6, setRow6] = React.useState({
    name: "나트륨(mg)",
    ingredient: 1550,
    ingredient_average: 1467.95,
    ingredient_recommend: 2000,
  });

  const [rows, setRows] = React.useState([row1, row2, row3, row4, row5, row6]);

  React.useEffect(() => {
    const gender = getCookie("gender");
    const age = Number(getCookie("age"));
    let ageKey = -1;
    if (age <= 2) {
      ageKey = 0;
    } else if (3 <= age && age <= 5) {
      ageKey = 1;
    } else if (6 <= age && age <= 8) {
      ageKey = 2;
    } else if (9 <= age && age <= 11) {
      ageKey = 3;
    } else if (12 <= age && age <= 14) {
      ageKey = 4;
    } else if (15 <= age && age <= 18) {
      ageKey = 5;
    } else if (19 <= age && age <= 29) {
      ageKey = 6;
    } else if (30 <= age && age <= 49) {
      ageKey = 7;
    } else if (50 <= age && age <= 64) {
      ageKey = 8;
    } else if (65 <= age && age <= 74) {
      ageKey = 9;
    } else {
      ageKey = 10;
    }
    if (gender !== undefined) {
      const recommandRow1 = recommendData[gender][ageKey][0];
      const recommandRow2 = recommendData[gender][ageKey][1];
      const recommandRow3 = recommendData[gender][ageKey][2];
      const recommandRow4 = recommendData[gender][ageKey][3];
      const recommandRow5 = recommendData[gender][ageKey][4];
      const recommandRow6 = recommendData[gender][ageKey][5];

      setRow1((prevRow1) => {
        return {
          ...prevRow1,
          ingredient: barChartData.data[0],
          ingredient_recommend: recommandRow1,
        };
      });
      setRow2((prevRow2) => {
        return {
          ...prevRow2,
          ingredient: barChartData.data[1],
          ingredient_recommend: recommandRow2,
        };
      });
      setRow3((prevRow3) => {
        return {
          ...prevRow3,
          ingredient: barChartData.data[2],
          ingredient_recommend: recommandRow3,
        };
      });
      setRow4((prevRow4) => {
        return {
          ...prevRow4,
          ingredient: barChartData.data[3],
          ingredient_recommend: recommandRow4,
        };
      });
      setRow5((prevRow5) => {
        return {
          ...prevRow5,
          ingredient: barChartData.data[4],
          ingredient_recommend: recommandRow5,
        };
      });
      setRow6((prevRow6) => {
        return {
          ...prevRow6,
          ingredient: barChartData.data[5],
          ingredient_recommend: recommandRow6,
        };
      });
    }
  }, []);

  React.useEffect(() => {
    setRows([row1, row2, row3, row4, row5, row6]);
  }, [row1, row2, row3, row4, row5, row6]);

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
}
