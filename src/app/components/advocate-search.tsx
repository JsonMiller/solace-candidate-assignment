import {useEffect, useState} from "react";

type SearchProps = {
  onChange: (newValue: string) => void;
  onReset: () => void;
}

/**
 * Component to surface a search box. Has a built in debounce so we don't flood our imaginary api.
 * I fully understand that the debounce is not necessary for this, but in a real scenario if we were searching
 * against our API we would want it to prevent flooding the api and running into weird async issues.
 * @param onChange method that is called when the search term is changed and the debounce is triggered.
 * @param onReset method that is called when the reset button is clicked.
 */
export default function AdvocateSearch({onChange, onReset}: SearchProps) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      onChange(searchTerm);
    }, 500);

    return () => {
      clearTimeout(handler);
    }
  }, [searchTerm])

  return (
      <div>
        <p>Search</p>
        <p>
          Searching for: {searchTerm}
        </p>
        <input style={{border: "1px solid black"}}
               onChange={(e) => setSearchTerm(e.target.value)}/>
        <button onClick={onReset}>Reset Search</button>
      </div>
  )
}