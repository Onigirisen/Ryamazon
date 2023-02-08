import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSearches, getSearches } from "../../store/search";
import SearchItem from "./SearchItem";

const Search = () => {
  const dispatch = useDispatch();
  const { searchTerm } = useParams();
  const term = searchTerm;
  const results = useSelector(getSearches);
  const resultList = results.map((product) => (
    <SearchItem key={product.id} product={product} />
  ));
  const dummyDivs = [1, 2, 3, 4, 5, 6, 7].map((el) => (
    <div className="hidden-product-placeholder" key={el}></div>
  ));
  useEffect(() => {
    dispatch(fetchSearches(term));
  }, [dispatch, term]);

  return (
    <div className="results-container">
      {resultList.length > 0 && (
        <div className="results-index">
          <div className="results-index-container">
            <div className="results-heading-container">
              <h1 className="results-heading">RESULTS</h1>
            </div>
            <div className="product-index-layout">
              {resultList}
              {dummyDivs}
            </div>
          </div>
        </div>
      )}
      {!resultList.length > 0 && (
        <div className="no-results-container">
          <h1 className="no-results-found">
            No Results found for "{searchTerm}".
          </h1>
          <span className="no-results-message">
            Please try searching for a different term instead.
          </span>
        </div>
      )}
    </div>
  );
};

export default Search;
