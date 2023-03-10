import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Statistics = () => {
  const totaldata = useLoaderData();
  const totalquiz = totaldata.data;

  return (
    <div className="flex justify-center mt-36">
              <AreaChart
          width={500}
          height={400}
          data={totalquiz}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
    </div>
  );
};

export default Statistics;
