export default function SpinLoader() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="
        w-12 h-12 border-[5px] 
        border-blue-400 
        border-b-transparent rounded-full animate-spin"
      />
    </div>
  );
}
