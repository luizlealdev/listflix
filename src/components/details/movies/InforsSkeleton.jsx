import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import styles from "./Infors.module.css";

export function InforsSkeleton() {
   return (
      <div>
         <Skeleton
            style={{
               width: "75%",
               height: "18px",
               marginBottom: "0.5rem",
               borderRadius: "8px",
            }}
         />
         <Skeleton
            style={{
               width: "65%",
               height: "18px",
               marginBottom: "0.7rem",
               borderRadius: "8px",
            }}
         />
         <Skeleton
            style={{
               width: "95%",
               height: "18px",
               marginBottom: "0.3rem",
               borderRadius: "8px",
            }}
            count={8}
         />
      </div>
   );
}
