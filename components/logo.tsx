export default function Logo({ w = 150, h = 150, alt = "HuskyNZ Logo", ...props }) {
  return (
    <img
      src="https://serv.husky.nz/logo/default.png"
      alt={alt}
      width={w}
      height={h}
      {...props}
    />
  );
}