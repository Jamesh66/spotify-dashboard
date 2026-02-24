import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Display your Spotify profile data</h1>
      
      <section id="profile">
        <h2>Logged in as <span id="displayName"></span></h2>
        <span id="avatar"></span>
        <ul>
            <li>User ID: <span id="id"></span></li>
            <li>Email: <span id="email"></span></li>
            <li>Spotify URI: <a id="uri" href="#"></a></li>
            <li>Link: <a id="url" href="#"></a></li>
            <li>Profile Image: <span id="imgUrl"></span></li>
        </ul>
      </section>
    </div>
  );
}
