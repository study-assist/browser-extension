import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import toNumber from "lodash.tonumber";
import {
  mapToCssModules,
  tagPropType
} from "../../node_modules/reactstrap/src/utils";

const Progress = props => {
  const {
    children,
    className,
    barClassName,
    cssModule,
    value,
    max,
    color,
    bar,
    tag: Tag,
    ...attributes
  } = props;

  const percent = (toNumber(value) / toNumber(max)) * 100;

  const progressClasses = mapToCssModules(
    classNames(className, "progress"),
    cssModule
  );

  const progressBarClasses = mapToCssModules(
    classNames("progress-bar", bar ? className || barClassName : barClassName),
    cssModule
  );

  const ProgressBar = (
    <div
      className={progressBarClasses}
      style={{ width: `${percent}%`, backgroundColor: color }}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax={max}
    >
      {children}
    </div>
  );

  if (bar) {
    return ProgressBar;
  }

  return (
    // eslint-disable-next-line react/no-children-prop
    <Tag {...attributes} className={progressClasses} children={ProgressBar} />
  );
};

Progress.propTypes = {
  children: PropTypes.node,
  bar: PropTypes.bool,
  multi: PropTypes.bool,
  tag: tagPropType,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  className: PropTypes.string,
  barClassName: PropTypes.string,
  cssModule: PropTypes.object
};

Progress.defaultProps = {
  tag: "div",
  value: 0,
  max: 100
};

export default Progress;
