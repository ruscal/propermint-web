import { FunctionComponent } from 'react';

export const PostsList: FunctionComponent = ({ children }) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">{children}</div>
);
