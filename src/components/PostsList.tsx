import { FunctionComponent } from 'react';

export const PostsList: FunctionComponent = ({ children }) => (
    <div className="grid grid-cols-1 gap-4">{children}</div>
);
