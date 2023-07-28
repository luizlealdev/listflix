import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function BannerSkeleton() {
   return (
      <Skeleton
         style={{
            width: "100%",
            minHeight: "400px",
            height: "400px",
            marginTop: "0.8rem",
            borderRadius: "8px",
            marginBottom: "2.5rem"
         }}
      />
   );
}
