import { useState, useEffect } from "react";
import { getData } from "./../../utils/apiCalls";
import { CARTOONS2D_URL } from "./../../utils/constants";
import { setCartoons, getItems } from "./../../utils/localStorage";
import Cartoon from "./Cartoon";
import * as R from "ramda";

const Cartoons2D = () => {
  const [fetchedCartoons, setFetchedCartoons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (getItems("cartoons").length === 0) {
      setIsLoading(true);
      getData(CARTOONS2D_URL)
        .then((data) => {
          setCartoons(data);
          setFetchedCartoons(data);
        })
        .catch((err) => {
          console.log(err);
          setError(err);
        })
        .finally(() => setIsLoading(false));
    } else {
      setFetchedCartoons(getItems("cartoons"));
    }
  }, []);

  return (
    <div>
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {isLoading && <p>Loading...</p>}
      {R.not(R.isEmpty(fetchedCartoons)) && (
        <ul>
          {R.take(3, fetchedCartoons).map((c) => (
            <Cartoon key={c.id} {...c} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cartoons2D;
