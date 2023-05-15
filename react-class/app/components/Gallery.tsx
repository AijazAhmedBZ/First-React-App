import Profile from "./Profile";
export function NamedProfile() {
  return <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katherine Johnson" />;
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing Scientists</h1>
      <div className="flex">
        <Profile />
        <Profile />
        <Profile />
      </div>
    </section>
  );
}
