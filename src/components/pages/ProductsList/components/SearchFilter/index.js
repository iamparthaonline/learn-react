import "./style.css";
const SearchFilter = (props) => {
  return (
    <div className="search-filter">
      <div className="search">
        <input
          type="text"
          onChange={(e) => props.handleSearch(e.target.value)}
        />
      </div>
      <img src="filter.png" alt="sort" />
    </div>
  );
};

export default SearchFilter;
