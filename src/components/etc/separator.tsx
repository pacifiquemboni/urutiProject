type props = {
  className?: string;
};

export default function Separator({ className = "" }: props) {
  return (
    <div
      className={`h-[1.5px] bg-light-grey my-3 mt-6 ${className}`}
      style={{
        boxShadow: "-10rem 0 0 var(--light-grey-color), 10rem 0 0 var(--light-grey-color)",
      }}
    />
  );
}
