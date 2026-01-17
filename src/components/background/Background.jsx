import GrainOverlay from "./GrainOverlay";
import Scene from "./Scene";

export default function Background() {
  return (
    <>
        
        <div className="fixed bg-black inset-0 -z-10 overflow-hidden">
        {/* Outer container clips the blur */}
            <div className="absolute inset-4 blur-3xl min-h-screen">
                <Scene />
            </div>
        </div>
        <GrainOverlay />
    </>
    
  );
}
