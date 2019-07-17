import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

class NewPerson extends React.Component {
  state = {
    name: '',
    sex: 'f',
    born: null,
    died: null,
    father: '',
    mother: '',
    errorMessageByName: '',
    errorMessageByDate: '',
  }

  addName = (event) => {
    const name = event.target.value;
    const reg = /\d|\W/;
    if (reg.test(name)) {
      this.setState({
        errorMessageByName: 'Incorrect name. Name must contain only a-z/A-Z. ',
      });
    } else {
      this.setState({
        errorMessageByName: '',
        name,
      });
    }
  }

  addSex = (event) => {
    this.setState({ sex: event.target.value });
  }

  addBornDate = (event) => {
    this.setState({ born: event.target.value });
  }

  addDiedDate = (event) => {
    const died = event.target.value;

    if (((died - this.state.born) < 0) || ((died - this.state.born) > 150)) {
      this.setState({
        errorMessageByDate: 'Incorrect born and/or died.',
      });
    } else {
      this.setState({
        died,
        errorMessageByDate: '',
      });
    }
  }

  addFather = (event) => {
    this.setState({ father: event.target.value });
  }

  addMother = (event) => {
    this.setState({ mother: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    const { closeForm } = this.props;
    const { errorMessageByName, errorMessageByDate } = this.state;
    return (
      <div className="shown-form">
        <form
          className="form-wrap"
          onSubmit={this.handleSubmit}
        >
          <input
            id="new-person-name"
            type="text"
            placeholder="Enter name"
            className="input"
            required="true"
            onChange={this.addName}
          />
          <span>{errorMessageByName}</span>
          <label
            htmlFor="new-person-sex__man"
            className="radio-btn"
          >
            <input
              id="new-person-sex__man"
              type="radio"
              value="m"
              name="sex"
              onChange={this.addSex}
            />
            Man
          </label>
          <label
            htmlFor="new-person-sex__woman"
            className="radio-btn"
          >
            <input
              id="new-person-sex__woman"
              type="radio"
              value="f"
              name="sex"
              onChange={this.addSex}
            />
            Woman
          </label>
          <input
            id="new-person-born"
            type="text"
            placeholder="Enter the year of born"
            className="input"
            required="true"
            onChange={this.addBornDate}
          />
          <input
            id="new-person-died"
            type="text"
            placeholder="Enter the year of death"
            className="input"
            required="true"
            onChange={this.addDiedDate}
          />
          <span>{errorMessageByDate}</span>
          <input
            id="new-person-father"
            type="text"
            placeholder="Enter father's name"
            className="input"
            required="true"
            onChange={this.addFather}
          />
          <input
            id="new-person-mother"
            type="text"
            placeholder="Enter mother's name"
            className="input"
            required="true"
            onChange={this.addMother}
          />
          <button
            type="submit"
            className="btn-add"
            disabled={(errorMessageByName || errorMessageByDate)
              ? true
              : false
            }
          >
            Add
          </button>
          <button
            type="submit"
            className="btn-close"
            onClick={closeForm}
          >
            Close
          </button>
        </form>
      </div>
    );
  }
}

NewPerson.propTypes = {
  closeForm: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
};

NewPerson.defaultProps = {
  closeForm: () => {},
};

export default NewPerson;