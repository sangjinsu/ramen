import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { DataProps, SimilarRamenType } from "./Types";
import { TabPanel, a11yProps } from "./TabComponent";
import BarSimilar from "./BarSimilar";
import DocDataDictionary from "./main/dataDictionary";
import Link from "next/link";

export default function SimilarRamen({
  similarityRamen,
}: {
  similarityRamen: SimilarRamenType;
}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    if (newValue === 0) {
      setData({
        data: [
          similarityRamen.first.salty,
          similarityRamen.origin.salty,
          similarityRamen.first.sweetness,
          similarityRamen.origin.sweetness,
        ],
      });
    } else if (newValue === 1) {
      setData({
        data: [
          similarityRamen.second.salty,
          similarityRamen.origin.salty,
          similarityRamen.second.sweetness,
          similarityRamen.origin.sweetness,
        ],
      });
    } else if (newValue === 2) {
      setData({
        data: [
          similarityRamen.third.salty,
          similarityRamen.origin.salty,
          similarityRamen.third.sweetness,
          similarityRamen.origin.sweetness,
        ],
      });
    }
  };

  const [barChartData, setData] = React.useState<DataProps>({
    data: [
      similarityRamen.first.salty,
      similarityRamen.origin.salty,
      similarityRamen.first.sweetness,
      similarityRamen.origin.sweetness,
    ],
  });

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label={similarityRamen.first.name} {...a11yProps(0)} />
            <Tab label={similarityRamen.second.name} {...a11yProps(1)} />
            <Tab label={similarityRamen.third.name} {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div className="similar_ramen">
            <Link href={`/ramen/${similarityRamen.first.id}`}>
              <a>
                {DocDataDictionary[`${similarityRamen.first.name}.png`] ? (
                  <img
                    src={`/ramen/${similarityRamen.first.name}.png?w=248&fit=crop&auto=format`}
                  ></img>
                ) : (
                  <img src={"/ramen/default.png"} />
                )}
              </a>
            </Link>
          </div>
          <BarSimilar barChartData={barChartData} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="similar_ramen">
            <Link href={`/ramen/${similarityRamen.second.id}`}>
              <a>
                {DocDataDictionary[`${similarityRamen.second.name}.png`] ? (
                  <img
                    src={`/ramen/${similarityRamen.second.name}.png?w=248&fit=crop&auto=format`}
                  ></img>
                ) : (
                  <img src={"/ramen/default.png"} />
                )}
              </a>
            </Link>
          </div>
          <BarSimilar barChartData={barChartData} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="similar_ramen">
            <Link href={`/ramen/${similarityRamen.third.id}`}>
              <a>
                {DocDataDictionary[`${similarityRamen.third.name}.png`] ? (
                  <img
                    src={`/ramen/${similarityRamen.third.name}.png?w=248&fit=crop&auto=format`}
                  ></img>
                ) : (
                  <img src={"/ramen/default.png"} />
                )}
              </a>
            </Link>
          </div>
          <BarSimilar barChartData={barChartData} />
        </TabPanel>
      </Box>
      <style jsx>
        {`
          .similar_ramen {
            display: flex;
            justify-content: center;
          }
        `}
      </style>
    </>
  );
}
