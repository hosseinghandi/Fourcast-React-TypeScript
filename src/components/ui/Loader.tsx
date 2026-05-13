export default function Loader() {
  return (
    <div role="status" className="flex items-center justify-center h-screen">
      <div
        aria-hidden="true"
        className="
        w-12 h-12 border-[5px] 
        border-blue-400 
        border-b-transparent rounded-full animate-spin"
      />
      <span className="sr-only">Loading weather data</span>
    </div>
  );
}
