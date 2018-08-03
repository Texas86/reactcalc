import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';



class Animation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: this.props.reveal ? false : true,
      revealed: this.props.reveal ? false : true,
      countIterations: 0
    };
    this.elemRef = React.createRef();
  }
  componentDidMount() {
    // add EL on window if the animation is to "reveal"
    if (this.props.reveal) {
      window.addEventListener("scroll", this.updatePredicate);
    }
    console.log("document.innerHeight");
    console.log(document.documentElement.offsetHeight);
  }
  componentWillUnmount() {
    if (this.props.reveal) {
      window.removeEventListener("scroll", this.updatePredicate);
    }
  }

  // the function to judge whether the animation should be started

  updatePredicate = () => {
    const windowHeight = window.innerHeight;
    const scroll = window.scrollY;
    const docHeight = document.documentElement.offsetHeight;

    if (windowHeight + scroll - 100 > this.getOffset(this.elemRef.current) && scroll < this.getOffset(this.elemRef.current) ||
    windowHeight + scroll - 100 > this.getOffset(this.elemRef.current) + this.elemRef.current.clientHeight && scroll < this.getOffset(this.elemRef.current) + this.elemRef.current.clientHeight ||
    windowHeight + scroll == docHeight && this.getOffset(this.elemRef.current) + 100 > docHeight) {
      // if the predicate is true, change state
      console.log("isVisible: true")
      this.setState({
        isVisible: true
      })
    } else {
      //  was the "revealing" fired at least once?
      if (this.state.revealed) {
        return
      } else {
      // if it wasn't, hide
        console.log("isVisible: false")
        this.setState({
          isVisible: false,
          revealed: true
        })
      }
    }
  }

  // React Animation Event hooks:
  handleStart = (e) => {
    console.log("animation has begun");
    this.setState({
      countIterations: this.state.countIterations+1
    })
    if (this.props.onAnimationStart) {
      this.props.onAnimationStart();
    }
    console.log(this.state.countIterations);
  }

  handleIteration = (e) => {
    console.log("animation iteration");
    console.log(this.state.countIterations);
    this.setState({
      countIterations: this.state.countIterations+1
    })
  }

  handleEnd = (e) => {
    console.log("animation has ended");
    this.setState({
      countIterations: this.state.countIterations+1
    })
    console.log(this.state.countIterations);
    if (this.props.count == this.state.countIterations) {
      console.log("well, now it is done for sure");
    }
    if (this.props.onAnimationEnd && (this.props.count == this.state.countIterations)) {
      this.props.onAnimationEnd()
    }
  }

  // helper fx
  getOffset = (elem) => {
    var box = elem.getBoundingClientRect();
    var body = document.body;
    var docEl = document.documentElement;
    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var clientTop = docEl.clientTop || body.clientTop || 0;
    var top = box.top + scrollTop - clientTop;
    return Math.round(top);
}

  render() {
    const {
      className,
      tag: Tag,
      type,
      duration,
      delay,
      count,
      reveal,
      infinite,
      style,
      children,
      ...attributes
    } = this.props;

    const {isVisible, revealed} = this.state;

    let styleObject = {
      animationDuration: duration + 's',
      animationDelay: delay + 's',
      animationIterationCount: infinite? false : count,
      visibility: isVisible ? 'visible' : 'hidden',
      animationName: type
    };

    let hiddenStyles = {
      animationName: 'none',
      visibility: 'hidden'
    }

    const getAllStyles = Object.assign(styleObject, style);

    const classes = classNames(
      this.state.isVisible && 'animated', // will this work?
      type && type,
      infinite && 'infinite',
      className
    );

    return (
      <Tag {...attributes}
          className={classes}
          style={(isVisible && revealed)? getAllStyles: hiddenStyles}
          ref={this.elemRef}
          onAnimationStart={this.handleStart}
          onAnimationIteration={this.handleIteration}
          onAnimationEnd={this.handleEnd}
      >
        {children}
      </Tag>
    );
  }
}

Animation.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  type: PropTypes.string,
  delay: PropTypes.number,
  onAnimationEnd: PropTypes.func,
  onAnimationStart: PropTypes.func,

};

Animation.defaultProps = {
  tag: 'div',
  reveal: false,
  duration: 1,
  count: 1
};

export default Animation;
export { Animation as MDBAnimation };
