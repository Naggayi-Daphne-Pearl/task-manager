import Spinner from "react-bootstrap/Spinner";

export default function Loader() {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export function SpinnerTwo() {
  return (
    <div className="spinner-container">
      <Spinner animation="border" variant="info">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}
