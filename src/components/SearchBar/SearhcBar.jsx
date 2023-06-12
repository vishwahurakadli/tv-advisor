import s from "./style.module.css";
import { useState } from "react";
import { Search as SearchIcon } from "react-bootstrap-icons";

export function SearchBar({ onSubmit }) {
    
    const [value,setValue] = useState("")
    function submit(e) {
        if (e.key === "Enter" && e.target.value.trim() !== "") {
            onSubmit(e.target.value);
        }
    }

    function handleChange(e) {
        setValue(e.target.value);
    }
  
    return (
    <>
      <SearchIcon size={27} className={s.icon} />
            <input
                onKeyUp={submit}
        className={s.input}
                type="text"
                value={value}
                onChange={handleChange}
        placeholder="Search a TV show you like"
      />
    </>
  );
}