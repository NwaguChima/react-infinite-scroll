import { useState, useEffect } from "react";
import { getPostsPage } from "../api/axios";

const usePosts = (pageNum = 1) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({});
  const [hasNextPage, setHasNextPage] = useState(false);

  return { isLoading, isError, error, results, hasNextPage };
};

export default usePosts;
