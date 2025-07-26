import React from "react";

function withLoading<T>(Component: React.ComponentType<T>) {
  return (props: T & { loading: boolean }) => {
    if (props.loading) return <p>Loading...</p>;
    return <Component {...props} />;
  };
}

type UserCardProps = {
  name: string;
};

const UserCard: React.FC<UserCardProps> = ({ name }) => <div>Hello, {name}</div>;

const UserCardWithLoading = withLoading(UserCard);

export default function WithLoadingHOCDemo() {
  return (
    <>
      <UserCardWithLoading name="Pranav" loading={true} />
      <UserCardWithLoading name="Pranav" loading={false} />
    </>
  );
}
