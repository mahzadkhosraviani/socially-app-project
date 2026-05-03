
interface LoadingScreenProps {
  text?: string;
}

export default function LoadingScreen({ text = "Loading" }: LoadingScreenProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col items-center pt-10">
      <p className="text-gray-300 text-sm font-medium tracking-wide mb-4">
        {text}
      </p>
      {/* Larger spinner: w-10 h-10 (40x40px) with border-4 for visibility */}
      <div className="w-10 h-10 border-4 border-gray-600 border-t-white rounded-full animate-spin" />
    </div>
  );
}