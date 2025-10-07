// Background.tsx
import DarkVeil from "./DarkVeil"

function Background() {
    return (
        <>
            <div className="hidden sm:block fixed w-full h-[100vh] top-0 left-0 -z-999">
                <DarkVeil />
            </div>
            <div className="sm:hidden fixed w-full h-[100vh] top-0 left-0 -z-999 bg-gradient-to-r from-slate-900 via-cyan-950 to-gray-900">
            </div>
        </>
    )
}

export default Background
