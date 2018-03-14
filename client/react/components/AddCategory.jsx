import React from 'react';

const NewCategory = ({}) => (
  <div className="well">
    <form className="form-horizontal" onSubmit={handleSubmit}>
      <fieldset>
        <legend>New Categor</legend>
        <div className="form-group">
          <label className="col-xs-2 control-label">Name</label>
          <div className="col-xs-10">
            <input
              value={value}
              onChange={handleChange}
              className="form-control"
              type="text"
            />
          </div>
        </div>
        {invalidLength && hasChanged ? (
          <ErrorDisplay>Please enter a name</ErrorDisplay>
        ) : null}
        <div className="form-group">
          <div className="col-xs-10 col-xs-offset-2">
            <button
              type="submit"
              className="btn btn-success"
              disabled={invalidLength}
            >
              Create Category
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
);

export default NewCategory;
