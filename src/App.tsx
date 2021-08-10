import React, {useState} from 'react';
import PhotoSearchResult from "./components/PhotoSearchResult";
import PhotoSearchInput from "./components/PhotoSearchInput";


function App() {
  const [query, setQuery] = useState<string>('')
  const [search, setSearch] = useState('')
  return (
    <div className="App">
      <PhotoSearchInput setSearch={setSearch} query={query} setQuery={setQuery} />
    <PhotoSearchResult  search={search} />
    </div>
  );
}

export default App;
