import * as React from "react";

// React.ReactNode;

interface MyComponentProps {
  //   children: React.;
  count: number;
}

const MyComponent = (props: MyComponentProps) => {
  return <div>hello, world! {props.count}</div>;
};

const ParentComponent = () => {
  return <MyComponent count={3} />;
};
