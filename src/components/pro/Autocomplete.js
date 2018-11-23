import React, { Component } from 'react';
import classNames from 'classnames';
import Fa from '../Fa';

class Autocomplete extends Component {
  state = {
    value: '',
    suggestions: [],
    data: this.props.data,
    isTouched: false
  };

  onClick = e => {
    this.setState({ isTouched: true });
  };

  blurCallback = e => {
    this.setState({ isTouched: false });
  };

  valueChangeHandler = e => {
    let value = e.target.value;
    let suggestions;

    if (value.length === 0) {
      suggestions = [];
    } else {
      const regex = new RegExp(`^${value}`, 'i');
      suggestions = this.state.data.sort().filter(item => regex.test(item));
    }

    this.setState({
      value,
      suggestions
    });
  };

  selectSuggestion = (e, item) => {
    this.setState({ value: item, suggestions: [] });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  handleClear = () => {
    this.setState({
      value: '',
      suggestions: []
    });
  };

  renderSuggestions = () => {
    let suggestions = this.state.suggestions;
    if (suggestions.length === 0) return;

    return (
      <ul className="mdb-autocomplete-wrap">
        {suggestions.map((item, index) => {
          return (
            <li key={index} onClick={e => this.selectSuggestion(e, item)}>
              {item}
            </li>
          );
        })}
      </ul>
    );
  };

  render() {
    const { value, isTouched } = this.state;
    const {
      id,
      clear,
      name,
      placeholder,
      iconSize,
      className,
      disabled,
      label,
      labelClass,
      icon,
      iconClass,
      clearClass,
      search,
      getValue,
      ...attributes
    } = this.props;

    if (disabled) {
      attributes.disabled = true;
    }

    let isNotEmpty =
      Boolean(this.state.value) || placeholder || this.state.isTouched;

    const labelClassFix = classNames(
      isNotEmpty && 'active',
      disabled && 'disabled',
      labelClass
    );

    const iconClassFix = classNames('prefix', isTouched && 'active', iconClass);

    const clearClassFix = classNames(clearClass);

    const clearStyleFix = {
      position: 'absolute',
      zIndex: 2,
      top: '.85rem',
      right: 0,
      border: 'none',
      background: '0 0',
      visibility: value ? 'visible' : 'hidden'
    };

    return (
      <div className="md-form">
        {icon && <Fa icon={icon} size={iconSize} className={iconClassFix} />}
        <input
          type="text"
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={this.valueChangeHandler}
          onBlur={this.blurCallback}
          onClick={this.onClick}
          onFocus={this.onFocus}
          className="form-control mdb-autocomplete"
          name={name}
          {...attributes}
        />
        <label className={labelClassFix} htmlFor={id}>
          {label}
        </label>
        {clear && (
          <Fa
            icon="close"
            onClick={this.handleClear}
            style={clearStyleFix}
            className={clearClassFix}
          />
        )}
        {this.renderSuggestions()}
      </div>
    );
  }
}

// Autocomplete.propTypes = {
//   className: PropTypes.string,
//   icon: PropTypes.string
// };

// Autocomplete.defaultProps = {
//   id: 'autocomplete-1',
//   clear: true
// };

export default Autocomplete;
export { Autocomplete as MDBAutocomplete };
