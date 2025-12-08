import { useForceRender } from "@/hooks/use-force-render";
import { useWindowSize } from "@/hooks/use-sync/use-window-size";
import { useWindowSize2 } from "@/hooks/use-sync/use-window-size-sync";

export default function App() {
  const size2 = useWindowSize2();
  const size = useWindowSize();
  return (
    <div>
      <div>
        <p className="font-bold">useSyncExternal</p>
        <p>Width: {size2.width}</p>
        <p>Height: {size2.height}</p>
      </div>
      <div>
        <p className="font-bold">useState</p>
        <p>Width: {size.width}</p>
        <p>Height: {size.height}</p>
      </div>
    </div>
  );
}
