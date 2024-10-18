import { MouseEventHandler } from 'react';

interface ArrowUpProps {
  className?: string;
  onClick: MouseEventHandler<SVGSVGElement>;
}

export default function ArrowUp({ className, onClick }: ArrowUpProps) {
  return (
    <svg
      width="18.191284"
      height="11.923828"
      viewBox="0 0 18.1913 11.9238"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
      onClick={onClick}
    >
      <desc>Created with Pixso.</desc>
      <defs />
      <path
        d="M15.36 11.92L18.19 9.09L9.09 0L0 9.09L2.82 11.92L9.09 5.65L15.36 11.92Z"
        fill="#0E8784"
        fillOpacity="1.000000"
        fillRule="nonzero"
      />
    </svg>
  );
}
