import { MoonType } from "../layout";
 
export const Moon = ({theme}:{theme: MoonType}) => {
  const stroke = theme === "dark" ? "#fff" : "#000";  
  return (
    <svg
      width="14"
      height="13"
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 0.5C6.20435 1.29565 5.75736 2.37478 5.75736 3.5C5.75736 4.62522 6.20435 5.70435 7 6.5C7.79565 7.29565 8.87478 7.74264 10 7.74264C11.1252 7.74264 12.2044 7.29565 13 6.5C13 7.68669 12.6481 8.84673 11.9888 9.83342C11.3295 10.8201 10.3925 11.5892 9.2961 12.0433C8.19975 12.4974 6.99335 12.6162 5.82946 12.3847C4.66558 12.1532 3.59648 11.5818 2.75736 10.7426C1.91825 9.90353 1.3468 8.83443 1.11529 7.67054C0.88378 6.50666 1.0026 5.30026 1.45673 4.2039C1.91085 3.10754 2.67989 2.17047 3.66658 1.51118C4.65328 0.851894 5.81331 0.5 7 0.5Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
 
 