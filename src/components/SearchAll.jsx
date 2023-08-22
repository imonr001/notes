import React, { useEffect, useRef, useState } from "react";
import supabase from "../supabaseClient";
import SideNavCard from "./SideNavCard";

function SearchAll({ search }) {
  const [data, setData] = useState([]);
  const result = useRef([]);
  useEffect(() => {
    async function viewAll() {
      const res = await supabase.from("entries").select("*");
      setData(res.data);
    }
    viewAll();
  }, []);

  return (
    <div>
      <div>
        <ul>
          <li>
            {data.map((d) => {
              if (d.title === search) {
                result.current = d;
              }
            })}
            <SideNavCard result={result.current} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SearchAll;
