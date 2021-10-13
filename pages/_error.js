import {Layout_Shop} from "../components/react-bootstrap/Layout";

const _error = ({ statusCode }) => {
  return (
    <Layout_Shop title="Something Goes Wrong" footer={false}>
      <p className="text-center">
        {statusCode
          ? `Could not load your user data: Status code ${statusCode}`
          : "Coud not get that page, sorry."}
      </p>
    </Layout_Shop>
  );
};

export default _error;
