import * as React from "react";
import { SVGProps } from "react";
const MemoCartCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M2.5 1a1 1 0 0 0 0 2c.808 0 1.5.58 1.642 1.376l.726 4.085.411 2.38c.258 1.493.463 2.684.723 3.63.268.976.616 1.782 1.21 2.466a6 6 0 0 0 1.419 1.194c.775.47 1.629.676 2.635.774.977.095 2.186.095 3.7.095h.47c.672 0 1.232 0 1.694-.035.484-.036.93-.115 1.364-.306a4 4 0 0 0 1.585-1.263c.285-.38.461-.797.605-1.26.138-.443.263-.988.414-1.644l.019-.082c.23-.997.417-1.81.507-2.475.094-.684.104-1.326-.109-1.946a4 4 0 0 0-1.672-2.1c-.556-.346-1.184-.48-1.871-.543-.668-.06-1.503-.06-2.526-.06H6.691l-.58-3.26A3.668 3.668 0 0 0 2.5 1Zm4.741 9.45-.2-1.164h8.357c1.082 0 1.826 0 2.393.052.558.05.825.143.996.25a2 2 0 0 1 .836 1.05c.066.19.095.471.02 1.026-.077.564-.243 1.29-.486 2.344-.161.7-.27 1.172-.383 1.534-.108.35-.2.529-.296.656a2.001 2.001 0 0 1-.793.631c-.145.064-.34.114-.706.142-.378.028-.862.029-1.58.029h-.381c-1.578 0-2.69-.001-3.558-.086-.85-.083-1.373-.239-1.792-.493a4 4 0 0 1-.946-.796c-.322-.37-.565-.859-.791-1.683-.231-.842-.421-1.937-.69-3.492Z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      d="M9.25 22a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM19.5 20.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM22.342 3.707a1 1 0 1 0-1.414-1.414l-1.939 1.939-.282-.282a1 1 0 1 0-1.414 1.414l.989.989a1 1 0 0 0 1.414 0l2.646-2.646Z"
    />
  </svg>
);
export default MemoCartCheck;
