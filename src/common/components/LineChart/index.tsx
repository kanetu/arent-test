import React, { useMemo } from "react";
import { LinePath } from "@visx/shape";
import { scaleLinear } from "@visx/scale";
import { AxisBottom } from "@visx/axis";
import { Group } from "@visx/group";

interface ITickComponent {
  height: number;
  x: number;
  y: number;
  formattedValue: string;
}
const TickComponent: React.FC<ITickComponent> = ({
  height,
  x,
  y,
  formattedValue,
}) => (
  <g transform={`translate(${x - 0.5},${y + 5})`}>
    <rect x={0} y={12 - height} width={1} height={height - 32} fill="#777777" />
    <text textAnchor="middle" fill="#fff" fontSize={12}>
      {Number(formattedValue)}月
    </text>
  </g>
);

interface ILineChart {
  width: number;
  height: number;
  margin: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
  mockData: {
    id: number;
    data: {
      month: number;
      inCharge: number;
    }[];
    strokeColor: string;
  }[];
}
const LineChart: React.FC<ILineChart> = ({
  width,
  height,
  margin,
  mockData,
}) => {
  const mockDataMemo = useMemo(() => mockData, [mockData]);

  const xScale = scaleLinear({
    domain: [
      mockDataMemo[0].data[0].month,
      mockDataMemo[0].data[mockDataMemo[0].data.length - 1].month,
    ],
    range: [margin.left, width - margin.right],
    nice: true,
  });
  const yScale = scaleLinear({
    domain: [0, 6],
    range: [height - margin.bottom, margin.top],
  });

  const renderTickComponent = ({ x, y, formattedValue }: ITickComponent) => (
    <TickComponent
      height={height}
      x={x}
      y={y}
      formattedValue={formattedValue}
    />
  );

  return (
    <svg width={width} height={height}>
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

      <Group>
        {mockDataMemo.map((mock) => (
          <LinePath
            key={mock.id}
            data={mock.data}
            x={(d) => xScale(d.month)}
            y={(d) => yScale(d.inCharge)}
            stroke={mock.strokeColor}
            strokeWidth={2}
          />
        ))}
      </Group>

      {mockDataMemo.map((mock) =>
        mock.data.map((data) => (
          <circle
            key={mock.id + "-" + data.month}
            cx={xScale(data.month)}
            cy={yScale(data.inCharge)}
            r={4}
            fill={mock.strokeColor}
          />
        ))
      )}
    </svg>
  );
};

export default LineChart;
