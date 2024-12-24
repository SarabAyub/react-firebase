import React, { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Dot,
  LabelList,
} from "recharts";

import {
  Box,
  keyframes,
  Typography,
  Tooltip as MUITooltip,
  TooltipProps,
  tooltipClasses,
} from "@mui/material";
import moment from "moment";

import styled from "@emotion/styled";
import { COLORS } from "@muc/constant";
import { ChartDataPoint } from "@muc/types";
import { InfoOutlined } from "@mui/icons-material";

interface CustomLineChartProps {
  title: string;
  data?: ChartDataPoint[];
  seriesData?: { name: string; data: ChartDataPoint[] }[];
  highlightPointValue?: string;
  onPointClick?: (dataPoint: ChartDataPoint) => void;
  height?: number;
  isSeries?: boolean;
  showReferenceLine?: boolean;
  showCustomLegend?: boolean;
  showInfoTooltip?: boolean;
  showLabelList?: boolean;
}

const CustomLineChart: React.FC<CustomLineChartProps> = ({
  title,
  data = [],
  seriesData = [],
  highlightPointValue,
  onPointClick,
  height = 300,
  isSeries = false,
  showReferenceLine = true,
  showCustomLegend = false,
  showInfoTooltip = false,
  showLabelList = false,
}) => {
  // Calculate trend line only if showReferenceLine is true and isSeries is false
  const trendLineData = useMemo(() => {
    if (!isSeries && showReferenceLine && data) {
      return calculateTrendLine(data);
    }
    return [];
  }, [data, showReferenceLine, isSeries]);

  const yDomain = [
    Math.min(
      ...(isSeries && seriesData.length > 0
        ? seriesData.flatMap((s) => s.data.map((point) => point.value))
        : data.map((point) => point.value))
    ) - 10,
    Math.max(
      ...(isSeries && seriesData.length > 0
        ? seriesData.flatMap((s) => s.data.map((point) => point.value))
        : data.map((point) => point.value))
    ) + 10,
  ];

  const renderCustomDot = (props: any) => {
    const { cx, cy, payload } = props;

    if (payload && payload.name) {
      if (payload.name === highlightPointValue) {
        return (
          <PulsingDot
            cx={cx}
            cy={cy}
            onClick={() => {
              console.log("hekki");
              if (onPointClick) onPointClick(payload);
            }}
            {...props}
          />
        );
      }
    }

    return (
      <CustomDot
        {...props}
        fill={COLORS.primary.main}
        onClick={() => {
          if (onPointClick) onPointClick(payload);
        }}
      />
    );
  };

  return (
    <Box
      sx={{
        padding: 3,
        borderRadius: 5,
        backgroundColor: COLORS.white.main,
        boxShadow: "0px 10px 27px 0px #0000000D",
      }}
      width={"calc(100%-100px)"}
    >
      <Box display="flex" gap={2}>
        <Typography variant="h4" sx={{ fontSize: "20px" }}>
          {title}
        </Typography>
        {showInfoTooltip && (
          <LightMuiTooltip
            title="The line graph represents you weekly activity completion percentage"
            arrow
            placement="top"
          >
            <InfoOutlined sx={{ color: COLORS.primary.main }} />
          </LightMuiTooltip>
        )}
      </Box>
      {showCustomLegend && (
        <Box display="flex" alignItems="center" gap={2} mb={2} mt={2}>
          {seriesData.map((series, index) => (
            <Box key={index} display="flex" alignItems="center" gap={1}>
              <Typography variant="body2" sx={{ fontSize: 12 }}>
                {series.name}
              </Typography>
              <Box
                sx={{
                  width: 10,
                  height: 3,
                  backgroundColor:
                    index === 0
                      ? COLORS.primary.main
                      : COLORS.primary.darkCyanBlue,
                }}
              />
            </Box>
          ))}
        </Box>
      )}
      <ResponsiveContainer width="100%" height={height}>
        <LineChart
          data={isSeries && seriesData.length > 0 ? seriesData[0].data : data}
          margin={{ top: 20, right: 30, left: -30, bottom: 10 }}
        >
          <ShadowFilter />
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 12 }}
            tickFormatter={(tick) => {
              return moment(tick).format("MMM");
            }}
            allowDuplicatedCategory={false}
          />
          <YAxis domain={yDomain} tick={{ fontSize: 12 }} />
          <Tooltip content={<CustomTooltip />} />

          {isSeries && seriesData.length > 0
            ? seriesData.map((series, index) => (
                <Line
                  key={series.name}
                  type="monotone"
                  dataKey="value"
                  data={series.data}
                  stroke={
                    index === 0
                      ? COLORS.primary.main
                      : COLORS.primary.darkCyanBlue
                  }
                  strokeWidth={1}
                  dot={renderCustomDot}
                  name={series.name}
                  activeDot={false}
                />
              ))
            : data && (
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke={COLORS.primary.main}
                  strokeWidth={1}
                  dot={renderCustomDot}
                  activeDot={false}
                >
                  {showLabelList && (
                    <LabelList
                      dataKey="value"
                      position="bottom"
                      fontSize={12}
                      fontWeight={500}
                      fill={COLORS.primary.main}
                      offset={12}
                    />
                  )}
                </Line>
              )}

          {showReferenceLine && trendLineData.length > 0 && (
            <Line
              type="monotone"
              data={trendLineData}
              dataKey="value"
              stroke={COLORS.primary.darkCyanBlue}
              strokeWidth={0.5}
              dot={false}
              tooltipType="none"
              name="trending"
              activeDot={false}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default CustomLineChart;

const HighlightDot: React.FC<{
  cx: number;
  cy: number;
}> = ({ cx, cy }) => (
  <svg
    x={cx - 23}
    y={cy - 23}
    width="46"
    height="46"
    viewBox="0 0 46 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_dd)">
      <path
        d="M23 28.5556C28.5228 28.5556 33 24.1779 33 18.7778C33 13.3777 28.5228 9 23 9C17.4772 9 13 13.3777 13 18.7778C13 24.1779 17.4772 28.5556 23 28.5556Z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M31 18.7778C31 23.0312 27.4609 26.5556 23 26.5556C18.5391 26.5556 15 23.0312 15 18.7778C15 14.5244 18.5391 11 23 11C27.4609 11 31 14.5244 31 18.7778Z"
        stroke="white"
        strokeWidth="4"
      />
    </g>
    <defs>
      <filter
        id="filter0_dd"
        x="0"
        y="0"
        width="46"
        height="45.5557"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="6.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0.701961 0 0 0 0 0.788235 0 0 0 0.2 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="6.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0.701961 0 0 0 0 0.788235 0 0 0 0.2 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_dropShadow"
          result="effect2_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect2_dropShadow"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear"
        x1="13"
        y1="9"
        x2="32.5506"
        y2="28.995"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#03BFD7" />
        <stop offset="1" stopColor="#60C3AD" />
      </linearGradient>
    </defs>
  </svg>
);

const ShadowFilter = () => (
  <svg>
    <defs>
      <filter id="shadow">
        <feDropShadow
          dx="0"
          dy="0"
          stdDeviation="5"
          floodColor="#00b3c9"
          floodOpacity="0.5"
        />
      </filter>
    </defs>
  </svg>
);

const pulseAnimation = keyframes`
    0%,100% { opacity: 0.4 }
    50% { opacity: 1 }
  `;

const DotWrapper = styled("g")`
  animation: ${pulseAnimation} 2s linear infinite;
  cursor: pointer;
`;

const calculateTrendLine = (data: ChartDataPoint[]): ChartDataPoint[] => {
  const n = data.length;
  const sumX = data.reduce((acc, _point, index) => acc + index, 0);
  const sumY = data.reduce((acc, point) => acc + point.value, 0);
  const sumXY = data.reduce(
    (acc, point, index) => acc + index * point.value,
    0
  );
  const sumX2 = data.reduce((acc, _, index) => acc + index * index, 0);

  const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
  const intercept = (sumY - slope * sumX) / n;

  return data.map((point, index) => ({
    date: point.date,
    value: slope * index + intercept,
  }));
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <Typography
        sx={{
          fontSize: "20px",
          color: COLORS.primary.main,
        }}
      >
        {payload[0].value}
      </Typography>
    );
  }
  return null;
};

const CustomDot = styled(Dot)`
  fill: ${COLORS.primary.main};
  r: 4px;
  cursor: pointer;
`;

const LightMuiTooltip = styled(({ className, ...props }: TooltipProps) => (
  <MUITooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: COLORS.white.main,
    color: COLORS.primary.darkCyanBlue,
    fontSize: 14,
    maxWidth: 500,
    boxShadow: "0px 10px 27px 0px #0000000D",
  },
}));

function PulsingDot(props: any) {
  return (
    <DotWrapper onClick={props.onClick}>
      <HighlightDot {...props} />
    </DotWrapper>
  );
}
