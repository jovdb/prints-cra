import { PropsWithChildren } from 'react';
import './page.css';

export function Page({ children }: PropsWithChildren) {
  return (
    <div className="page">
      {children}
    </div>
  );
}

export function PageHeader({ children }: PropsWithChildren) {
  return (
    <div className="page__header">
      {children}
    </div>
  );
}

export function PageBody({ children }: PropsWithChildren) {
  return (
    <div className="page__body">
      {children}
    </div>
  );
}

export function PageFooter({ children }: PropsWithChildren) {
  return (
    <div className="page__footer">
      {children}
    </div>
  );
}
