import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function CardSkeleton({ cards }) {
   return Array(cards)
      .fill(0)
      .map((_, i) => (
         <div key={i}>
            <Skeleton
               style={{
                  width: "100%",
                  maxHeight: "200px",
                  height: "170.5px",
                  borderRadius: "10px",
               }}
            />
            <Skeleton
               style={{
                  width: "100%",
                  height: "14px",
                  marginTop: "2.5px",
                  borderRadius: "10px",
               }}
            />
         </div>
      ));
}
