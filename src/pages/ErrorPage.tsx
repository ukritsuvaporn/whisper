import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Header from "../components/Header";

// type errorType = {
//   statusText: string;
// };

// function isError(error: errorType): error is { statusText: string } {
//   //return error;//"statusText" in error;
//   // let errorMessage = "Failed to do something exceptional";
//   // if (error instanceof Error) {
//   //   errorMessage = error.message;
//   // }
//   // return errorMessage;
//   return "statusText" in error;
// }

const ErrorPage: React.FC = () => {
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    errorMessage = error.data?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = "Unknown error";
  }
  return (
    <>
      <Header />
      <div className="text-center text-xl p-5">
        <h1 className="text-xl text-slate-900">Sorry, an error has occurred</h1>
        {isRouteErrorResponse(error) && (
          <p className="text-base text-slate-700">{errorMessage}</p>
        )}
      </div>
    </>
  );
};

export default ErrorPage;
