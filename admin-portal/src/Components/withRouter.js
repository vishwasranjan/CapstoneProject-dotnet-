import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const withRouter = (WrappedComponent) => {
  const Wrapper = (props) => {

    const params = useParams();
    const navigate = useNavigate();

    return (
      <WrappedComponent
        params={params}
         navigate={navigate}
        // {...props}
      />
    );
  };
  return Wrapper;
};
export default withRouter;