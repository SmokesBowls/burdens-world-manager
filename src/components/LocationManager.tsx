import LocationManager from '@/components/LocationManager'

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Burdens of a Forgotten Past - World Codex
        </h1>
        <LocationManager />
      </div>
    </div>
  );
}