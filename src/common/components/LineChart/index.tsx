import React from "react";
import { LinePath } from "@visx/shape";
import { scaleLinear } from "@visx/scale";
import { AxisBottom } from "@visx/axis";
import { Group } from "@visx/group";

const MockData1 = [
  { month: 6, inCharge: 0 },
  { month: 7, inCharge: 3 },
  { month: 8, inCharge: 2 },
  { month: 9, inCharge: 4 },
  { month: 10, inCharge: 3 },
  { month: 11, inCharge: 5 },
  { month: 12, inCharge: 0 },
];

const MockData2 = [
  { month: 6, inCharge: 3 },
  { month: 7, inCharge: 2 },
  { month: 8, inCharge: 1 },
  { month: 9, inCharge: 3 },
  { month: 10, inCharge: 0 },
  { month: 11, inCharge: 4 },
  { month: 12, inCharge: 6 },
];

const width = 500;
const height = 300;
const margin = { top: 20, bottom: 20, left: 20, right: 20 };

interface ITickComponent {
  x: number;
  y: number;
  formattedValue: string;
}
const TickComponent: React.FC<ITickComponent> = ({ x, y, formattedValue }) => (
  <g transform={`translate(${x - 0.5},${y + 5})`}>
    <rect x={0} y={12 - height} width={1} height={height - 32} fill="#777777" />
    <text textAnchor="middle" fill="#fff" fontSize={12}>
      {Number(formattedValue)}月
    </text>
  </g>
);

const LineChart: React.FC = () => {
  // Define the x and y scales
  const xScale = scaleLinear({
    domain: [MockData1[0].month, MockData1[MockData1.length - 1].month],
    range: [margin.left, width - margin.right],
    nice: true,
  });
  const yScale = scaleLinear({
    domain: [0, 6],
    range: [height - margin.bottom, margin.top],
  });

  const renderTickComponent = ({ x, y, formattedValue }: ITickComponent) => (
    <TickComponent x={x} y={y} formattedValue={formattedValue} />
  );

  return (
    <svg width={width} height={height}>
      {/* Add the x-axis */}
      <AxisBottom
        top={height - margin.bottom - 5}
        tickFormat={(v: number) => `${v}`}
        scale={xScale}
        numTicks={7}
        stroke="transparent"
        strokeWidth={0.75}
        tickStroke="#777777"
        tickLength={5}
        tickComponent={renderTickComponent}
      />

      {/* Add the line */}
      <Group>
        <LinePath
          data={MockData1}
          x={(d) => xScale(d.month)}
          y={(d) => yScale(d.inCharge)}
          stroke="#8FE9D0"
          strokeWidth={2}
        />
      </Group>

      <Group>
        <LinePath
          data={MockData2}
          x={(d) => xScale(d.month)}
          y={(d) => yScale(d.inCharge)}
          stroke="#FFCC21"
          strokeWidth={2}
        />
      </Group>

      {/* Add dots at data points */}
      {MockData1.map((d, i) => (
        <circle
          key={i}
          cx={xScale(d.month)}
          cy={yScale(d.inCharge)}
          r={4}
          fill="#8FE9D0"
        />
      ))}
      {MockData2.map((d, i) => (
        <circle
          key={i}
          cx={xScale(d.month)}
          cy={yScale(d.inCharge)}
          r={4}
          fill="#FFCC21"
        />
      ))}
    </svg>
  );
};

export default LineChart;
