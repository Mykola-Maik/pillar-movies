import Box from "@mui/material/Box";
import type { WithSx } from "@/types";

type ArrowDownIconProps = WithSx<{}>;

const ArrowDownIcon = (props: ArrowDownIconProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transformOrigin: "center",
        ...props.sx,
      }}
      {...props}
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 10 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L5 5L9 1"
          stroke="#D0D5DD"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
};

export default ArrowDownIcon;
