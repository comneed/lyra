import * as React from 'react';
import { clsx } from 'clsx';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> { }

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(function Link(
    { className, ...props },
    ref
) {
    return (
        <a ref={ref} className={clsx(className)} {...props} />
    );
});

Link.displayName = 'Link';
