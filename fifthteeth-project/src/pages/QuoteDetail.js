import { Fragment } from "react";
import { Route, useParams, Link, useRouteMatch } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Max",
    text: "Learning React is fun!",
  },
  {
    id: "q2",
    author: "Maximilian",
    text: "Learning React is great!",
  },
];

const QuoteDetail = () => {

  const math = useRouteMatch();


  const params = useParams();

  console.log(math);

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>Quote not found</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`${math.path}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${math.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`${math.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
