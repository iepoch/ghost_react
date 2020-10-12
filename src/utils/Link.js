import * as React from 'react';
import { Link as LinkImport } from 'react-router-dom';
import validator from 'validator';

// Fixes Link issue with rendering a external url vs a link to a page
// Validates the link is URL or Path on site
type PropsFlowType = {
  to: string | Object,
};

const Link = ({
  to,
  ...otherProps
}: PropsFlowType): React.Node => (
  validator.isURL(to)
    ? (
      <a
        href={to}
        {...otherProps}
      >
      </a>

    ) : (
      <LinkImport
        to={to}
        {...otherProps}
      />
    )
);

export default Link;